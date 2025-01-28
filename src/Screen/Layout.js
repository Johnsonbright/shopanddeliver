import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Layout = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      {/* Top Section */}
      <View style={styles.iconSection}>
        <Image
          source={require('../assets/layout/iconlayout.png')}
          style={styles.iconImage}
        />
        <Text style={styles.iconText}>By the people. For the people</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* AttachRect Background */}
        <ImageBackground
          source={require('../assets/layout/rect.png')}
          style={styles.backgroundImage}
        >
          <Image
            source={require('../assets/layout/attachRect.png')}
            style={styles.attachRect}
          />
        </ImageBackground>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton} onPress={()=> navigation.navigate('signUp')}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
           {/* Text */}
           <View style={styles.alreadySignUp}>
           <Text style={styles.alreadySignUpText}> Already Signed Up?</Text>
           </View>
           
          {/* Log In Button */}
          <TouchableOpacity style={styles.logInButton}>
            <Text style={styles.logInButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>CrowdCargo LLC. All rights reserved.</Text>
         <Image source={require("../assets/layout/footspiral.png")} style={styles.footSpline}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#191045',
  },
  iconSection: {
    alignItems: 'center',
    marginTop: height * 0.1,
    marginBottom: 20,
  },
  iconImage: {
    width: 100,
    height: 100,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    width: '100%',
    height: height * 0.58,
    position: 'absolute',
    bottom:0,
    top:135,
    
    
  },
 
  attachRect: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: height * 0.2,
    top: 14
  },
  buttonsContainer: {
    marginTop: -height * 0.2,
    alignItems: 'center',
    top:-10,
    paddingHorizontal: 40,
  },
  signUpButton: {
    backgroundColor: '#0066FF',
    width: width * 0.85,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 50,
    height: 80
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  alreadySignUp:{
    paddingBottom: 10,
    alignItems: 'center'
  },
  alreadySignUpText:{
    color: '#21212199',
    fontSize: 16,
    fontWeight:"bold"
   
  },
  logInButton: {
    width: width * 0.85,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 10,
    height: 80
  },
  logInButtonText: {
    color: '#00000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  footer: {
    paddingBottom: 20,
    alignItems: 'center',
    top: 15
  },
  footerText: {
    color: '#21212199',
    fontSize: 12,
    fontWeight:"bold"
  },
  footSpline:{
    width: 533.81,
    height: 50,
    zIndex:100,
    // borderRadius:0.26,
    // left:-18,
    bottom:-20,
    transform:[{rotate: '0deg'}]
   
  }
});

export default Layout;


// import { View, Text, Dimensions, StyleSheet, Image, ImageBackground, TouchableOpacity, Button } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'

// const {width, height} = Dimensions.get("window")

// const Layout = () => {
//   return (
//     <View style={[styles.screen, {backgroundColor: "#191045"}]}>
//         <View style={styles.icon}>
//            <Image source={require("../assets/layout/iconlayout.png")}/>
//             <View></View>
//         </View>
//           <View style={{position: 'relative'}}>
//           <ImageBackground source={require("../assets/layout/rect.png")}
//               style={styles.backgroundImage}
//               resizeMode='cover'
//          />
//            <View style={styles.overlay}>
//             <Image source={require("../assets/layout/attachRect.png")} />
//            </View>
//             <View> 
//               <TouchableOpacity>
//                  <View  style={styles.signContainer}>
//                      <Text>Sign Up</Text>
//                  </View>
//               </TouchableOpacity>
             
//             </View>
//           </View>
         
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // padding: 20,
//     // width: width,
//     // height:height
//   },
//   icon: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//      padding: 20,
//      top: -250
//   },
//   backgroundImage: {
//     width: '100%',
//     height: height * 0.55, // Take 55% of the screen height
//     position: 'absolute',
//     bottom: 0, // Position it from the bottom up
    
//   },
//   overlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems:"center",
//     top:-440
//   },
//   // signContainer: {
//   //   width: 351,
//   //   height: 219,
//   //   top: -206,
//   //   // left:20,
//   //   // gap: 26
//   // }
  
// })

// export default Layout