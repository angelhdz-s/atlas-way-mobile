# AtlasWay Mobile - Expo React Native App

Companion mobile app to the web project at `C:\Users\Angel\Proyectos\Web\NextJs\atlas-way`. See that repo's AGENTS.md for shared conventions (path aliases, import ordering, module structure, naming).

## Expo Version

Expo SDK 56 / React Native 0.85.3 / React 19.2.3. Read versioned docs before writing code: https://docs.expo.dev/versions/v56.0.0/

## Dev Commands

```bash
pnpm install          # install dependencies (pnpm is the package manager)
npx expo start        # start dev server
npm run lint          # eslint via expo lint
```

No typecheck or test scripts configured yet.

## Project Structure

- `src/app/` - Expo Router file-based routing (entry point)
- `src/presentation/ui/components/` - Shared UI primitives (Text, PageContainer, LinkCard, etc.)
- `src/presentation/modules/` - Feature-specific modules (icon, streak, tabs)
- `src/presentation/utils/` - Shared utilities (font.utils.ts)
- `src/modules/` - Domain logic (currently empty; follows same layering as web project: `domain/application/infrastructure/presentation`)
- `src/styles.ts` + `global.css` - Theme tokens and brand colors

## Path Aliases

```
@/*       -> ./src/*
@/assets/* -> ./assets/*
```

## Imports

- **Type imports always come first**, using `import type`
- **Separate type imports from value imports** when they come from the same module
- **Always use absolute imports** via `@/` prefix (never relative `../` or `./`)

```typescript
// Correct - type import first, then value import
import type { FontFamily } from "@/presentation/ui/presentation.ui.types";
import { getFont } from "@/presentation/utils/font.utils";

// Correct - separate type and value from same module
import type { ColorScheme } from "@/styles";
import { DARK_THEME, LIGHT_THEME } from "@/styles";

// Incorrect - mixed type and value
import { DARK_THEME, type ColorScheme } from "@/styles";

// Incorrect - relative import
import { Text } from "../ui/components/Text";

// Correct - absolute import
import { Text } from "@/presentation/ui/components/Text";
```

## Styling

- **Uniwind** (Tailwind CSS 4 wrapper) - NOT standard React Native StyleSheet
- Theme tokens in `global.css` `@theme { }` block
- Duplicate theme constants in `src/styles.ts` (DARK_THEME / LIGHT_THEME)
- `tailwind-merge` used for class merging (via `twMerge`)
- VSCode class attribute list configured in `.vscode/settings.json`

## Routing

- Root layout (`src/app/_layout.tsx`): Tab navigator with 4 tabs (Home, Progress, Activity, Plan)
- Sub-sections (`plan/`, `activity/`, `progress/`): Stack navigators inside tabs
- Each sub-section has its own `_layout.tsx` with Stack

## Fonts

- Loaded in `src/app/_layout.tsx` via `useFonts()`
- Use `getFont()` from `@/presentation/utils/font.utils` for font family strings
- Naming: `funnel-display-{weight}`, `outfit-{weight}`
- Type definitions: `src/presentation/ui/presentation.ui.types.d.ts`

## Gotchas

- `expo-env.d.ts`, `src/uniwind-types.d.ts`, root `uniwind-types.d.ts` are auto-generated - never edit manually
- Dark theme is hardcoded in sub-layout `_layout.tsx` files (not using system theme detection yet)
