import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";

import { fetchImages, PexelsPhotoResult } from "../services/pexels";

export default function useFetchImages() {
  const { data, error, status, fetchNextPage, isFetching, hasNextPage } =
    useInfiniteQuery<PexelsPhotoResult, Error>(
      ["images"],
      ({ pageParam = 1 }) => {
        return fetchImages(pageParam);
      },
      {
        getNextPageParam: (lastPage) => lastPage.page + 1,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
      }
    );

  const images = useMemo(
    () =>
      data?.pages?.flatMap((group) => {
        const newPhotos = group?.photos ?? [];
        return newPhotos;
      }),
    [data?.pages?.length]
  );

  const handleFetchMoreImages = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  return {
    data: images,
    error,
    status,
    isFetching,
    onFetchMoreImages: handleFetchMoreImages,
  };
}
