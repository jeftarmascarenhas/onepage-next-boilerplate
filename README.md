# Boilerplate to one page with Next.js

This is a really simple project that show the usage of Next.js with TypeScript, Styled Components, eslint, prettier, lint-stage and commitlint.


### Folder Structurestyled-components
The others files you don't need to change them.

```bash
├── .hysky                  # husky configuration
├── .next                   # next configuration
├── public                  # Use to put public images, fonts and whatever public thing
├── src
│   ├── main
│       ├── @types          # Config global Types
│       ├── factories       # factory to pages, http, validation, caches...
│   ├── pages               # Next route system
│   ├── presentation        # Components and containers to use in factory pages
│       ├── components      # Global Components
│       ├── Container       # Component to compose factory page
│   ├── styles              # Themes, global styles and palette of colors
```

### Libs used

Prod
- next
- react
- react-dom
- react-is
- styled-components

Dev
- typescript
- eslint
- @commitlint
- husky
- lint-staged
