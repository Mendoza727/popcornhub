import React from "react";
import { Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";

export const HomeScreen = () => {
  const {
    isLoading,
    nowPlayingResults,
    popularResults,
    topRatedResults,
    upcomingResults,
  } = useMovies();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
