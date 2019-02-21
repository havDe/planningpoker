import { createAppContainer, createStackNavigator } from "react-navigation";
import CardScreen from "./containers/Card/CardScreen";
import HomeScreen from "./containers/Home/HomeScreen";
import {TouchableOpacity, Button} from "react-native";

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  });
  const slideFromRight = { transform: [{ translateX }] };
  return slideFromRight;
};

const NavigationConfig = () => {
  return {
    screenInterpolator: sceneProps => {
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = scene.index;
      const width = sceneProps.layout.initWidth;

      return SlideFromRight(index, position, width);
    }
  };
};

const App = createStackNavigator(
  {
    Home: { screen: HomeScreen,
    navigationOptions: () => ({
      title: `Planning Poker`,
      headerTitleStyle: {
        fontFamily: "DINPro-Bold"
      }
    }) },
    Card: { screen: CardScreen }
  },
  { transitionConfig: NavigationConfig }
);


export default createAppContainer(App);
