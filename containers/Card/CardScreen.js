import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import backButton from "../../assets/images/backButton.png";
import Card from "../../components/Card/Card";

const styles = StyleSheet.create({
  view: {
    height: "100%"
  }
});

class CardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    {
      return {
        gesturesEnabled: true,

        headerLeft: (
          <TouchableOpacity style={{width: 120}} onPress={() => navigation.goBack()}>
            <Image source={backButton} style={{ width: 21, height: 21, marginLeft: 21 }} />
          </TouchableOpacity>
        )
      };
    }
  };

  render() {
    console.log(this.props.navigation.getParam("cardNumber"));
    return (
      <View style={styles.view}>
        <Card
          navigate={this.props.navigation}
          cardNumber={this.props.navigation.getParam("cardNumber")}
        />
      </View>
    );
  }
}

export default CardScreen;
