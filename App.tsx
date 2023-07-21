import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';
import { theme } from './src/theme/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}
