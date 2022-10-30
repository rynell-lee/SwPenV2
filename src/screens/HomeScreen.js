import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// import { vw, vh } from "react-native-viewport-units";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.headers}>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Category")}>
        <FontAwesome5
          name="swimmer"
          size={200}
          style={styles.icons}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="cloud-sharp"
          size={200}
          style={styles.icons}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome
          name="newspaper-o"
          size={200}
          style={styles.icons}
          color="black"
        />
      </TouchableOpacity>
      <Button title="test" onPress={() => navigation.navigate("Test")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: 30,
    paddingBottom: 100,
  },
  view: {
    alignSelf: "center",
  },
  icons: {
    paddingBottom: 100,
  },
});

export default HomeScreen;

///notes
/*
1. need to scale icons probably need to use dimensions or smth
2. screen names
3. icons
*/
