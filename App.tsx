import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { DashBoard } from "./src/screens/Dashboard";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Register } from "./src/screens/Register";
import { CategorySelect } from "./src/screens/CategorySelect";

export default function App() {
  const [canShow, setCanShow] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (fontsLoaded === false) {
    return null;
  }

  if (canShow === false) {
    setTimeout(() => {
      setCanShow(true);
    }, 3000);

    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
