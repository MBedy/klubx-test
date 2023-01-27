import React from "react";
import { View, StyleSheet } from "react-native";

import Spinner from "../components/spinner";

type HomeImageListFooterProps = {
  isLoading: boolean;
};

export default function HomeImageListFooter({
  isLoading,
}: HomeImageListFooterProps) {
  if (!isLoading) return null;

  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
