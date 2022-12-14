import React from "react"
import { StyleSheet, Text, View } from "react-native"
import StyledText from "./StyledText"
import { TouchableOpacity } from "react-native-gesture-handler"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import theme from "../theme";

const ButtonMenu = ({ children }) => {
  
  const navigation = useNavigation()
  let iconName

  if (children.props.children === 'Inventario Físico') {
    iconName = 'cube-outline'
  } else if (children.props.children === 'Inventario en Sistema') {
    iconName = 'laptop-outline'
  } else if (children.props.children === 'Caducidades') {
    iconName = 'calendar-sharp'
  } else {
    iconName = 'help-circle-outline'
  }

  let color = theme.colors.textColor

  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate( children.props.children ) }
      style={ styles.opacityEffect }
    >  
      <View style={ styles.botonMenu }>
        <View style={ styles.card } color='white'>      
            <Ionicons name={ iconName } size={ 60 } color={ color } />

          <Text>{ children }</Text>
        </View>  
      </View>
    </TouchableOpacity>
  )
}

export default ButtonMenu

const styles = StyleSheet.create({
  botonMenu: {
    backgroundColor: theme.colors.inactive,
    marginHorizontal: 30,
    marginTop: 20,
    height: 150,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    color: '#fff'
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  opacityEffect: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: "auto",
  }
})