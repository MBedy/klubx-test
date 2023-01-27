import { PropsWithChildren } from "react";
import { SafeAreaProvider as RNSafeAreaProvider } from "react-native-safe-area-context";

export default function SafeAreaProvider({
  children,
}: PropsWithChildren<object>) {
  return <RNSafeAreaProvider>{children}</RNSafeAreaProvider>;
}
