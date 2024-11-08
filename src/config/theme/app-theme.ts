import { StyleSheet } from "react-native";

export const GlobalColors = {
  richBlack: "#0f192f",
  darkMidnightBlue: "#0b2a3d",
  strongCyan: "#12d5d5",
  redSalsa: "#af002a",
  saffronMango: "#fa932d",
  white: "#ffffff"
};

// Colores claros derivados de los colores originales
export const LightGlobalColors = {
  richBlack: "#2b3a54", // Más claro que el original
  darkMidnightBlue: "#2c4a60", // Más claro que el original
  strongCyan: "#4be1e1", // Más claro que el original
  redSalsa: "#ff4f55", // Más claro que el original
  saffronMango: "#fcbf6d", // Más claro que el original
};

export const GlobalStyles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    borderRadius: 18
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: GlobalColors.richBlack,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.24,
    shadowRadius: 7,
    elevation: 7
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalColors.richBlack,
    width: "100%",
    textAlign: "center",
    alignItems: 'center',
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    fontWeight: '200',
    color: GlobalColors.richBlack,
    width: '100%',
    marginBottom: 20
  },
  description: {
    fontSize: 15,
    color: GlobalColors.richBlack,
    width: '100%',
    textAlign: 'justify'
  }
});
