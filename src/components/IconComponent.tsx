import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { GlobalColors } from "../config/theme/app-theme";

interface Props {
  nameIcon: string;
  color?: string;
  size: number | undefined;
}

export const IconComponent = ({ nameIcon, size, color }: Props) => {
  return (
    <Icon
      style={style.iconContainer}
      name={nameIcon}
      size={size}
      color={color}
    ></Icon>
  );
};

const style = StyleSheet.create({
  iconContainer: {
    shadowColor: GlobalColors.richBlack,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
});
