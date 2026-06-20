/**
 * ============================================================================
 * CODE DIFF — line-level unified diff for Lisa's "Apply to script" preview
 * ============================================================================
 * Pure, framework-free so it's unit-tested directly. Produces a git-style
 * unified diff (add / del / context rows) between a script's CURRENT code and
 * the code Lisa wants to apply, so the user reviews the exact change before the
 * overwrite — instead of trusting a blind whole-file replace.
 *
 * Cheap + bounded: trims the common prefix/suffix first (so a small edit in a
 * big file diffs only the changed region), LCS-diffs the middle, collapses long
 * unchanged runs into `gap` markers, and caps the rendered row count. A
 * pathologically large changed region falls back to a coarse delete-all/add-all
 * rather than an O(n·m) blowup.
 */

export type DiffRowType = 'ctx' | 'add' | 'del' | 'gap';

export interface DiffRow {
  type: DiffRowType;
  /** Line text (empty for `gap`). */
  text: string;
  /** For `gap`: how many unchanged lines were collapsed. */
  count?: number;
}

export interface CodeDiff {
  rows: DiffRow[];
  added: number;
  removed: number;
  /** True when the two inputs are identical (no changes). */
  identical: boolean;
  /** True when the rendered rows were capped (diff is larger than `maxRows`). */
  truncatedRows: boolean;
}

/** Standard LCS-backtrack diff over two line arrays → ctx/add/del rows. */
function lcsDiff(a: string[], b: string[]): DiffRow[] {
  const n = a.length;
  const m = b.length;
  // dp[i][j] = LCS length of a[i:] and b[j:].
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i]![j] = a[i] === b[j] ? dp[i + 1]![j + 1]! + 1 : Math.max(dp[i + 1]![j]!, dp[i]![j + 1]!);
    }
  }
  const rows: DiffRow[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { rows.push({ type: 'ctx', text: a[i]! }); i++; j++; }
    else if (dp[i + 1]![j]! >= dp[i]![j + 1]!) { rows.push({ type: 'del', text: a[i]! }); i++; }
    else { rows.push({ type: 'add', text: b[j]! }); j++; }
  }
  while (i < n) { rows.push({ type: 'del', text: a[i]! }); i++; }
  while (j < m) { rows.push({ type: 'add', text: b[j]! }); j++; }
  return rows;
}

/**
 * Collapse runs of unchanged (`ctx`) lines longer than the context window into
 * `context` lines at each adjacent change + a single `gap` marker. Runs at the
 * very start/end only keep the side facing a change.
 */
function collapseContext(rows: DiffRow[], context: number): DiffRow[] {
  const out: DiffRow[] = [];
  let i = 0;
  while (i < rows.length) {
    if (rows[i]!.type !== 'ctx') { out.push(rows[i]!); i++; continue; }
    let j = i;
    while (j < rows.length && rows[j]!.type === 'ctx') j++;
    const runLen = j - i;
    const head = i === 0 ? 0 : context;            // lines kept after the previous change
    const tail = j === rows.length ? 0 : context;  // lines kept before the next change
    if (head + tail >= runLen) {
      for (let k = i; k < j; k++) out.push(rows[k]!);
    } else {
      for (let k = i; k < i + head; k++) out.push(rows[k]!);
      out.push({ type: 'gap', text: '', count: runLen - head - tail });
      for (let k = j - tail; k < j; k++) out.push(rows[k]!);
    }
    i = j;
  }
  return out;
}

/** Largest changed-region cell count (lines_before × lines_after) before the
 *  LCS falls back to a coarse delete-all/add-all (≈2000×2000). */
const MAX_LCS_CELLS = 4_000_000;

export function computeCodeDiff(
  before: string,
  after: string,
  opts: { context?: number; maxRows?: number } = {},
): CodeDiff {
  const context = opts.context ?? 3;
  const maxRows = opts.maxRows ?? 2000;

  if (before === after) {
    return { rows: [], added: 0, removed: 0, identical: true, truncatedRows: false };
  }

  const a = before.length ? before.split('\n') : [];
  const b = after.length ? after.split('\n') : [];

  // Trim the common prefix + suffix so we only diff the changed region.
  let p = 0;
  while (p < a.length && p < b.length && a[p] === b[p]) p++;
  let sa = a.length;
  let sb = b.length;
  while (sa > p && sb > p && a[sa - 1] === b[sb - 1]) { sa--; sb--; }

  const midA = a.slice(p, sa);
  const midB = b.slice(p, sb);
  const middle: DiffRow[] = midA.length * midB.length > MAX_LCS_CELLS
    ? [...midA.map((t): DiffRow => ({ type: 'del', text: t })), ...midB.map((t): DiffRow => ({ type: 'add', text: t }))]
    : lcsDiff(midA, midB);

  const full: DiffRow[] = [
    ...a.slice(0, p).map((t): DiffRow => ({ type: 'ctx', text: t })),
    ...middle,
    ...a.slice(sa).map((t): DiffRow => ({ type: 'ctx', text: t })),
  ];

  const added = full.reduce((acc, r) => acc + (r.type === 'add' ? 1 : 0), 0);
  const removed = full.reduce((acc, r) => acc + (r.type === 'del' ? 1 : 0), 0);

  const collapsed = collapseContext(full, context);
  const truncatedRows = collapsed.length > maxRows;
  const rows = truncatedRows ? collapsed.slice(0, maxRows) : collapsed;

  return { rows, added, removed, identical: false, truncatedRows };
}
