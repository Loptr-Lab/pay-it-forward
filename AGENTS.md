# UI SDK usage in PLAY IT FORWARD

- This project uses Vercel UI SDK React components (`@ui-sdk/react`) and behaviors (`@ui-sdk/core`) selectively.
- Before creating or changing SDK components, consult the official docs and package documentation in `node_modules/@ui-sdk/react/docs/llms.txt` after dependencies are installed.
- Import components from dedicated entry points, such as `@ui-sdk/react/select`; there is no root import.
- UI SDK is beta. Prefer native HTML for simple controls; use SDK when it materially improves keyboard, focus, popup, or ARIA behavior.
- Preserve PLAY IT FORWARD's existing visual design. SDK components are unstyled; style them using project CSS.
- Do not add agent-bridge/WebMCP functionality or automatic publishing without a separate product/privacy review.
