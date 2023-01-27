import { StatusBar } from "expo-status-bar";
import React from "react";

import ReactQueryProvider from "./src/contexts/react-query";
import SafeAreaProvider from "./src/contexts/safe-area";
import useScreenOrientation from "./src/hooks/use-screen-orientation";
import HomeScreen from "./src/screen";

export default function App() {
  useScreenOrientation();

  return (
    <ReactQueryProvider>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </ReactQueryProvider>
  );
}
