import { FlashList } from "@shopify/flash-list";
import React from "react";

import HomeImageListEmpty from "./image-list-empty";
import HomeImageListFooter from "./image-list-footer";
import HomeImageListItem from "./image-list-item";
import useFetchImages from "../hooks/use-fetch-images";
import { PhotoModel } from "../services/pexels";

function getKeyExtractor(image: PhotoModel) {
  return image?.id?.toString();
}

export default function HomeImageList() {
  const { data, onFetchMoreImages, isFetching } = useFetchImages();

  return (
    <FlashList
      onEndReached={() => {
        onFetchMoreImages();
      }}
      data={data ?? []}
      keyExtractor={getKeyExtractor}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews
      style={{ flexGrow: 1 }}
      ListEmptyComponent={<HomeImageListEmpty isLoading={isFetching} />}
      ListFooterComponent={<HomeImageListFooter isLoading={isFetching} />}
      numColumns={2}
      estimatedItemSize={200}
      renderItem={({ item, index }) => (
        <HomeImageListItem image={item} index={index} />
      )}
    />
  );
}
