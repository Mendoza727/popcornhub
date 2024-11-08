import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useMovie } from "../../hooks/useMovie";
import { LoadingComponent } from "../../components/LoadingComponent";
import { RootStackParamas } from "../../navigations/Navigation";
import { MovieHeaderComponent } from "../../components/MovieHeaderComponent";
import { MovieDetailsComponent } from "../../components/MovieDetailsComponent";
import { ScrollView } from "react-native-gesture-handler";

export const DetailsScreen = () => {
  const { MovieId } = useRoute<RouteProp<RootStackParamas, "Details">>().params;

  const { isLoading, movieDetail, trailerDetail, castingDetail } =
    useMovie(MovieId);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <ScrollView>
      {/* header */}
      <MovieHeaderComponent movie={movieDetail!} trailer={trailerDetail!} />

      {/* other info */}
      <MovieDetailsComponent
        movie={movieDetail!}
        casting={castingDetail}
        videos={trailerDetail}
      />
    </ScrollView>
  );
};
