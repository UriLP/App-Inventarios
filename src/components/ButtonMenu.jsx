import React from "react"
import { StyleSheet, Text, View } from "react-native"
import StyledText from "./StyledText"
import CircumIcon from "@klarr-agency/circum-icons-react";

const ButtonMenu = ({ children }) => {

  // const icon = iconos.box ? { children } == 'Sistema' : iconos.laptop

  return (
    <View style={ styles.botonMenu }>
      <StyledText style={ styles.card } color='white'>
        {/* <CircumIcon style={ styles.icon }  color='white' name={ iconos.box }/> */}
        
        { children }
      </StyledText>
    </View>
  )
}

export default ButtonMenu


const iconos = {
  laptop: 'laptop',
  box: 'box_list'
}

const styles = StyleSheet.create({
  botonMenu: {
    backgroundColor: 'gray',
    marginHorizontal: 30,
    marginVertical: 30,
    height: 150,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
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
    alignItems: "center"
  }
})