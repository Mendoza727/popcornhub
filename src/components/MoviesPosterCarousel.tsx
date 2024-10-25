import React, { useEffect, useRef } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { Movie } from "../core/entities/Movie.entity";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { MovieImagesPoster } from "./MovieImagesPoster";

interface Props {
  movies: Movie[];
  height?: number;
  loadNextPage?: () => void;
}

export const MoviesPosterCarousel = ({
  height = 440,
  movies,
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
    <View style={{ height }}>
      <FlatList
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
        data={movies}
        renderItem={({ item }) => <MovieImagesPoster movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => onScroll(event)}
        scrollEventThrottle={16} // Controla la frecuencia de los eventos de scroll
      />
    </View>
  );
};
