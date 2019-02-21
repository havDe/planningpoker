import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { BoxShadow } from "react-native-shadow";
import logo from "../../assets/images/ofigo_logo_schwarz.png";
import bean from "../../assets/images/poker-app-kaffee-schwarz.png";
import Image from "react-native-remote-svg";
import { Dimensions } from 'react-native'

let width = Dimensions.get('window').width;

const numColumns = 3;
const styles = StyleSheet.create({
  container: {
    paddingLeft: "5%",
    paddingRight: "5%",
    bottom: 0,
  },

  MainContainer: {
    flex: 1,
    alignItems: "center",
    width: wp("20%"),
    height: hp("17%"),
    justifyContent: "flex-end",
    alignContent: "center",
  },

  ButtonStyle: {
    backgroundColor: "white",
    borderRadius: 5,
    width: wp("22%"),
    height: hp("15%"),
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#009add",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 350,
    maxWidth: 200
  },

  TextStyle: {
    color: "black",
    textAlign: "center",
    fontFamily: "DINPro-Bold",
    fontSize: width / 14,
    fontWeight: "500"
  },
  logo: {
    width: wp("12%"),
    height: hp("10%"),
  },
  bean: {
    width: wp("15%"),
    height: hp("15%")
  }
});

const shadowOpt = {
  width: wp("23%"),
  height: hp("15.5%"),
  color: "#0079af",
  border: 8,
  radius: 3,
  opacity: 0.4,
  x: wp("-0.5%"),
  y: hp("-0.25%"),
};
class CardList extends React.Component {
  loadCardScreen = cardNumber => {
    this.props.navigate.navigate("Card", {
      cardNumber: cardNumber
    });
  };

  renderItem = ({ item }) => {
    return item.key === "logo" ? (
      <View style={{...styles.MainContainer, justifyContent: "center"}}>
          <Image source={logo} style={styles.logo} />
      </View>
    ) : (
      <View style={styles.MainContainer}>
        <BoxShadow setting={shadowOpt}>
          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={() => this.loadCardScreen(item.key)}
          >
            {item.key === "B" ? (
              <Image source={bean} style={styles.bean} />
            ) : (
              <Text style={styles.TextStyle}> {item.key} </Text>
            )}
          </TouchableOpacity>
        </BoxShadow>
      </View>
    );
  };

  render() {
    let cardsContentList = [
      { key: "40" },
      { key: "100" },
      { key: "∞" },
      { key: "8" },
      { key: "13" },
      { key: "20" },
      { key: "2" },
      { key: "3" },
      { key: "5" },
      { key: "0" },
      { key: "½" },
      { key: "1" },
      { key: "?" },
      { key: "B" },
      { key: "logo" }
    ];

    return (
      <FlatList
        data={cardsContentList}
        renderItem={this.renderItem}
        numColumns={numColumns}
        style={styles.container}
      />
    );
  }
}

export default CardList;
