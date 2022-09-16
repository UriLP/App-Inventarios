import { StyleSheet, Text, View } from "react-native"
import ButtonMenu from "../components/ButtonMenu"
import { TouchableOpacity } from "react-native-gesture-handler"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import Icon from "../components/Icon";
import theme from "../theme";

//Firebase Conexion
import { getAllMedicinas } from "../firebase/api";

const Home = () => {

  // const cargarMedicinas = async() => {
  //   const respuesta = await getAllMedicinas();
  //   console.table(respuesta);
  // }

  // cargarMedicinas();

  const navigation = useNavigation()

  return (
    <View style={ styles.container }>
      
      <ButtonMenu>
        <Text style={ styles.text }>Inventario Físico</Text>
      </ButtonMenu>
    
      <ButtonMenu>
        <Text style={ styles.text }>Inventario en Sistema</Text>
      </ButtonMenu>
      
      <ButtonMenu>
        <Text style={ styles.text }>Caducidades</Text>
      </ButtonMenu>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    // backgroundColor: theme.colors.bgPrimary,
    padding: 10,
    height: '80%',
    // flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 30,
    display: "flex",
    borderRadius: 5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  icon: {
    marginVertical: 5,
  },
  text: {
    fontSize: theme.fontSizes.bodySize,
    color: theme.colors.textColor
  }
})
