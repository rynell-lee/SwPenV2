import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MdModal1 from "../components/MdModal1";

const HomeScreen = ({ navigation }) => {
  //modal toggling
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //generate data object
  const [dataObj, setDataObj] = useState();
  const generateDataObj = () => {
    setDataObj({
      id: Math.floor(Math.random() * 99999),
      Category: false,
      "Pool Length": false,
      "Type of race": false,
      // // Round: "Training",
      // Name: "",
    });
  };

  return (
    <View style={styles.view}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <Text style={styles.headers}>Home Screen</Text>
        <TouchableOpacity
          onPress={() => {
            toggleModal();
            generateDataObj();
          }}
        >
          <FontAwesome5
            name="swimmer"
            size={200}
            style={styles.icons}
            color="black"
          />
          <MdModal1
            visible={isModalVisible}
            toggle={toggleModal}
            picker={{ condition: true, option: 1 }}
            obj={dataObj}
            navigation={navigation.navigate}
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
        <Button
          title="test"
          onPress={() => navigation.navigate("Test")}
        ></Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: 30,
    paddingBottom: 100,
  },
  view: {
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  icons: {
    paddingBottom: 100,
  },
  scroll: {
    justifyContent: "center",
    // flexGrow: 1,
    alignItems: "center",
    // backgroundColor: "pink",
    // marginHorizontal: 0,
  },
});

export default HomeScreen;

///notes
/*
1. need to scale icons probably need to use dimensions or smth
2. screen names
3. icons
*/
