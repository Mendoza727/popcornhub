import React, { useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { GlobalStyles } from "../config/theme/app-theme";
import icon from '../../assets/faviconMovie.jpg';

export const LoadingComponent = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.animationContainer}>
      <Image 
        source={icon}
        style={styles.icon} // Apply the styles here
      />
      <Text style={GlobalStyles.title}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  icon: {
    width: 200, // Set to your desired width
    height: 200, // Set to your desired height
    borderRadius: 60,
    resizeMode: "contain", // Adjust the aspect ratio if necessary
    marginBottom: 30
  }
});
