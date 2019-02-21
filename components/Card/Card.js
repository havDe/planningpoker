import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Image from "react-native-remote-svg";
import { Col, Grid, Row } from "react-native-easy-grid";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { Dimensions } from "react-native";

let width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  flipCard: {
    width: wp("80%"),
    height: hp("75%"),
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 450,
    maxHeight: 700

  },
  flipCardBack: {
    position: "absolute",
    width: wp("80%"),
    height: hp("75%"),
    borderStyle: "solid",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 16,
    maxWidth: 450,
    maxHeight: 700

  },
  cardNumber: {
    flex: 1,
    justifyContent: "center",
    bottom: "8%",
    alignItems: "center"
  },
  flipText: {
    fontFamily: "DINPro-Bold",
    fontSize: width / 6,
    color: "white",
    fontWeight: "bold",
    height: "auto",
    textAlign: "center"
  },
  smallNumber: {
    fontFamily: "DINPro-Bold",
    fontSize: 50,
    fontSize: width / 10,
    color: "white",
    fontWeight: "bold"
  },
  frontSideBackground: {
    width: wp("80%"),
    height: hp("75%"),
    borderStyle: "solid",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 16,
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    maxWidth: 450,
    maxHeight: 700


  },
  fontImage: {
    width: wp("330%"),
    height: hp("188%"),
    alignItems: "center",
    maxWidth: 1880,
    maxHeight: 1700
  },
  ofigoLogo: {
    width: "100%",
    height: "100%"
  },
  ofigoFont: {
    flex: 1,
    width: wp("50%"),
    maxWidth: 300,
    position: "relative"
  },
  ofigoFontCol: {
    marginBottom: 10,
    flex: 1,
    alignItems: "flex-start"
  },
  linearGradient: {
    flex: 1
  },
  gridContainer: {
    flex: 1
  },
  row: {
    flex: 2,
    backgroundColor: "transparent",
    paddingHorizontal: "7%",
  },
  bigBean: {
    width: wp("21%"),
    height: hp("17%"),
    top: "8%",
    maxWidth: 150,
    maxHeight: 100
  },
  smallBean: {
    width: wp("13%"),
    height: hp("9%"),
    marginBottom: "3%",
    maxWidth: 90,
    maxHeight: 80
  }
});

