import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet } from "react-native";

//screens
import Home from "../pages/HomePage";
import InventarioFisico from "../pages/InventarioFisicoPage";
import InventarioSistema from "../pages/InventarioSistemaPage";
import CaducidadesPage from "../pages/CaducidadesPage";
import SettingsScreen from "../pages/SettingsPage";

const HomeStackNavigator = createStackNavigator();

function MyStack () {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="HomePage"
    >
      <HomeStackNavigator.Screen 
        name="HomePage"
        component={ Home }
        options={{
          headerTitle: "Bienvenido",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
          headerStyle: { backgroundColor: "#0366d6"}
        }}
      />
      <HomeStackNavigator.Screen 
        name="Fisico"
        component={ InventarioFisico }
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Inventario Físico",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
          headerStyle: { backgroundColor: "#0366d6"},
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
          headerStyle: { backgroundColor: "#0366d6"},
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
        tabBarActiveTintColor: '#0366d6',
        tabBarInactiveTintColor: '#586069',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={ MyStack } 
        options={{
          tabBarBadge: 3,
          headerShown: false
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={ SettingsScreen } 
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create ({
  title: {
    color: "#fff",
    fontSize: 20
  }
})

export default function Navigation () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
