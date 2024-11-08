import React from "react";
import { ProductionCompany } from "../core/entities/Movie.entity";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import defaultCompanyLogo from "../assets/DefaultCompany.png";

interface Props {
  companies: ProductionCompany[];
}

export const CompaniesBagdesComponent = ({ companies }: Props) => {
  return (
    <View style={styles.cardContainer}>
      {companies && (
        <FlatList
          data={companies}
          renderItem={({ item: company }) => (
            <View style={styles.card} key={company.id}>
              <View style={styles.rowContainer}>
                <View style={styles.imageContainer}>
                  {company.logo_path === null ? (
                    <Image
                      source={defaultCompanyLogo}
                      style={styles.profileImage}
                    />
                  ) : (
                    <Image
                      style={styles.profileImage}
                      source={{
                        uri: `https://image.tmdb.org/t/p/original${company.logo_path}`,
                      }}
                    />
                  )}
                  <Image
                    style={styles.badge}
                    source={{
                      uri: `https://flagcdn.com/w80/${company.origin_country.toLowerCase()}.png`,
                    }}
                  />
                </View>
                <Text style={styles.nameText}>{company.name}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: "auto",
    marginLeft: 4,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    width: 60,
    height: 60,
    marginRight: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Usar 30 para un círculo
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0, // Cambia a right para que esté en la esquina superior derecha
    width: 20,
    height: 20,
    borderRadius: 10, // Usar 10 para un círculo
  },
  nameText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginLeft: 8,
  },
});
