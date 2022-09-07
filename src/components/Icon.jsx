import { StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const Icon = () => {
  const navigation = useNavigation()

  var menus = ['Fisico', 'Sistema', 'Caducidades']

  var menu = menus.map(function(name) {
    return name;
  })


  return (
    <View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Fisico")}
        style={ styles.opacityEffect }
      >  
        <Ionicons name="cube-outline" size={ 60 } color="white" />
        <Text style={ styles.text }>Fisico</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        onPress={() => navigation.navigate("Fisico", console.log(menu))}
        style={ styles.opacityEffect }
      >  
        <Ionicons name="cube-outline" size={ 60 } color="white" />
        <Text style={ styles.text }>Fisico</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    height: '80%',
    // flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 30,
    display: "flex",
    borderRadius: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  icon: {
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    color: "#fff"
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