import { View, Text, Platform } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigation from './src/Navigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';



const App = () => {
 useEffect(()  => {
  if(Platform.OS === "android")
  SplashScreen.hide();
 },[])

  return (
   <AppNavigation/>
  )
}

export default App