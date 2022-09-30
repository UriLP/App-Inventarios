import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import theme from '../theme'
import { useNavigation } from "@react-navigation/native";


const Producto = ({ item, onPress }) => {
  const navigation = useNavigation()
  const { categoria, familia, nombre, neto, piezas } = item
  return (
    <TouchableOpacity style={ styles.container } onPress={ onPress }>
    {/* <TouchableOpacity style={ styles.container } onPress={ () => navigation.navigate("Details") }> */}
      
      <View style={ styles.headerContainer}>
        <Text style={ styles.familia } numberOfLines={ 2 }>{ familia }</Text>
        <Text style={ styles.categoria } numberOfLines={ 2 }>{ categoria }</Text>
      </View>
      <View style={ styles.subTitle }>
        <Text style={ styles.nombre } numberOfLines={ 2 }>{ nombre }</Text>
        <Text style={ styles.neto } numberOfLines={ 2 }>{ neto }</Text>
        <Text style={ styles.piezas } numberOfLines={ 2 }>Piezas: { piezas }</Text>
      </View>

    </TouchableOpacity>
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
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoria: {
    color: theme.colors.textColor,
    // fontWeight: 'bold',
    fontSize: theme.fontSizes.smallSize
  },
  familia: {
    color: theme.colors.textColor,
    fontWeight: 'bold',  
    fontSize: theme.fontSizes.formSize
  },
  nombre: {
    color: theme.colors.textColor,
    marginLeft: 10,
    fontSize: theme.fontSizes.normalSize

  },
  neto: {
    color: theme.colors.textColor,
    marginLeft: 5,
    fontSize: theme.fontSizes.normalSize

  },
  piezas: {
    color: theme.colors.textColor,
    marginLeft: 'auto',
    fontSize: theme.fontSizes.smallSize

  },
  subTitle: {
    flexDirection: 'row'
  }
})