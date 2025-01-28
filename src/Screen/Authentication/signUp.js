import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import FormField from '../../components/FormField';

const {width, height} = Dimensions.get("window")


const SignUpScreen = () => {
    const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth:"",
    password:"",
    confirmPassword: ""
   })

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
       <View style={styles.headerContainer}>
        <View style={styles.titleConatiner}>
        <Text style={styles.title}>Sign up</Text>
        </View>
         <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Tellus id quam.</Text>
        
       
       <TouchableOpacity>
         <View style={styles.iconContainer}>
          <Image source={require("../../assets/signUp/close.png")}
           style={styles.close}
          />
            </View>
       </TouchableOpacity>
       </View>
     

      <Text style={styles.sectionTitle}>PERSONAL DETAILS</Text>
      <FormField
        label="First name"
        placeholder="Nonye"
        value={form.firstName}
        onChangeText={(e) => 
          setForm({
            ...form,
            firstName:e
          })
        }
        icon={require('../../assets/signUp/profile.png')}
      />
      <FormField
        label="Last name"
        placeholder="Nonye"
        value={form.lastName}
        onChangeText={(e) => setForm({
          ...form,
          lastName:e
        })}
        icon={require('../../assets/signUp/profile.png')}
      />
      <FormField
        placeholder="Phone number"
        value={form.phoneNumber}
        onChangeText={(e) => 
          setForm({
            ...form,
            phoneNumber:e
          })
        }
        keyboardType="phone-pad"
        icon={require('../../assets/signUp/call.png')}
      />
      <FormField
        placeholder="Date of Birth"
        value={form.dateOfBirth}
        onChangeText={(e) => setForm({
          ...form,
          dateOfBirth:e
        })}
        icon={require('../../assets/signUp/calendar.png')}
      />

      <Text style={styles.sectionTitle}>SECURITY</Text>
      <FormField
        label="Password"
        placeholder="*******"
        value={form.password}
        onChangeText={(e) => setForm({
          ...form,
          password: e
        })}
        secureTextEntry
        icon={require('../../assets/signUp/shield.png')}
      />
        <View style={styles.passwordAuthContainer}>
            <View style={styles.authTextContainer}>
            <Text style={[styles.authText]}>8 character or more</Text>
            </View>
             <View style={styles.authTextContainer}>
             <Text>Lower case</Text>
             </View>
             <View style={styles.authTextContainer}>
             <Text>Digits</Text>
             </View>
             <View style={styles.authTextContainer}>
             <Text>Upper case</Text>
             </View>
           
        </View>
      <FormField
        label="Confirm Password"
        placeholder="*******"
        value={form.confirmPassword}
        onChangeText={(e) => setForm({
          ...form,
          confirmPassword:e
        })}
        secureTextEntry
        icon={require('../../assets/signUp/shield.png')}
      />

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up (1/3)</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          By signing up, I agree to CrowdCargo <Text style={styles.link}>Terms of Service</Text>,{' '}
          <Text style={styles.link}>Safety Policy</Text> and <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    // height: height
  },
  headerContainer:{
       height: height * 0.15,
        marginTop: 12,
        maxWidthwidth: 390,
        padding:14,
        position: 'relative'
  },
   titleConatiner:{
    width: 294,
      
   },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#7A7A7A',
    marginBottom: 20,
  },
      close: {
        position: 'absolute',
        top: -100,
        width: 20,
        height:20,
        left: 330
      },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7A7A7A',
    marginVertical: 10,
  },
  passwordAuthContainer:{
     flexDirection: 'row',
     flex:1,
     alignItems: "flex-start",
     justifyContent: "space-evenly",
     paddingBottom:10,
     gap:1,
     maxWidth:width
  }, 
  authTextContainer:{
    maxWidth: 150,
  },
   authText:{
     color: "#282828"
   },
  formFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 8,
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
  footerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 19,
    marginBottom: 10,
    width:350,
    flex:1,
    alignItems:"center",
    justifyContent: "center",
    height:80

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
   
  },
  footerText: {
    fontSize: 12,
    color: '#7A7A7A',
    textAlign: 'center',
    padding: 20
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;





// import { View, Text, Image, Alert, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
// import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import FormField from '../../components/FormField';

// const {width, height} = Dimensions.get("window")

// const signUp = () => {
//   const navigation = useNavigation(); 

//    const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     dateOfBirth:"",
//     password:"",
//     confirmPassword: ""
//    })

//    const [isSubmitting, setIsSubmitting] = useState(false)


//    const submit = async() => {
//     if (form.firstName === "" || form.lastName=== "" || form.phoneNumber=== "" || form.dateOfBirth=== "" || form.password==="", form.confirmPassword==="") {
//       Alert.alert("Error", "Please fill in all the fields")
//     }
//     setIsSubmitting(true)

//    }
//   return (
//     <View style={styles.screen}>
//         {/* Sign Up Message */}
//        <View style={styles.signUpContainer}>
//            <View style={styles.headerTextContainer}>
//            <Text style={styles.headerText}>Sign Up</Text>
//            </View>
//             <View style={styles.textContainer}>
//             <Text style={styles.text}>Lorem ipsum dolornsit amet connecteur.Telius id quam</Text>
//             </View>
//             <TouchableOpacity>
//             <View style={styles.iconContainer}>
//             <Image source={require("../../assets/signUp/close.png")}
//             style={styles.close}
//               />
//              </View>
//             </TouchableOpacity>
          
//        </View >
//          {/* Personal details */}
//        <View style={[styles.detailsContainer,{height : height * 0.6}]}>
//              <View style={styles.personalDetailsContainer}>
//              <Text style={styles.personalDetails}> PERSONAL DETAILS</Text>
//              </View>
            
//             <FormField
//               title="First name"
//               value={form.firstName}
//               handleChangeText={(e) => setForm({...form, firstName: e })}
//             />
//             <FormField
//               title="Last name"
//               value={form.lastName}
//               handleChangeText={(e) => setForm({...form, lastName: e })}
//             />
//             <FormField
//               title="Phone number"
//               value={form.phoneNumber}
//               handleChangeText={(e) => setForm({...form, phoneNumber: e })}
//             />
//             <FormField
//               title="Date of Birth"
//               value={form.firstName}
//               handleChangeText={(e) => setForm({...form, firstName: e })}
//             />
//               <View> 
//                  <Text> SECURITY</Text>
//             <FormField
//              title="Password"
//              value={form.password}
//              handleChangeText={(e) => setForm({...form, password: e})}
//              otherStyles="mt-7"
           
//            />
//             <FormField
//              title="Confirm Password"
//              value={form.confirmPassword}
//              handleChangeText={(e) => setForm({...form, confirmPassword: e})}
//              otherStyles="mt-7"
           
//            />
           
//               </View>
//        </View>
//        {/* Sign Up Button */}
//        <View style={{height: height * 0.2}}>
//        <TouchableOpacity>
//             <Text> Sign up(1/3)</Text>
//         </TouchableOpacity>
//        </View>
//        {/* footer */}
//          <View>
//             <Text> By signing up, i agree to CrowdCargo <Text style={styles.policy}>
//             Terms of Service, Safety Policy
//               </Text> and <Text style={styles.policy}>Privacy Policy</Text></Text>
//          </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex:1,
//     backgroundColor: "#F7F7F7"
//   },
//   signUpContainer: {
//     height: height * 0.2,
//     marginTop: 12,
//     maxWidthwidth: 390,
//     padding:14,
//     position: 'relative'
//   }, 
//   headerTextContainer:{
//     width: 294,
//     height: 40,
//     marginTop: 40
//   },
//   headerText:{
//     color: '#212121',
//     fontWeight: 800,
//     fontSize:32,
//     lineHeight:39.84
//   },
//   textContainer:{
//     width:300,
//     height: 59
//   },
//   text: {
//     fontWeight: 400,
//     fontSize: 16,
//     lineHeight: 23
//   },
//   iconContainer:{
//      position: 'absolute',
//      top:-90,
//      left:350

//   },
//   close: {
//     width: 20,
//     height:20
//   },
//   detailsContainer: {
//     width: 348,
//     height: 560,
//     // top: 230,
//     left:21,
//     gap:7
//   },
//   personalDetailsContainer:{
//     width: 348,
//     height:23
//   },
//   personalDetails: {
//     fontWeight:800,
//     fontSize: 10,
//     lineHeight: 23,
//     color:"#21212180"

//   }



// })

// export default signUp