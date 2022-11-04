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
import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";
import showAlert from "../components/Alert";
const TestScreen = () => {
  //picker
  const [selectedLanguage, setSelectedLanguage] = useState();

  //modal
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Text>Test Screen</Text>
      {/* <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        backdropColor={"#00000080"}
        onBackdropPress={toggleModal}
      >
        <View style={styles.box}>
          <View style={styles.modalBox}>
            <Text>Hello!</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal> */}
      <Button title="alert" onPress={showAlert} />
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

export default TestScreen;

//Modal component
{
  /* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */
}
