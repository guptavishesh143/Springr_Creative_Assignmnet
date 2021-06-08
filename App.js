import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/store';
//Main Function
export default function App() {
  //States

  const LoginStack = createStackNavigator();

  function Login() {
    return (
      <NavigationContainer>
        <LoginStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={SplashScreen}>
          <LoginStack.Screen name="SplashScreen" component={SplashScreen} />
          <LoginStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              gesturesEnabled: false,
            }}
          />
          <LoginStack.Screen name="DetailScreen" component={DetailScreen} />
        </LoginStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <Login />
      </Provider>
    </>
  );
}
