import { createTheme } from '@shopify/restyle';

import { buttonVariants } from './buttonVariants';
import { colors } from './colors';
import { spacing } from './spacing';
import { textVariants } from './textVariants';

const theme = createTheme({
  colors,
  spacing,
  textVariants,
  buttonVariants,
});

type Theme = typeof theme;

export { Theme, theme };
