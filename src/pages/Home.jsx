import { StyleSheet, Text, View } from "react-native"
import ButtonMenu from "../components/ButtonMenu"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Home = () => {
  return (
    <View style={ styles.container }>
      
        
      <ButtonMenu>
        <Text style={ styles.icon }>
          <FontAwesomeIcon color="white" icon="fa-boxes-stacked" />
        </Text>
        <Text style={ styles.text }>Fisico</Text>
      </ButtonMenu>
    
    
      <ButtonMenu>
        <Text style={ styles.icon }>
          <FontAwesomeIcon color="white" icon="fa-computer" />
        </Text>
        <Text style={ styles.text }>Sistema</Text>
      </ButtonMenu>
    
    
      <ButtonMenu>
        <Text style={ styles.icon }>
          <FontAwesomeIcon color="white" icon="fa-calendar-days" />
        </Text>
        <Text style={ styles.text }>Caducidades</Text>
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
    fontSize: 18
  }
})
