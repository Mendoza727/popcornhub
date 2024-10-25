import { StyleSheet } from "react-native";

export const GlobalColors = {
  richBlack: "#0f192f",
  darkMidnightBlue: "#0b2a3d",
  strongCyan: "#12d5d5",
  redSalsa: "#af002a",
  saffronMango: "#fa932d",
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
    elevation: 9
  }
});
