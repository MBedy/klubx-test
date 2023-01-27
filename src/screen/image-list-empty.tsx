import React from "react";
import { View, Text, StyleSheet } from "react-native";

type HomeImageListEmptyProps = {
  isLoading: boolean;
};

export default function HomeImageListEmpty({
  isLoading,
}: HomeImageListEmptyProps) {
  if (isLoading) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>La liste est vide</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
