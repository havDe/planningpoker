import React from "react";
import { View } from "react-native";
import CardList from "../../components/CardList/CardList";
import { heightPercentageToDP } from "react-native-responsive-screen";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Planning Poker"
  };

  render() {
    return (
      <View style={{ backgroundColor: "#009fe3", flex: 1, height: heightPercentageToDP("100%"), justifyContent: "center"}}>
        <CardList navigate={this.props.navigation} router={this.props}/>
      </View>
    );
  }
}

export default HomeScreen;
