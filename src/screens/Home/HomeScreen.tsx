import React from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { GlobalColors, LightGlobalColors } from "../../config/theme/app-theme";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";
import { LoadingComponent } from "../../components/LoadingComponent";
import { MoviesPosterCarousel } from "../../components/MoviesPosterCarouselComponent";
import { HorizontalCarouselComponent } from "../../components/HorizontalCarouselComponent";

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
    upCommingNextPage,
  } = useMovies();

  if (isLoading) {
    return <LoadingComponent />;
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
          <HorizontalCarouselComponent
            movies={popularResults}
            title="Populares"
            colorTitle={GlobalColors.darkMidnightBlue}
            loadNextPage={popularNextPage}
          />

          {/* topRated Movies */}
          <HorizontalCarouselComponent
            movies={topRatedResults}
            title="Mejor Calificadas"
            colorTitle={GlobalColors.darkMidnightBlue}
            loadNextPage={topRatedNextPage}
          />

          {/* Popular Movies */}
          <HorizontalCarouselComponent
            movies={upcomingResults}
            title="Proximamente"
            colorTitle={GlobalColors.darkMidnightBlue}
            loadNextPage={upCommingNextPage}
          />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
