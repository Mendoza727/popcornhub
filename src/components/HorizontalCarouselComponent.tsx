import React, { useEffect, useRef } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { Movie } from "../core/entities/Movie.entity";
import { GlobalColors } from "../config/theme/app-theme";
import { FlatList } from "react-native-gesture-handler";
import { MovieImagesPoster } from "./MovieImagesPoster";

interface Props {
  movies: Movie[];
  title?: string;
  colorTitle?: string;
  loadNextPage?: () => void;
}

export const HorizontalCarouselComponent = ({
  movies,
  title,
  colorTitle,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    isLoading.current = false; // Restablece isLoading después de actualizar movies
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width >= contentSize.width - 100;

    if (!isEndReached) return;

    isLoading.current = true;
    loadNextPage && loadNextPage();
  };

  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}
    >
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginLeft: 10,
            marginHorizontal: 10,
            color: GlobalColors.richBlack,
          }}
        >
          {title}
        </Text>
      )}

      <FlatList
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
        data={movies}
        renderItem={({ item }) => (
          <MovieImagesPoster movie={item} width={160} height={220} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => onScroll(event)}
        scrollEventThrottle={16} // Controla la frecuencia de los eventos de scroll
      />
    </View>
  );
};
