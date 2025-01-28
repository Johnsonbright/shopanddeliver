import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const PasswordValidation = ({ password }) => {
  console.log("🚀 ~ PasswordValidation ~ password:", password);
  // Validation checks
  const hasEightCharacters = password.length >= 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);

  return (
    <View style={styles.passwordAuthContainer}>
      {/* Check for 8 characters or more */}
      <View
        style={[
          styles.authTextContainer,
          {
            backgroundColor: password ? (hasEightCharacters ? "#DFF6DD" : "#FFD6D6") : "#fff", // Default to #fff
          },
        ]}
      >
        <Text style={styles.authText}>8 characters or more</Text>
      </View>

      {/* Check for lowercase */}
      <View
        style={[
          styles.authTextContainer,
          {
            backgroundColor: password ? (hasLowercase ? "#DFF6DD" : "#FFD6D6") : "#fff", // Default to #fff
          },
        ]}
      >
        <Text style={styles.authText}>Lowercase</Text>
      </View>

      {/* Check for digits */}
      <View
        style={[
          styles.authTextContainer,
          {
            backgroundColor: password ? (hasDigit ? "#DFF6DD" : "#FFD6D6") : "#fff", // Default to #fff
          },
        ]}
      >
        <Text style={styles.authText}>Digits</Text>
      </View>

      {/* Check for uppercase */}
      <View
        style={[
          styles.authTextContainer,
          {
            backgroundColor: password ? (hasUppercase ? "#DFF6DD" : "#FFD6D6") : "#fff", // Default to #fff
          },
        ]}
      >
        <Text style={styles.authText}>Uppercase</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordAuthContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingBottom: 10,
    gap: 1,
    maxWidth: width,
  },
  authTextContainer: {
    maxWidth: 150,
    padding: 4,
    borderRadius: 5,
    backgroundColor: "#fff", // Default background color
  },
  authText: {
    color: "#282828",
  },
});

export default PasswordValidation;