class Card extends React.Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });

    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    });

    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    });
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  loadHomeScreen = () => {
    this.props.navigate.goBack();
  };

  getCardNumber = () => {
    return this.props.cardNumber;
  };

  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };

    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };

    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#009fe3", "#02faa1"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.flipCard()}>
            <Animated.View
              style={[
                styles.flipCard,
                frontAnimatedStyle,
                { opacity: this.frontOpacity }
              ]}
            >
              <View style={styles.frontSideBackground}>
                <Image
                  source={{uri: `data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?>
                  <!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                  <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" preserveAspectRatio="none"
                  >
                  <g>
                    <path fill="#1D1D1B" d="M520.4,460.9l-0.2,0.2l-22,38.3H542c-6.6-11.8-20.2-36.5-21.4-38.6l0,0H520.4z"/>
                    <path fill="#00FF9E" d="M520.6,460.6l-0.2,0.3h0.1h0.2l0,0L606,313.5c-1.2-0.9-2.9-1.5-5.3-1.5h-38l-86.1,148.7H520.6z"/>
                    <polygon fill="#009FE3" points="498.2,499.5 520.3,461.2 520.4,460.9 520.6,460.6 476.6,460.6 390.8,460.6 390.8,499.5 
                      454.2,499.5 	"/>
                    <path fill="#009FE3" d="M476.6,538.3l-84.5,146c1.1,2,3.2,3.8,7.3,3.8h34.7l86.7-149.8H476.6z"/>
                    <polygon fill="#00FF9E" points="498.2,499.5 454.2,499.5 476.5,538.3 476.6,538.3 520.8,538.3 609.2,538.3 609.2,499.5 542,499.5 	
                      "/>
                  </g>
                  <path fill="#8CC63F" stroke="#ED1E79" d="M500,500"/>
                  <path fill="#8CC63F" stroke="#ED1E79" d="M500,500"/>
                  </svg>
                  `}}
                  style={styles.fontImage}
                />
              </View>
            </Animated.View>

            <Animated.View
              style={[
                styles.flipCardBack,
                backAnimatedStyle,
                { opacity: this.backOpacity }
              ]}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#02faa1", "#009fe3"]}
                style={{ ...styles.linearGradient, borderRadius: 8 }}
              >
                <View style={styles.gridContainer}>
                  <Grid>
                    <Row style={styles.row}>
                      <Col>
                        {this.getCardNumber() === "B" ? (
                        <Image
                          source={{
                            uri: `data:image/svg+xml;utf8, <?xml version="1.0" encoding="utf-8"?>
                            <!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                               viewBox="180 80 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                            <g>
                              <defs>
                                <rect id="SVGID_1_" x="186.8" y="45.9" width="626.4" height="908.1"/>
                              </defs>
                              <clipPath id="SVGID_2_">
                                <use xlink:href="#SVGID_1_"  overflow="visible"/>
                              </clipPath>
                              <path clip-path="url(#SVGID_2_)" fill="#FFFFFF" d="M186.8,500.5c0-191.2,88.6-354.8,214.2-422.7c23.9,22.5,43.7,48.9,59.3,78.1
                                c109.1,205.3-61.8,498.2-30.9,779.1l0.2,1.6C289,879.5,186.8,705.8,186.8,500.5 M498.6,46c176.2,19.5,314.7,215.6,314.7,454.5
                                c0,235.5-134.5,429.4-307.2,453.6C451.4,663,690,308.5,498.6,46"/>
                            </g>
                            </svg>
                            `
                          }}
                          style={{...styles.smallBean, marginTop: "6%"}}                        />
                          ) : (
                          <Text style={styles.smallNumber}>
                            {this.getCardNumber()}
                          </Text>
                        )}
                      </Col>
                      <Col style={{ alignItems: "flex-end" }}>
                        <Image
                          source={{
                            uri: `data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?>
                            <!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                               viewBox="-300 340 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M646.6,341.4l44.3-25.6v96.7l-44.3-25.6l-39.4-22.8L646.6,341.4
                              L646.6,341.4z M646.6,398.2l-44.3-25.6v96.7l44.3-25.6L686,421L646.6,398.2L646.6,398.2L646.6,398.2z M646.6,455l44.3-25.6v96.6
                              l-44.3-25.6l-39.4-22.8L646.6,455L646.6,455L646.6,455z M646.7,511.7l-49.2-28.4l-49.2,28.4l-39.4,22.8l39.4,22.8l49.2,28.4
                              l49.2-28.4l39.4-22.8L646.7,511.7L646.7,511.7L646.7,511.7z M646.6,568.6l-98.4,57.1L499.5,654l-49.7-28.6l-98.4-56.7L298,537.9
                              V305.5l53.3-30.9l98.4-57.1l49.2-28.5l49.2,28.4l98.4,56.7l53.8,31l-0.1,232.4L646.6,568.6L646.6,568.6L646.6,568.6z M646.7,284.6
                              l-49.2-28.4l-49.2,28.4l-39.4,22.7l39.4,22.8l49.2,28.4l49.2-28.4l39.4-22.8L646.7,284.6L646.7,284.6L646.7,284.6z M548.3,341.3
                              l39.4,22.8l-39.4,22.8l-49.2,28.4l-49.2-28.4l-39.4-22.8l39.4-22.8l49.2-28.4L548.3,341.3L548.3,341.3L548.3,341.3z M548.3,398.2
                              L508.8,421l39.4,22.8l44.3,25.6v-96.7L548.3,398.2L548.3,398.2L548.3,398.2z M548.2,455l39.4,22.8l-39.4,22.8l-44.3,25.6v-96.7
                              L548.2,455L548.2,455L548.2,455z M548.2,273.2l39.4-22.8l-39.4-22.7l-44.3-25.6v96.7L548.2,273.2L548.2,273.2L548.2,273.2z
                               M548.2,614.2l-44.3,25.6V543l44.3,25.6l39.4,22.8L548.2,614.2L548.2,614.2L548.2,614.2z M449.8,227.8l44.3-25.6v96.7l-44.3-25.6
                              l-39.4-22.8L449.8,227.8L449.8,227.8L449.8,227.8z M449.8,398.2l-44.3-25.6v96.7l44.3-25.6l39.4-22.8L449.8,398.2L449.8,398.2
                              L449.8,398.2z M449.8,455l-39.4,22.8l39.4,22.8l44.3,25.6v-96.7L449.8,455L449.8,455L449.8,455z M449.7,511.7l-49.2-28.4l-49.2,28.4
                              l-39.4,22.8l39.4,22.8l49.2,28.4l49.2-28.4l39.4-22.8L449.7,511.7L449.7,511.7L449.7,511.7z M449.8,568.7l-39.4,22.8l39.4,22.7
                              l44.3,25.6V543L449.8,568.7L449.8,568.7L449.8,568.7z M351.3,341.3l39.4,22.8l-39.4,22.6l-44.4,25.5v-96.5L351.3,341.3L351.3,341.3
                              L351.3,341.3z M351.3,398.1l-39.4,22.7l39.4,22.9l44.3,25.6v-96.7L351.3,398.1L351.3,398.1L351.3,398.1z M351.3,454.9l-44.4-25.7
                              v96.9l44.4-25.6l39.4-22.8L351.3,454.9L351.3,454.9L351.3,454.9z M351.3,284.5l-39.4,22.8l39.4,22.8l49.2,28.4l49.2-28.4l39.4-22.8
                              l-39.4-22.7l-49.2-28.4L351.3,284.5L351.3,284.5z"/>
                            </svg>
                            `
                          }}
                          style={styles.ofigoLogo}
                        />
                      </Col>
                      
                    </Row>

                    <Row style={styles.cardNumber}>
                      {this.getCardNumber() === "B" ? (
                        <Image
                          source={{
                            uri:`data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?>
                            <!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                               viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                            <g>
                              <defs>
                                <rect id="SVGID_1_" x="186.8" y="45.9" width="626.4" height="908.1"/>
                              </defs>
                              <clipPath id="SVGID_2_">
                                <use xlink:href="#SVGID_1_"  overflow="visible"/>
                              </clipPath>
                              <path clip-path="url(#SVGID_2_)" fill="#FFFFFF" d="M186.8,500.5c0-191.2,88.6-354.8,214.2-422.7c23.9,22.5,43.7,48.9,59.3,78.1
                                c109.1,205.3-61.8,498.2-30.9,779.1l0.2,1.6C289,879.5,186.8,705.8,186.8,500.5 M498.6,46c176.2,19.5,314.7,215.6,314.7,454.5
                                c0,235.5-134.5,429.4-307.2,453.6C451.4,663,690,308.5,498.6,46"/>
                            </g>
                            </svg>
                            `
                          }}
                          style={styles.bigBean}
                        />
                      ) : (
                        <Text style={styles.flipText}>
                          {this.getCardNumber()}
                        </Text>
                      )}
                    </Row>

                    <Row
                      style={{
                        ...styles.row,
                        alignItems: "flex-end",
                        flexDirection: "row"
                      }}
                    >
                      <Col style={styles.ofigoFontCol}>
                        <Image
                          source={{
                            uri: `data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?>
                            <!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                               viewBox="290 -180 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" 
                            >
                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M507.7,812.6h-16.9v-96.9h16.9V812.6L507.7,812.6z M349.7,787.4
                              c0,2.3-0.8,4.3-2.4,5.9c-1.6,1.6-3.6,2.5-5.9,2.5l0,0h-9.2h-3.1h-2h-4c-2.3,0-4.2-0.8-5.9-2.5c-1.6-1.6-2.5-3.6-2.5-5.9l0,0v-46.4
                              c0-2.3,0.8-4.2,2.5-5.9c1.6-1.6,3.6-2.5,5.9-2.5l0,0h4h2h3.1h9.2c2.3,0,4.3,0.8,5.9,2.5c1.6,1.6,2.4,3.6,2.4,5.9l0,0V787.4
                              L349.7,787.4L349.7,787.4z M332.3,812.6h9.2c7,0,12.9-2.5,17.8-7.4c4.9-4.9,7.3-10.9,7.3-17.9v0v-46.4c0-7-2.4-12.9-7.3-17.8
                              c-4.9-4.9-10.8-7.3-17.8-7.3l0,0h-9.2h-3.1h-2h-4c-7,0-12.9,2.5-17.8,7.3c-4.9,4.9-7.3,10.8-7.3,17.8l0,0v46.4c0,7,2.5,13,7.3,17.9
                              c4.9,5,10.8,7.4,17.8,7.4l0,0h4h2H332.3L332.3,812.6L332.3,812.6z M683.6,787.4c0,2.3-0.8,4.3-2.5,5.9c-1.6,1.6-3.6,2.5-5.9,2.5l0,0
                              h-9.2H663h-2h-4c-2.3,0-4.2-0.8-5.9-2.5c-1.6-1.6-2.4-3.6-2.4-5.9l0,0v-46.4c0-2.3,0.8-4.2,2.4-5.9c1.7-1.6,3.6-2.5,5.9-2.5l0,0h4h2
                              h3.1h9.2c2.3,0,4.2,0.8,5.9,2.5c1.7,1.6,2.5,3.6,2.5,5.9l0,0V787.4L683.6,787.4L683.6,787.4z M666,812.6h9.2c7,0,12.9-2.5,17.8-7.4
                              c4.9-4.9,7.3-10.9,7.3-17.9v0v-46.4c0-7-2.4-12.9-7.3-17.8c-4.9-4.9-10.8-7.3-17.8-7.3l0,0H666h-3.1h-2h-4c-7,0-12.9,2.5-17.8,7.3
                              c-4.9,4.9-7.3,10.8-7.3,17.8l0,0v46.4c0,7,2.4,13,7.3,17.9c4.9,5,10.8,7.4,17.8,7.4l0,0h4h2H666L666,812.6L666,812.6z M414.4,735
                              c1.6-1.6,3.6-2.5,5.9-2.5l0,0h42.1v-16.8h-42.1c-7,0-12.9,2.5-17.8,7.3c-4.9,4.9-7.3,10.8-7.3,17.8l0,0v71.7h16.8v-41h34.6v-15.8
                              h-34.6v-14.9C411.9,738.6,412.8,736.7,414.4,735L414.4,735L414.4,735L414.4,735z M572.6,770.7h13.9v16.8c0,2.3-0.8,4.2-2.4,5.9
                              c-1.7,1.6-3.6,2.5-5.8,2.5l0,0h-11.6h-0.7h-4.9c-2.3,0-4.2-0.8-5.9-2.5c-1.6-1.7-2.5-3.6-2.5-5.8v0v-46.4c0-2.3,0.8-4.3,2.5-6
                              c1.6-1.7,3.6-2.5,5.9-2.5l0,0h4.9h0.7h11.4c2.3,0,4.2,0.8,5.9,2.5c1.1,1.2,1.9,2.5,2.2,3.9l0,0h17c-0.5-6-3-11.3-7.4-15.8
                              c-4.9-5-10.8-7.4-17.7-7.4l0,0h-11.4h-0.7h-4.9c-7,0-12.9,2.5-17.8,7.4c-4.9,5-7.3,10.9-7.3,17.9l0,0v46.4c0,6.8,2.4,12.8,7.2,17.7
                              c4.9,5,10.7,7.4,17.6,7.4l0,0h5.2h0.7h11.9c6.6,0,12.5-2.5,17.3-7.3c4.9-4.9,7.3-10.7,7.3-17.5l0,0v-33h-30.7V770.7L572.6,770.7z"/>
                            </svg>
                            `
                          }}
                          style={styles.ofigoFont}
                        />
                      </Col>
                      <Col style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
                        {this.getCardNumber() === "B" ? (
                          <Image
                            source={{uri: `data:image/svg+xml:utf8, <?xml version="1.0" encoding="utf-8"?>
                            <!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                               viewBox="-180 -13 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                            <g>
                              <defs>
                                <rect id="SVGID_1_" x="186.8" y="45.9" width="626.4" height="908.1"/>
                              </defs>
                              <clipPath id="SVGID_2_">
                                <use xlink:href="#SVGID_1_"  overflow="visible"/>
                              </clipPath>
                              <path clip-path="url(#SVGID_2_)" fill="#FFFFFF" d="M186.8,500.5c0-191.2,88.6-354.8,214.2-422.7c23.9,22.5,43.7,48.9,59.3,78.1
                                c109.1,205.3-61.8,498.2-30.9,779.1l0.2,1.6C289,879.5,186.8,705.8,186.8,500.5 M498.6,46c176.2,19.5,314.7,215.6,314.7,454.5
                                c0,235.5-134.5,429.4-307.2,453.6C451.4,663,690,308.5,498.6,46"/>
                            </g>
                            </svg>
                            `}}
                            style={styles.smallBean}
                          />
                        ) : (
                          <Text style={styles.smallNumber}>
                            {this.getCardNumber()}
                          </Text>
                        )}
                      </Col>
                    </Row>
                  </Grid>
                </View>
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

export default Card;
