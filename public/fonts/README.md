# fonts/

Drop brand typeface files here. Once present, I'll wire `@font-face` declarations into `../colors_and_type.css` and remove the Google Fonts `@import`.

## Recommended format

`.woff2` — modern, compressed, supported in every browser we care about.

Acceptable fallbacks: `.woff`, `.ttf`, `.otf`.

## File naming

Use a consistent pattern so the `@font-face` block stays clean:

```
{FamilyName}-{Weight}{Italic?}.woff2
```

Examples:

```
fonts/
  QuantumSimplexSans-Regular.woff2     (weight 400)
  QuantumSimplexSans-Medium.woff2      (weight 500)
  QuantumSimplexSans-Semibold.woff2    (weight 600)
  QuantumSimplexSans-Bold.woff2        (weight 700)
  QuantumSimplexSans-RegularItalic.woff2
  QuantumSimplexDisplay-Bold.woff2
  QuantumSimplexMono-Regular.woff2
```

## When you add files, tell me

- Family name (e.g., "Söhne", "GT America", "Akkurat", "Custom-FoundryName")
- Which role it covers — **display** (headlines), **sans** (UI / body), **mono** (code), or multiple
- Weights provided
- Any licensing constraints (e.g., "web only, no embedding in PPTX exports")

Then I'll swap the system over.
