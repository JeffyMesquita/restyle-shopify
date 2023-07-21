# Using Restyle of Shopify

## Installation

```bash
npx expo install @shopify/restyle
```

## Usage

- Create a folder called `theme` in the root of the project, yuo can use the `theme.ts` inside folder `src/theme` as a template.

```ts
import { createTheme } from '@shopify/restyle';
// you can create the properties in other files and import here
import { colors } from './colors';
import { spacing } from './spacing';

const theme = createTheme({
  colors,
  spacing,
  // you can have more properties here
  breakpoints: {},
  textVariants: {},
  borderRadii: {},
  zIndices: {},
  cardVariants: {},
  breakpoints: {},
  spacing: {},
  borderRadii: {},
  zIndices: {},
  cardVariants: {},
});

type Theme = typeof theme;

export { theme, Theme };
```

- Wrap the `ThemeProvider` around the `Components` or your `NavigationContainer` in `App.tsx`:

```tsx
import { ThemeProvider } from '@shopify/restyle';

import { theme } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
```

## Fonts with Expo

- Install the fonts:

```bash
npx expo install expo-font @expo-google-fonts/poppins
```
