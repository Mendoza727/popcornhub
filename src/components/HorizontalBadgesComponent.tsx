import React from "react";
import { Genre } from "../infrastructure";
import { StyleSheet, View, Text } from "react-native";
import { GlobalColors } from "../config/theme/app-theme";
import { FlatList } from "react-native-gesture-handler";

interface Props {
  genres: Genre[];
}

export const HorizontalBadgesComponent = ({ genres }: Props) => {
  return (
    <View style={style.container}>
      <FlatList
        data={genres}
        renderItem={({ item }) => (
          <View style={style.badge}>
            <Text style={style.badgeText}>
                {item.name}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center", // Centra horizontal y verticalmente el contenido dentro del contenedor
  },
  text: {
    textAlign: "center", // Centra el texto horizontalmente dentro de su propio espacio
  },
  badge: {
    flexDirection: 'row',
    borderColor: GlobalColors.strongCyan, // Cyan color
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  badgeText: {
    color: GlobalColors.strongCyan, // Cyan color
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
