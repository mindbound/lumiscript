// Storage-model decision tree.
//
// Source-of-truth for the diagram in `docs/concepts/storage-model.md`.
// Regenerate after edits with:
//
//   typst compile --format svg docs/diagrams/storage-model.typ docs/diagrams/storage-model.svg
//
// Or batch-regen all diagrams: scripts/build-diagrams.sh
// See docs/diagrams/README.md for the palette/style convention.

#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge, shapes

#set page(width: auto, height: auto, margin: 0.4cm, fill: none)

// Lumiverse-inspired palette.
#let lumi-purple = rgb("#9370DB")
#let lumi-fill   = rgb("#F0EAF7")
#let lumi-text   = rgb("#2D1B4E")

#set text(
  font: ("Inter", "Segoe UI", "Helvetica", "Arial"),
  size: 10pt,
  fill: lumi-text,
)

#diagram(
  spacing: (2cm, 2.5cm),
  node-stroke: 1.5pt + lumi-purple,
  node-fill:   lumi-fill,
  node-corner-radius: 4pt,
  node-inset:  10pt,

  edge-stroke: 1.5pt + lumi-purple,

  // ─── Nodes ──────────────────────────────────────────────────────────────
  //
  // Four decision diamonds (Q1-Q4) + seven storage-option leaves.
  //
  //   Row 0:                  Q1 (col 4)
  //   Row 1:  local (col 1)   Q2 (col 4)
  //   Row 2:        Q3 (col 2)                  Q4 (col 5)
  //   Row 3:  global (col 1)  ss (col 3)                  var (col 7)
  //   Row 4:                                              db (col 7)
  //   Row 5:                                              enc (col 7)
  //   Row 6:                                              files (col 7)
  //
  // Q4's four children are stacked vertically at col 7 ("comb" pattern).
  // Edges from Q4 descend at col 5 and peel off horizontally to col 7 at
  // each child's row — gives each long descriptive label its own horizontal
  // segment with no possible overlap.

  node((4, 0), align(center)[
    Do you need the value to\
    survive past the current fire?
  ], shape: shapes.diamond, name: <q1>),

  node((1, 1), align(center)[
    `local let / const`\
    (also fine for within-fire async)
  ], name: <local>),

  node((4, 1), align(center)[
    Must it survive\
    backend restart?
  ], shape: shapes.diamond, name: <q2>),

  node((2, 2), align(center)[
    One or two keys,\
    simple values?
  ], shape: shapes.diamond, name: <q3>),

  node((5, 2), align(center)[
    What shape?
  ], shape: shapes.diamond, name: <q4>),

  node((1, 3), align(center)[
    `globalThis[key]`\
    per-process cache
  ], name: <global>),

  node((3, 3), align(center)[
    `api.scriptStorage`\
    per-script, admin-inspectable
  ], name: <ss>),

  node((7, 3), align(center)[
    `api.variables`\
    (local/global/character/chat)
  ], name: <var>),

  node((7, 4), align(center)[
    `api.db`\
    (collections + filter operators)
  ], name: <db>),

  node((7, 5), align(center)[
    `api.enclave`\
    (encrypted; `allowDangerous`)
  ], name: <enc>),

  node((7, 6), align(center)[
    `api.files`\
    (`allowDangerous`)
  ], name: <files>),

  // ─── Edges ──────────────────────────────────────────────────────────────

  // Q1 → Q2 (Yes branch of Q1).
  // Straight vertical from Q1's bottom vertex to Q2's top vertex.
  edge(<q1>, <q2>, "-|>",
    label: [*Yes*],
    label-fill: lumi-fill,
  ),

  // Q1 → local (No branch of Q1).
  // L-bend: left from Q1's left vertex along row 0, then down to local's
  // top. Waypoint (1, 0) is the corner.
  edge(<q1>, (1, 0), <local>, "-|>",
    label: [*No*],
    label-pos: (0, 50%),
    label-fill: lumi-fill,
  ),

  // Q2 → Q3 (No branch of Q2).
  // L-bend: left from Q2's left vertex along row 1 to col 2, then down to
  // Q3's top. Same shape as Q1 → local, one row down.
  edge(<q2>, (2, 1), <q3>, "-|>",
    label: [*No*],
    label-pos: (0, 50%),
    label-fill: lumi-fill,
  ),

  // Q2 → Q4 (Yes branch of Q2).
  // L-bend: right from Q2's right vertex along row 1 to col 5, then down
  // to Q4's top. Short horizontal (1 cell) — the "Yes" label is short
  // enough to fit comfortably.
  edge(<q2>, (5, 1), <q4>, "-|>",
    label: [*Yes*],
    label-pos: (0, 50%),
    label-fill: lumi-fill,
  ),

  // Q3 → global (Yes branch of Q3).
  // L-bend: left from Q3's left vertex along row 2 to col 1, then down
  // to global's top.
  edge(<q3>, (1, 2), <global>, "-|>",
    label: [*Yes*],
    label-pos: (0, 50%),
    label-fill: lumi-fill,
  ),

  // Q3 → ss (No branch of Q3).
  // L-bend: right from Q3's right vertex along row 2 to col 3, then down
  // to ss's top.
  edge(<q3>, (3, 2), <ss>, "-|>",
    label: [*No*],
    label-pos: (0, 50%),
    label-fill: lumi-fill,
  ),

  // Q4 → var (first comb tooth).
  // Down from Q4's bottom vertex at col 5 to row 3, then right to var's
  // left side. The four Q4-edges share the col-5 vertical descent and
  // peel off rightward at progressively lower rows — each gets its own
  // horizontal segment for the long descriptive label.
  edge(<q4>, (5, 3), <var>, "-|>",
    label: align(center)[
      _Small, scope-aware_\
      _key-value_
    ],
    label-pos: (1, 50%),
    label-fill: lumi-fill,
  ),

  // Q4 → db (second comb tooth, row 4).
  edge(<q4>, (5, 4), <db>, "-|>",
    label: align(center)[
      _Many records to_\
      _query or filter_
    ],
    label-pos: (1, 50%),
    label-fill: lumi-fill,
  ),

  // Q4 → enc (third comb tooth, row 5).
  edge(<q4>, (5, 5), <enc>, "-|>",
    label: align(center)[
      _Sensitive: tokens,_\
      _API keys_
    ],
    label-pos: (1, 50%),
    label-fill: lumi-fill,
  ),

  // Q4 → files (fourth comb tooth, row 6).
  edge(<q4>, (5, 6), <files>, "-|>",
    label: align(center)[
      _Binary blobs,_\
      _large files_
    ],
    label-pos: (1, 50%),
    label-fill: lumi-fill,
  ),
)
