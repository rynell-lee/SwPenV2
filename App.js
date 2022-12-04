import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import CategoryScreen from "./src/screens/CategoryScreen";
import HomeScreen from "./src/screens/HomeScreen";
// import PoolLengthScreen from "./src/screens/PoolLengthScreen";
// import MetadataScreen from "./src/screens/MetadataScreen";
import TestScreen from "./src/screens/TestScreen";
import { Provider } from "./src/context/MetadataContext";
import MetadataScreen from "./src/screens/MetaDataScreen";
import MdModal2 from "./src/components/MdModal2";
import CameraScreen from "./src/screens/CameraScreen";
import ActivateCamera from "./src/components/Camera";
import VideoCamera from "./src/components/VideoCamera";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Metadata: MetadataScreen,
    Modal2: MdModal2,
    // Category: CategoryScreen,
    // PoolLength: PoolLengthScreen,q
    Camera: VideoCamera,
    Test: TestScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "swimmerPen version 2",
    },
  }
);

const App = createAppContainer(navigator);

//exporting into our own export component
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
