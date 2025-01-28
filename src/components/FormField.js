import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const FormField = ({ label, placeholder, value, onChangeText, keyboardType, secureTextEntry, icon }) => {
  return (
    <View style={styles.formFieldContainer}>
      <View style={styles.iconContainer}>
        {/* Add your image source here */}
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#A9A9A9"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#1074FD',
    borderRadius: 20,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#F9F9F9',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  inputContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#7A7A7A',
  },
  input: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 5,
  },
});


export default FormField

// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

// const FormField = ({ title, value, placeholder, handleChangeText, isPassword = false }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* Input Field */}
//       <TextInput
//         style={styles.textInput}
//         value={value}
//         placeholder={`${title} (${placeholder})`}
//         placeholderTextColor="#A5A5A5"
//         onChangeText={handleChangeText}
//         secureTextEntry={isPassword && !showPassword}
//       />
//       {/* Show/Hide Password (if applicable) */}
//       {isPassword && (
//         <TouchableOpacity
//           onPress={() => setShowPassword(!showPassword)}
//           style={styles.togglePassword}
//         >
//           <Text style={styles.toggleText}>{showPassword ? 'Hide' : 'Show'}</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 20,
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#DDD',
//     borderRadius: 8,
//     backgroundColor: '#F9F9F9',
//     paddingHorizontal: 15,
//     paddingVertical: 12,
//     fontSize: 16,
//     color: '#333',
//   },
//   togglePassword: {
//     position: 'absolute',
//     right: 15,
//     top: 14,
//   },
//   toggleText: {
//     color: '#007BFF',
//     fontSize: 14,
//   },
// });

// export default FormField;



// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
// import React, {useState} from 'react'

// const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
//   const [showPassword,setShowPassword] = useState(false)
//   return (
//     <View style={styles.infoContainer}>
//        <Text style={styles.title}>{title}</Text>

//        <View style={styles.inputContainer}>
//          <TextInput 
//            style={styles.textInput}
//            value={value}
//            placeholder={placeholder}
//            placeholderTextColor="#fff"
//            onChangeText={handleChangeText}
//            secureTextEntry={title === "SECURITY" && !showPassword}
//          />
//           {
//             title === "SECURITY" && (
//               <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//                 <Image/>
//               </TouchableOpacity>
//             )
//           }

//        </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   infoContainer: {
//     width:348,
//     // height:315,
//     gap:10
//   },
//   inputContainer:{
//   borderColor: "#1074FD",
//   borderRadius: 20,
//   borderWidth: 0.5,
//   paddingTop:22,
//   paddingRight:20,
//   paddingBottom:22,
//   paddingLeft:20,
//   width: 348,
//   height:68,
//   gap:10
 

//   }
// })

// export default FormField