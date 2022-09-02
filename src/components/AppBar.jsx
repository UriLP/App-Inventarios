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
    paddingTop: 30,
    flexDirection: 'row'
  },
  scroll: {
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary,
  }
})

// const AppBarTab = ({ children, to}) => {
//   const { pathname } = useLocation()
//   const active = pathname === to

//   const textStyles = [
//     styles.text,
//     active && styles.active
//   ]
//   return (
//     <Link to={ to } component={ TouchableWithoutFeedback } >
//       <StyledText fontWeight='bold' style={textStyles}>
//         { children } 
//       </StyledText>
//     </Link>
//   )
// }

const AppBar = () => {
  return (
    <View style={ styles.container }>
      <ScrollView horizontal style={ styles.scroll }>
        <Text to='/'>Home</Text>
        <Text to='/signin'>Sign In</Text>
      </ScrollView>
    </View>
  )
}

export default AppBar