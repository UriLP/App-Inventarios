import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack"
import { ImageBackground, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

//screens
import Home from "../pages/HomePage";
import InventarioFisico from "../pages/InventarioFisicoPage";
import InventarioSistema from "../pages/InventarioSistemaPage";
import CaducidadesPage from "../pages/CaducidadesPage";
import SettingsPage from "../pages/SettingsPage";
import NuevoProductoPage from "../pages/NuevoProductoPage";
import theme from "../theme";
import NuevaCaducidadPage from "../pages/NuevaCaducidadPage";
import DetailsScreen from "../pages/DetailsScreen";
import ProductoProvider from "../contexts/ProductoProvider";

const HomeStackNavigator = createStackNavigator();

const styles = StyleSheet.create ({
  subTitle: {
    color: theme.colors.textColor,
    fontSize: theme.fontSizes.subHeadingSize
  },
  title: {
    color: theme.colors.textColor,
    fontSize: theme.fontSizes.headerSize
  }
})

let optionsHeader = {
  headerTitleAlign: "center",
  headerTitleStyle: styles.subTitle,
  headerStyle: { backgroundColor: theme.colors.bgPrimary },
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.textColor,
}

function MyStack (user) {
  const [ greet, setGreet ] = useState('')

  const findGreet = () => {
    const hrs = new Date().getHours()

    if ( hrs === 0 || hrs < 12 ) {
      return setGreet('Días')
    } else if ( hrs === 1 || hrs < 19 ) {
      return setGreet('Tardes')
    }else {
      return setGreet('Noches')
    }

  }

  useEffect(() => {
    findGreet()
  }, [])

  return (
    <ProductoProvider>
      <HomeStackNavigator.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerMode: 'screen',
          cardStyle: { backgroundColor: theme.colors.bgPrimary }
        }}
      >
        <HomeStackNavigator.Screen 
          name={ `Buenas ${ greet } ${ user.name }` }
          // name={ "Bienvenido" }
          component={ Home }
          options={ optionsHeader }
        />
          
        <HomeStackNavigator.Screen 
          name="Inventario Físico"
          component={ InventarioFisico }
          options={ optionsHeader }
        />
        {/* <HomeStackNavigator.Screen 
          name="Inventario en Sistema"
          component={ InventarioSistema }
          options={ optionsHeader }
        />
        <HomeStackNavigator.Screen 
          name="Caducidades"
          component={ CaducidadesPage }
          options={ optionsHeader }
        />
        <HomeStackNavigator.Screen 
          name="Nuevo Producto"
          component={ NuevoProductoPage }
          options={ optionsHeader }
        />
        <HomeStackNavigator.Screen 
          name="Nueva Caducidad"
          component={ NuevaCaducidadPage }
          options={ optionsHeader }
        /> */}
        <HomeStackNavigator.Screen 
          name="Details"
          component={ DetailsScreen }
          options={ optionsHeader }
        />
      </HomeStackNavigator.Navigator>
    </ProductoProvider>
    
  )
}

const Tab = createBottomTabNavigator();


function MyTabs ({ user }) {
  const TabsUserName = props => MyStack(user)

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home' ) {
            iconName = focused
              ? 'home'
              : 'home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }
          // console.log(MyStack);
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
        // component={ MyStack } 
        component={ TabsUserName } 
        options={{
          // headerTitle: `Buenas`,
          // headerTitle: `Buenas ${ greet } ${ user.name }`,
          headerShown: false,
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
          headerStyle: { backgroundColor: theme.colors.bgPrimary },
          headerTintColor: theme.colors.textColor,
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={ SettingsPage } 
        options={{
          headerTitle: "Configuración",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
          headerStyle: { backgroundColor: theme.colors.bgPrimary },
          headerTintColor: theme.colors.textColor,
        }}
      />
    </Tab.Navigator>
  )
}

export default function Navigation ({ user }) {
  return (
    <NavigationContainer>
      <MyTabs user={ user } />
    </NavigationContainer>
  )
}

