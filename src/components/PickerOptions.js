import metadataOptions from "../jsons/MetadataOptions.json";
import PickerSelect from "./Picker";

const pickerOptions = (option, category, length, type) => {
  const options = [];
  if (option == 1) {
    options.push(metadataOptions.option1.category);
    options.push(metadataOptions.option1.poolLength);
    options.push(metadataOptions.option1.type);
    return options;
  } else if (option == 2) {
    if (category === "Individual") {
      options.push(metadataOptions.option2.gender.slice(0, -1));
    } else {
      options.push(metadataOptions.option2.gender);
    }
    options.push([
      "Event",
      ...Object.keys(
        metadataOptions.option2.event[length.toLowerCase()][
          category.toLowerCase()
        ]
      ),
    ]);
    options.push(metadataOptions.option2.stroke);
    if (type == "Competition") {
      options.push(metadataOptions.option2.round);
    }
    return options;
  }
};

//condition to display picker or not
const displayPicker = (condition, option, index, obj) => {
  // console.log(condition);
  return condition == true ? (
    <PickerSelect options={option} number={1} key={index} obj={obj} />
  ) : null;
};

export { pickerOptions, displayPicker };
