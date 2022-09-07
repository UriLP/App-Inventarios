import { StyleSheet, Text, View } from "react-native"
import ButtonMenu from "../components/ButtonMenu"
import { TouchableOpacity } from "react-native-gesture-handler"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import Icon from "../components/Icon";
import theme from "../theme";

const Home = () => {

  const navigation = useNavigation()

  return (
    <View style={ styles.container }>
      
      <ButtonMenu>
        <Text style={ styles.text }>Físico</Text>
      </ButtonMenu>
    
      <ButtonMenu>
        <Text style={ styles.text }>Sistema</Text>
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
    backgroundColor: theme.colors.bgPrimary,
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
    color: theme.colors.textColor
  }
})
