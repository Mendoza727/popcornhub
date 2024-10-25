import React from "react";
import { Image, Pressable, View } from "react-native";
import { Movie } from "../core/entities/Movie.entity";
import { GlobalStyles } from "../config/theme/app-theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamas } from "../navigations/Navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MovieImagesPoster = ({
  movie,
  width = 300,
  height = 400,
}: Props) => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamas>>();

  return (
    <Pressable
      style={({ pressed }) => ({
        width,
        height,
        marginHorizontal: 4,
        paddingBottom: 20,
        paddingHorizontal: 2,
        opacity: pressed ? 0.89 : 1,
      })}
      onPress={() => navigate("Details", { MovieId: movie.id })}
    >
      <View
        style={ GlobalStyles.imageContainer }  
      >
        <Image style={GlobalStyles.image} source={{ uri: movie.poster }} />
      </View>
    </Pressable>
  );
};
