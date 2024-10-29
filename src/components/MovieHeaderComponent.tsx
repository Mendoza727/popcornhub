import React from "react";
import { FullDetailsMovie, TrailerMovie } from "../core/entities/Movie.entity";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";
import { VideoComponent } from "./VideoComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconComponent } from "./IconComponent";
import { useNavigation } from "@react-navigation/native";
import { GlobalColors } from "../config/theme/app-theme";
import { Svg, Path} from 'react-native-svg';

interface Props {
  movie: FullDetailsMovie;
  trailer: TrailerMovie[];
}

export const MovieHeaderComponent = ({ movie, trailer }: Props) => {
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();

  // Obtenemos el trailer más reciente
  const recentTrailer = trailer
    .filter((trailer) => trailer.type === "Trailer")
    .sort((a, b) => b.publicated_at.getTime() - a.publicated_at.getTime())[0];

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          ...styles.overlayPressable, 
          top: top + 5,
          marginLeft: 10,
        }}
        onPress={() => goBack()}
      >
        <IconComponent nameIcon="arrow-back" color="white" size={40} />
      </Pressable>
      {recentTrailer ? (
        <>
          <VideoComponent
            site={recentTrailer.siteStored}
            urlVideo={recentTrailer.key}
          />
          <View style={styles.posterContainer}>
            <Image source={{ uri: movie?.poster }} style={styles.poster} />
          </View>
        </>
      ) : (
        <ImageBackground
          source={{ uri: movie?.backdrop }}
          style={{
            ...styles.backdrop,
            top: top,
          }}
        >
          <View style={styles.posterContainer}>
            <Image source={{ uri: movie?.poster }} style={styles.poster} />
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    marginBottom: 140,
  },
  overlayPressable: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    width: 50,
    height: 50,
  },
  backdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  posterContainer: {
    position: "absolute",
    bottom: -90, // Ajusta según sea necesario para centrar verticalmente
    left: "50%", // Centra horizontalmente
    transform: [{ translateX: -65 }], // Ajusta para centrar basado en el ancho del poster
    width: 120,
    height: 180,
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 10,
  },
  poster: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  } 
});
