import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { GlobalColors } from "../../config/theme/app-theme";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MoviesPosterCarousel } from "../../components/MoviesPosterCarousel";
import { HorizontalCarousel } from "../../components/HorizontalCarousel";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const {
    isLoading,
    nowPlayingResults,
    popularResults,
    topRatedResults,
    upcomingResults,
    popularNextPage,
    nowPlayingNextPage,
    topRatedNextPage,
    upCommingNextPage
  } = useMovies();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View
        style={{
          marginTop: top + 20,
          marginBottom: 30,
        }}
      >
        <ImageBackground>
          {/* Poster Carousel */}
          <MoviesPosterCarousel
            movies={nowPlayingResults}
            loadNextPage={nowPlayingNextPage}
          />

          {/* Popular Movies */}
          <HorizontalCarousel
            movies={popularResults}
            title="Populares"
            colorTitle={GlobalColors.richBlack}
            loadNextPage={popularNextPage}
          />

          {/* topRated Movies */}
          <HorizontalCarousel
            movies={topRatedResults}
            title="Mejor Calificadas"
            colorTitle={GlobalColors.saffronMango}
            loadNextPage={topRatedNextPage}
          />

          {/* Popular Movies */}
          <HorizontalCarousel
            movies={upcomingResults}
            title="Proximamente"
            colorTitle={GlobalColors.redSalsa}
            loadNextPage={upCommingNextPage}
          />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
