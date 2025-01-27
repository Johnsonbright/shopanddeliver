import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Layout = () => {
  return (
    <View style={{flex:1 , justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 50, color:"#00000"}}>Site Under Construction 🚧 </Text>
    </View>
  )
}

export default Layout