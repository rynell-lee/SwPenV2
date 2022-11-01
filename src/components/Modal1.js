import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Modal from "react-native-modal";
import { pickerOptions, displayPicker } from "./PickerOptions";

const ModalBox1 = (props) => {
  //md context not in use yet

  //props
  const navigate = props.navigation;
  const isModalVisible = props.visible;
  const toggleModal = props.toggle;
  const showPicker = props.picker.condition;
  const pickerOption = props.picker.option; //which picker to show
  const dataObj = props.obj;
  // if (dataObj !== undefined) {
  //   console.log(dataObj);
  // }

  //picker options from json
  //used to be here not it is imported

  //condition to display picker or not
  //now imported

  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        backdropColor={"#00000080"}
        onBackdropPress={toggleModal}
      >
        <View style={styles.box}>
          <View style={styles.modalBox}>
            {pickerOptions(pickerOption).map((x, index) =>
              displayPicker(showPicker, x, index, dataObj)
            )}
            <Button
              title={"submit"}
              onPress={() => {
                // console.log(dataObj);
                navigate("Metadata", {
                  obj: dataObj,
                });
              }}
            />
            {/* <Button title="Hide modal" onPress={toggleModal} /> */}
          </View>
        </View>
      </Modal>
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
});

export default ModalBox1;
