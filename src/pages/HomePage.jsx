import { StyleSheet, Text, View } from "react-native"
import ButtonMenu from "../components/ButtonMenu"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity } from "react-native-gesture-handler"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const Home = () => {

  const navigation = useNavigation()

  return (
    <View style={ styles.container }>
      
        
      <ButtonMenu>
        <TouchableOpacity
          onPress={() => navigation.navigate("Fisico")}
          style={{
            // backgroundColor: "purple",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            margin: "auto"
          }}
        >
          {/* <Text style={ styles.icon }> */}
            {/* <FontAwesomeIcon color="white" size={ 10 } icon="fa-computer" /> */}
            <Ionicons name="cube-outline" size={ 60 } color="white" />
          {/* </Text> */}
          <Text style={ styles.text }>Fisico</Text>
        </TouchableOpacity>
      </ButtonMenu>
    
    
      <ButtonMenu>
        <TouchableOpacity
          onPress={() => navigation.navigate("Sistema")}
          style={{
            // backgroundColor: "purple",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            margin: "auto"
          }}
        >
          {/* <Text style={ styles.icon }> */}
            {/* <FontAwesomeIcon color="white" size={ 10 } icon="fa-computer" /> */}
            <Ionicons name="laptop-outline" size={ 60 } color="white" />
          {/* </Text> */}
          <Text style={ styles.text }>Sistema</Text>
        </TouchableOpacity>
      </ButtonMenu>
    
    
      <ButtonMenu>
      <TouchableOpacity
          onPress={() => navigation.navigate("Caducidades")}
          style={{
            // backgroundColor: "purple",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            margin: "auto"
          }}
        >
          {/* <Text style={ styles.icon }> */}
            {/* <FontAwesomeIcon color="white" size={ 10 } icon="fa-computer" /> */}
            <Ionicons name="calendar-sharp" size={ 60 } color="white" />
          {/* </Text> */}
          <Text style={ styles.text }>Caducidades</Text>
        </TouchableOpacity>
      </ButtonMenu>
    
      
    </View>
  )
}

export default Home

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
  }
})
