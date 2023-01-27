import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from "react-native";

import { PhotoModel } from "../services/pexels";

type HomeImageListItemProps = {
  image: PhotoModel;
  index: number;
};

export default function HomeImageListItem({
  image,
  index,
}: HomeImageListItemProps) {
  return (
    <ImageBackground
      source={{ uri: image?.src?.portrait }}
      style={styles.image}
    >
      <View style={styles.box}>
        <Text style={styles.text}>{index + 1}</Text>
      </View>
    </ImageBackground>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: width / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    padding: 5,
    backgroundColor: "white",
  },
  text: {
    fontSize: 30,
    color: "red",
  },
});
