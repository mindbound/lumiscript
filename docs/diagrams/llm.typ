// LLM API decision tree.
//
// Source-of-truth for the diagram in `docs/guides/llm.md`.
// Regenerate after edits with:
//
//   typst compile --format svg docs/diagrams/llm.typ docs/diagrams/llm.svg
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
  // Q1 + Q2 are decision diamonds (matches the D2 convention). Others are
  // rounded rectangles.
  //
  //   Row 0:  Q1 (col 2) . . . . . . . . DR (col 4)    — DR is the side option
  //   Row 1:  GWT (col 0)   Q2 (col 2)                 — Q2 directly under Q1
  //   Row 2:               GS (col 1)   G (col 3)      — Q2's children

  node((2, 0), align(center)[
    Do you need the LLM\
    to call tools mid-generation?
  ], shape: shapes.diamond, name: <q1>),

  node((4, 0), align(center)[
    `api.llm.dryRun`\
    no LLM call
  ], name: <dr>),

  node((0, 1), align(center)[
    `api.llm.generateWithTools`\
    execute tools + re-prompt yourself
  ], name: <gwt>),

  node((2, 1), align(center)[
    Do you need structured\
    parsed + validated output?
  ], shape: shapes.diamond, name: <q2>),

  node((1, 2), align(center)[
    `api.llm.generateStructured`\
    Zod or JSON Schema
  ], name: <gs>),

  node((3, 2), align(center)[
    `api.llm.generate`\
    plain text response
  ], name: <g>),

  // ─── Edges ──────────────────────────────────────────────────────────────

  // Q1 → GWT (Yes branch of Q1).
  // L-bend: left from Q1's left vertex along row 0, then down to GWT's top.
  // The explicit (0, 0) waypoint is the corner; auto-snap picks Q1's left
  // vertex (toward the waypoint) and GWT's top side (back toward the
  // waypoint). Label sits beside the horizontal segment in the row-0 gap.
  edge(<q1>, (0, 0), <gwt>, "-|>",
    label: [*Yes*],
    label-pos: (0, 50%),
    label-fill: lumi-fill,
  ),

  // Q2 → GS (Yes branch of Q2).
  // Mirror of Q1 → GWT: left from Q2's left vertex along row 1, then down.
  edge(<q2>, (1, 1), <gs>, "-|>",
    label: [*Yes*],
    label-pos: (0, 50%),
    label-fill: lumi-fill,
  ),

  // Q2 → G (No branch of Q2).
  // Right-side mirror of Q2 → GS: right from Q2's right vertex along row 1,
  // then down to G's top.
  edge(<q2>, (3, 1), <g>, "-|>",
    label: [*No*],
    label-pos: (0, 50%),
    label-fill: lumi-fill,
  ),

  // Q1 → Q2 (No branch of Q1).
  // Straight vertical from Q1's bottom vertex to Q2's top vertex.
  edge(<q1>, <q2>, "-|>",
    label: [*No*],
    label-fill: lumi-fill,
  ),

  // Q1 → DR (side option, dotted).
  // Straight horizontal from Q1's right vertex to DR's left side.
  // Dotted marker ("..|>") + italic label distinguishes this from the
  // main-tree solid edges — DR is an alternative to the whole decision,
  // not a branch of it.
  edge(<q1>, <dr>, "..|>",
    label: align(center)[
      _Or just inspect what_\
      _would be sent?_
    ],
    label-fill: lumi-fill,
  ),
)
