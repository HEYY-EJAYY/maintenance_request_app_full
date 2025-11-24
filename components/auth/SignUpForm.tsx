import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { borderRadius, colors, shadows, spacing } from "../../config/theme";
import { Button } from "../common/Button";
import { Input } from "../common/Input";

interface SignUpFormProps {
  onSignUp: () => void;
  onBackToLogin: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  onSignUp,
  onBackToLogin,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Validate form here
    if (password === confirmPassword) {
      onSignUp();
    } else {
      // Show error
      alert("Passwords do not match!");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/camella.jpeg")}
      style={styles.signupBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.signupHeader}>
          <Text style={styles.headerTitle}>PRIMA CAMELLA</Text>
          <Text style={styles.headerSubtitle}>BUTUAN</Text>
        </View>

        <View style={styles.signupCard}>
          <View style={styles.welcomeBox}>
            <Text style={styles.welcomeText}>Create Account</Text>
            <Text style={styles.welcomeSubtext}>Sign up to get started</Text>
          </View>

          <View style={styles.form}>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={setFullName}
            />

            <Input
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              label="Address"
              placeholder="Enter your address"
              value={address}
              onChangeText={setAddress}
            />

            <Input
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <Button
              title="Sign Up"
              onPress={handleSignUp}
              variant="accent"
              style={styles.signupButton}
            />

            <View style={styles.loginTextContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={onBackToLogin}>
                <Text style={styles.loginLink}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  signupBackground: {
    flex: 1,
    width: "100%",
    minHeight: "100%",
    backgroundColor: colors.secondary,
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: spacing.xl,
    paddingBottom: 40,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay,
  },
  signupHeader: {
    zIndex: 2,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
    letterSpacing: 3,
    marginBottom: spacing.sm,
  },
  headerSubtitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.white,
    letterSpacing: 3,
  },
  signupCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: 30,
    width: "100%",
    maxWidth: 400,
    zIndex: 2,
    marginBottom: 40,
    ...shadows.large,
  },
  welcomeBox: {
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.accent,
    marginBottom: 4,
  },
  welcomeSubtext: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  form: {
    width: "100%",
  },
  signupButton: {
    marginBottom: spacing.lg,
    marginTop: spacing.md,
  },
  loginTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 13,
    color: colors.text.secondary,
  },
  loginLink: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: "600",
  },
});
