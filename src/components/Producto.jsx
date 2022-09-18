import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../theme'

const Producto = ({ item }) => {
  const { familia, nombre, neto } = item
  return (
    <View style={ styles.container }>
      <Text style={ styles.familia } numberOfLines={ 2 }>{ familia }</Text>
      <View style={ styles.subTitle }>
        <Text style={ styles.nombre } numberOfLines={ 2 }>{ nombre }</Text>
        <Text style={ styles.neto } numberOfLines={ 2 }>{ neto }</Text>
      </View>
    </View>
  )
}

export default Producto

const width = Dimensions.get('window').width - 50
const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.active,
    width,
    borderColor: theme.colors.active,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
    // shadowColor: theme.colors.active,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  familia: {
    color: theme.colors.textColor,
    fontWeight: 'bold'
  },
  nombre: {
    color: theme.colors.textColor,
    marginLeft: 10
  },
  neto: {
    color: theme.colors.textColor,
    marginLeft: 5
  },
  subTitle: {
    flexDirection: 'row'
  }
})