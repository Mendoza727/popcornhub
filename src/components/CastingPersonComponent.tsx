import React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import { MovieCasting } from "../core/entities/Movie.entity";
import AvatarDefault from '../assets/AvatarDefault.jpg';

interface Props {
  casting: MovieCasting[];
}

const getGender = (genderId: number): string => {
  switch(genderId) {
    case 0:
      return "No especificado";
    case 1:
      return "Mujer";
    case 2:
      return "Hombre";
    case 3:
      return "No Binario";
    default:
      return "Sin Valor"
  }
}

export const CastingPersonComponent = ({ casting }: Props) => {
  return (
    <FlatList
      data={casting}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.actorName}>{item.name}</Text>
          <Text>{getGender(item.gender)}</Text>
          <View style={styles.characterContainer}>
            {item.profile === null ? (
              <Image 
                style={styles.characterImage}
                source={AvatarDefault}
              />
            ) : (
              <Image
                style={styles.characterImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.profile}`,
                }}
              />
            )}
            <Text style={styles.characterName}>{item.characterActing}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  actorName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  characterContainer: {
    flexDirection: "row",
    alignItems: "center", 
  },
  characterImage: {
    width: 80,
    height: 100,
    borderRadius: 5,
    marginRight: 5,
  },
  characterName: {
    fontSize: 14,
    color: "#555",
  },
});
