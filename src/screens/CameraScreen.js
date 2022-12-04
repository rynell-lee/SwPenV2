import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import ActivateCamera from "../components/Camera";
const CameraScreen = () => {
  return (
    <View>
      <ActivateCamera />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    position: "absolute",
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 400,
    height: 300,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  containerBox: {
    zIndex: 2,
    opacity: 1,
    backgroundColor: "transparent",
  },
});

export default CameraScreen;
