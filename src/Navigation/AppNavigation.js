import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'  // Corrected here
import OnboardingScreen from '../Screen/OnboardingScreen'
import Layout from '../Screen/Layout'
import signUp from '../Screen/Authentication/signUp'
import signIn from '../Screen/Authentication/signIn'

const Stack = createStackNavigator()  // Using createStackNavigator

const appNavigation = () => {
  console.log('AppNavigation is rendering');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen">  
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Layout" component={Layout} options={{ headerShown: false }} />
        <Stack.Screen name="signUp" component={signUp} options={{ headerShown: false }} />
        <Stack.Screen name="signIn" component={signIn} options={{ headerShown: false }} />
      </Stack.Navigator>  
    </NavigationContainer>
  )
}

export default appNavigation
