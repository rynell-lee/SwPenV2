import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { pickerOptions, displayPicker } from "../components/PickerOptions";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const MetadataScreen = ({ navigation }) => {
  const dataObj = navigation.getParam("obj");
  const category = dataObj["Category"];
  const length = dataObj["Pool Length"];
  const type = dataObj["Type of race"];
  const showPicker = true;
  const pickerOption = 2;
  // console.log("metadata screen: ", dataObj);

  //usestates
  //name
  const [name, setName] = useState("");
  if (name) {
    // console.log(name);
    dataObj.Name = name;
  }

  //comp name
  const [compName, setCompName] = useState("");
  if (compName) {
    // console.log(name);
    dataObj["Competiton Name"] = compName;
  }
  //check if competition or not
  const isCompetition = (type) => {
    if (type == "Competition")
      return (
        <Fumi
          label={`${type} Name`}
          iconClass={FontAwesomeIcon}
          iconName={"plane"}
          iconColor={"#f95a25"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(name) => setCompName(name)}
        />
      );
  };

  //code for date picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [date, setDate] = useState();
  if (date) {
    const fullDate =
      date.getDate() +
      "-" +
      Number(date.getMonth() + 1) +
      "-" +
      date.getFullYear();
    dataObj["Date"] = fullDate;
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  return (
    <View>
      <Text style={styles.headers}>Metadata screen</Text>
      <Fumi
        label={`${category} Name`}
        iconClass={FontAwesomeIcon}
        iconName={"plane"}
        iconColor={"#f95a25"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        onChangeText={(name) => setName(name)}
      />
      {isCompetition(type)}
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {pickerOptions(pickerOption, category, length, type).map((x, index) =>
        displayPicker(showPicker, x, index, dataObj)
      )}
      <Button
        title="Display current data"
        onPress={() => console.log(dataObj)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    fontSize: 30,
    paddingBottom: 100,
  },
  texts: {
    fontSize: 20,
  },
  view: {
    alignSelf: "center",
  },
  iconView: {
    alignItems: "row",
  },
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

export default MetadataScreen;
