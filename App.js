import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import CategoryScreen from "./src/screens/CategoryScreen";
import HomeScreen from "./src/screens/HomeScreen";
// import PoolLengthScreen from "./src/screens/PoolLengthScreen";
// import MetadataScreen from "./src/screens/MetadataScreen";
import TestScreen from "./src/screens/TestScreen";
// import { Provider } from "./src/context/BlogContext"; //curly braces for named exports

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    // Metadata: MetadataScreen,
    // Category: CategoryScreen,
    // PoolLength: PoolLengthScreen,
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
  return <App />;
};
