import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack"
import { ImageBackground, StyleSheet } from "react-native";

//screens
import Home from "../pages/HomePage";
import InventarioFisico from "../pages/InventarioFisicoPage";
import InventarioSistema from "../pages/InventarioSistemaPage";
import CaducidadesPage from "../pages/CaducidadesPage";
import SettingsScreen from "../pages/SettingsPage";
import NuevoProductoPage from "../pages/NuevoProductoPage";
import theme from "../theme";

const HomeStackNavigator = createStackNavigator();

const styles = StyleSheet.create ({
  title: {
    color: theme.colors.textColor,
    fontSize: 20
  }
})

let optionsHeader = {
  headerTitle: 'Hola',
  headerTitleAlign: "center",
  headerTitleStyle: styles.title,
  headerStyle: { backgroundColor: theme.colors.bgPrimary }
}

const uri = 'https://images.pexels.com/photos/1391293/pexels-photo-1391293.jpeg?auto=compress&cs=tinysrgb&w=600'

function MyStack () {
  
  return (
    
    <HomeStackNavigator.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerMode: 'screen',
        cardStyle: { backgroundColor: theme.colors.bgPrimary }
      }}
    >
      <HomeStackNavigator.Screen 
        name={ "HomePage" }
        component={ Home }
        options= { optionsHeader }
      />
      <HomeStackNavigator.Screen 
        name="Físico"
        component={ InventarioFisico }
        options={{
          headerBackTitleVisible: false,
          // headerTitle: "Inventario Físico",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
          headerStyle: { backgroundColor: theme.colors.bgPrimary },
          headerTintColor: "#fff",
          
        }}
      />
      <HomeStackNavigator.Screen 
        name="Sistema"
        component={ InventarioSistema }
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Inventario en Sistema",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
          headerStyle: { backgroundColor: theme.colors.bgPrimary },
          headerTintColor: "#fff"
        }}
      />
      <HomeStackNavigator.Screen 
        name="Caducidades"
        component={ CaducidadesPage }
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Próximos a Caducar",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
          headerStyle: { backgroundColor: "#0366d6"},
          headerTintColor: "#fff"
        }}
      />
      <HomeStackNavigator.Screen 
        name="NuevoProducto"
        component={ NuevoProductoPage }
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Nuevo Producto",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
          headerStyle: { backgroundColor: theme.colors.bgPrimary},
          headerTintColor: "#fff"
        }}
      />
    </HomeStackNavigator.Navigator>
    
  )
}



const Tab = createBottomTabNavigator();

function MyTabs () {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }

          return <Ionicons name={ iconName } size={ size } color={ color } />
        },
        tabBarActiveTintColor: theme.colors.active,
        tabBarInactiveTintColor: theme.colors.active,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: theme.colors.bgPrimary}
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={ MyStack } 
        options={{
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={ SettingsScreen } 
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}



export default function Navigation () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
