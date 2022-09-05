import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView, Text} from 'react-native'
import StyledText from "./StyledText";
import Constants from 'expo-constants'
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create ({
  container: {
    backgroundColor: theme.appBar.primary,
    // paddingTop: Constants.statusBarHeigh + 10,
    paddingTop: 15,
    flexDirection: 'row'
  },
  text: {
    color: theme.appBar.textPrimary,
    // paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    display: "flex",
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 30
  }
})


const AppBar = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Bienvenido</Text>
    </View>
  )
}

export default AppBar