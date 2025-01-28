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

