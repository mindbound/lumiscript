// Tool dispatch paths.
//
// Source-of-truth for the diagram in `docs/guides/tools.md`.
// Regenerate after edits with:
//
//   typst compile --format svg docs/diagrams/tools.typ docs/diagrams/tools.svg
//
// Or batch-regen all diagrams: scripts/build-diagrams.sh
// See docs/diagrams/README.md for the palette/style convention.

#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge

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
  // EVT (col 0) + INV (col 1) on row 0, handler (col 1) on row 2 directly
  // below INV, GWT (col 3) on row 1 — its midpoint between INV and handler
  // leaves room for the GWT→INV L-bend's label.

  node((0, 0), align(center)[
    *Lumiverse host fires*\
    `TOOL_INVOCATION`
  ], name: <evt>),

  // INV sits directly above the handler so the inline-path edge is a
  // straight vertical line into handler's top side.
  node((1, 0), align(center)[
    `api.tools.invoke('name', {...})`\
    from a script
  ], name: <inv>),

  // GWT sits at the vertical midpoint between INV and handler (row 1, col 3).
  // This gives the GWT→INV "routes through" edge an L-shape with room for
  // its label on the horizontal segment, instead of cramming it onto a
  // tight straight line between two adjacent top-row nodes.
  node((3, 1), align(center)[
    `api.llm.generateWithTools(...)`\
    returns `tool_calls`; your loop\
    dispatches each call
  ], name: <gwt>),

  node((1, 2), align(center)[
    `entry.handler`\
    (your registered tool)
  ], name: <handler>),

  // ─── Edges ──────────────────────────────────────────────────────────────

  // EVT → handler (Council path).
  // Single L-bend via explicit (0, 2) waypoint: down 2 cells, right 1.
  // Two segments — segment 0 is the long vertical run, segment 1 snaps
  // to <handler>. label-pos (0, 50%) is the midpoint of segment 0 = (0, 1),
  // same row as the INV→handler label's midpoint. A single straight
  // segment under the label (vs. the earlier "d,d,r" shorthand, which
  // introduced a spurious collinear vertex at (0, 1)) means Fletcher's
  // label-fill mask covers a clean run; the post-label line resumes from
  // the label's bottom-center anchor.
  edge(<evt>, (0, 2), <handler>, "-|>",
    label: align(center)[
      _Council path_\
      `ctx.councilMember` _populated_\
      \+ `requestId`\
      \+ `contextMessages`
    ],
    label-pos: (0, 50%),
    label-side: center,
    label-fill: lumi-fill,
  ),

  // INV → handler (inline path).
  // INV sits directly above handler in column 1, so the edge is a single
  // straight vertical segment. Label centered (label-pos: 50% on a line
  // edge gives the midpoint) in the gap row between INV and handler.
  edge(<inv>, <handler>, "-|>",
    label: align(center)[
      _inline path_\
      `ctx` _undefined_\
      _(no Council context)_
    ],
    label-side: center,
    label-fill: lumi-fill,
  ),

  // GWT → INV (dotted "routes through" annotation).
  // L-bend: up from GWT to row 0, then left to INV's right side. The
  // explicit (3, 0) waypoint gives the corner; the last vertex auto-snaps
  // to <inv>. Label sits on segment 1 (the horizontal bit at row 0).
  edge(<gwt>, (3, 0), <inv>, "..|>",
    label: align(center)[
      _your loop typically_\
      _calls_ `api.tools.invoke`
    ],
    label-pos: (1, 50%),
    label-side: center,
    label-fill: lumi-fill,
  ),
)
