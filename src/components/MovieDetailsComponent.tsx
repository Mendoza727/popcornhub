import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FullDetailsMovie, MovieCasting, TrailerMovie } from "../core/entities/Movie.entity";
import { GlobalStyles } from "../config/theme/app-theme";
import Svg, { Path } from "react-native-svg";
import { HorizontalBadgesComponent } from "./HorizontalBadgesComponent";
import { ScrollView } from "react-native-gesture-handler";
import { Formatter } from "../config/helpers/CurrencyHelper";
import { CompaniesBagdesComponent } from "./CompaniesBagdesComponent";
import { TimeConverted } from "../config/helpers/TimeHelper";
import { CastingPersonComponent } from "./CastingPersonComponent";
import { VideoComponentSound } from "./VideoComponent";

interface Props {
  movie: FullDetailsMovie;
  casting: MovieCasting[];
  videos: TrailerMovie[];
}

type MovieStatus =
  | "Planned"
  | "In Production"
  | "Post Production"
  | "Released"
  | "Canceled"
  | "Rumored"
  | "Unknown";

function getStatusColor(status: MovieStatus): string {
  const statusColors: Record<MovieStatus, string> = {
    Planned: "#FFA500", // Naranja
    "In Production": "#007BFF", // Azul
    "Post Production": "#FFC107", // Amarillo
    Released: "#28A745", // Verde
    Canceled: "#DC3545", // Rojo
    Rumored: "#6F42C1", // Morado
    Unknown: "#6C757D", // Gris
  };

  return statusColors[status];
}

export const MovieDetailsComponent = ({ movie, casting, videos }: Props) => {
  const totalStars = 1; // Total de estrellas posibles
  const filledStars = Math.floor(movie.rating); // Llenar estrellas basado en vote_average

  return (
    <ScrollView
      style={{
        marginHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "column",
        }}
      >
        {/* title */}
        <Text style={GlobalStyles.title}>{movie.title}</Text>

        {/* rating */}
        <View style={style.container}>
          <View style={style.starsContainer}>
            {[...Array(totalStars)].map((_, index) => (
              <Svg
                key={index}
                width={16}
                height={16}
                fill={index < filledStars ? "#FBBF24" : "gray"} // Cambia el color basado en si la estrella está llena
                style={style.starIcon}
                viewBox="0 0 22 20"
              >
                <Path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </Svg>
            ))}
          </View>
          <Text style={style.ratingText}>{filledStars.toFixed(0)}</Text>
          <Text style={style.outOfText}>out of</Text>
          <Text style={style.ratingText}>10</Text>
        </View>

        {/* generos */}
        <HorizontalBadgesComponent genres={movie.genres} />

        {/* sipnosis */}
        <View style={style.containerDefault}>
          <Text style={GlobalStyles.text}>Sinopsis</Text>
          <Text style={GlobalStyles.description}>
            {movie.description !== ""
              ? movie.description
              : "No Description Availible"}
          </Text>
        </View>

        {/* budget y earning / duration state */}
        <View style={style.containerDefaultData}>
          {/* Contenedor para Budget y Earnings */}
          <View style={style.leftContainer}>
            <Text style={style.label}>Presupuesto:</Text>
            <View style={style.card}>
              <Text style={style.value}>
                {Formatter.currency(movie.budget)}
              </Text>
            </View>
            <Text style={style.label}>Ganancias:</Text>
            <View style={style.card}>
              <Text style={style.value}>
                {Formatter.currency(movie.earnings)}
              </Text>
            </View>
          </View>

          {/* Contenedor para Duration y Status */}
          <View style={style.rightContainer}>
            <Text style={style.label}>Duración:</Text>
            <View style={style.card}>
              <Text style={style.value}>
                {TimeConverted.ConvertTime(movie.duration)}
              </Text>
            </View>
            <Text style={style.label}>Estado:</Text>
            <View
              style={{
                ...style.badge,
                backgroundColor: getStatusColor(
                  movie.status_movie as MovieStatus
                ),
              }}
            >
              <Text style={style.badgeText}>{movie.status_movie}</Text>
            </View>
          </View>
        </View>

        {/* production companies */}
        <View style={style.containerDefault}>
          <Text style={GlobalStyles.text}>Productoras</Text>
          <CompaniesBagdesComponent companies={movie?.productionCompanies} />
        </View>
      </View>

      {/* actors */}
      <View style={{
        ...style.containerDefault,
        marginBottom: 10
      }}>
        <Text style={GlobalStyles.text}>Reparto</Text>
        <CastingPersonComponent
          casting={casting}
        />
      </View>

      {/* videos */}
      <View style={style.containerDefault}>
        <Text style={GlobalStyles.text}>Videos Relacionados</Text>
        <VideoComponentSound
          videos={videos}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centra horizontalmente el contenido
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centra las estrellas
  },
  containerDefault: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  starIcon: {
    marginRight: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280", // Gray-500
  },
  outOfText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280", // Gray-500
  },
  containerDefaultData: {
    flexDirection: "row", // Alinear los hijos horizontalmente
    justifyContent: "space-between", // Espacio entre los contenedores
    padding: 15,
  },
  leftContainer: {
    flex: 1, // Ocupar espacio disponible
    paddingRight: 10, // Espacio entre los contenedores
  },
  rightContainer: {
    flex: 1, // Ocupar espacio disponible
    paddingLeft: 10, // Espacio entre los contenedores
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#495057", // Color del texto más oscuro
    marginBottom: 5, // Espaciado entre la etiqueta y la tarjeta
  },
  value: {
    fontSize: 16,
    color: "#343a40", // Color del texto más claro
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff", // Color de fondo de la tarjeta
    borderRadius: 8,
    padding: 10,
    marginBottom: 10, // Espaciado entre las tarjetas
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, // Sombra para Android
    width: "auto",
  },
  badge: {
    backgroundColor: "#007bff", // Color del badge
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start", // Alinear a la izquierda
    marginTop: 5, // Espacio encima del badge
  },
  badgeText: {
    color: "#fff", // Color del texto del badge
    fontWeight: "bold",
    textAlign: "center",
  },
});
