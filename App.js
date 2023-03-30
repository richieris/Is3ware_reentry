import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Welcome from "./Welcome";
import Signup from "./Signup";
import Home from "./Home";
import React, { Component } from "react";
import { createDrawerNavigator, } from "@react-navigation/drawer";
import admin from "./admin";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeDrawer = ({route,navigation}) => {
  
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#000",
          height: 100,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // drawerContentContainerStyle,
      }}
    >
      {/* // drawerContent={(props) => <CustomDrawerContent {...props} />}> */}
      <Drawer.Screen
        initialParams={route.params}
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        initialParams={route.params}
        name="Admin"
        component={admin}
        options={{ title: "Admin" }}
      />
    </Drawer.Navigator>
  );
};

function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name="Home"
        component={HomeDrawer}
        options={{
          // gestureResponseDistance:50000,
          
          swipeEnabled: false,
          gesturesEnabled: false,
          // title: "Home",
          header: () => <></>,
          headerLeft: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      // <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <NavStack />
        </NavigationContainer>
      // </GestureHandlerRootView>
    );
  }
}
