import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BottomNavigation } from "../../../components/common/BottomNavigation";
import styles from "./profileStyles";

interface ProfilePageProps {
  profileImage: string | null;
  onBack: () => void;
  onNavigateToSubmitRequest: () => void;
  onNavigateToNotifications: () => void;
  onEditAvatar: () => void;
  onLogout: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profileImage,
  onBack,
  onNavigateToSubmitRequest,
  onNavigateToNotifications,
  onEditAvatar,
  onLogout,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Jerrianne Kent Alejandria");
  const [email, setEmail] = useState("Jerrianne03@gmail.com");
  const [address, setAddress] = useState("Butuan City, Philippines");
  const [phone, setPhone] = useState("09639147380");

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName("Jerrianne Kent Alejandria");
    setEmail("Jerrianne03@gmail.com");
    setAddress("Butuan City, Philippines");
    setPhone("09639147380");
    setIsEditing(false);
  };
  const getProfileImageSource = () => {
    if (profileImage) {
      return { uri: profileImage };
    }
    return { uri: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jerrianne" };
  };

  return (
    <>
      {/* Header */}
      <View style={styles.pageHeader}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Profile</Text>
        {!isEditing ? (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}
          >
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Profile Content */}
      <ScrollView
        style={styles.profileContainer}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Profile Avatar Section with Edit Button */}
        <View style={styles.profileAvatarSection}>
          <TouchableOpacity
            style={styles.avatarContainer}
            onPress={onEditAvatar}
          >
            <Image
              source={getProfileImageSource()}
              style={styles.profileAvatarLarge}
            />
            <View style={styles.editAvatarButton}>
              <Text style={styles.editAvatarIcon}>📷</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.profileRole}>Homeowner</Text>
        </View>

        {/* Profile Info Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileField}>
            <Text style={styles.profileFieldLabel}>Name :</Text>
            {isEditing ? (
              <TextInput
                style={styles.profileFieldInput}
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
              />
            ) : (
              <View style={styles.profileFieldValueContainer}>
                <Text style={styles.profileFieldValue}>{name}</Text>
              </View>
            )}
          </View>

          <View style={styles.profileField}>
            <Text style={styles.profileFieldLabel}>Email :</Text>
            {isEditing ? (
              <TextInput
                style={styles.profileFieldInput}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email"
                keyboardType="email-address"
              />
            ) : (
              <View style={styles.profileFieldValueContainer}>
                <Text style={styles.profileFieldValue}>{email}</Text>
              </View>
            )}
          </View>

          <View style={styles.profileField}>
            <Text style={styles.profileFieldLabel}>Address :</Text>
            {isEditing ? (
              <TextInput
                style={styles.profileFieldInput}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter address"
              />
            ) : (
              <View style={styles.profileFieldValueContainer}>
                <Text style={styles.profileFieldValue}>{address}</Text>
              </View>
            )}
          </View>

          <View style={styles.profileField}>
            <Text style={styles.profileFieldLabel}>Phone:</Text>
            {isEditing ? (
              <TextInput
                style={styles.profileFieldInput}
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter phone"
                keyboardType="phone-pad"
              />
            ) : (
              <View style={styles.profileFieldValueContainer}>
                <Text style={styles.profileFieldValue}>{phone}</Text>
              </View>
            )}
          </View>

          {isEditing && (
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab="home"
        onTabPress={(tab) => {
          if (tab === "home") onBack();
          if (tab === "request-detail") onNavigateToSubmitRequest();
          if (tab === "notifications") onNavigateToNotifications();
        }}
      />
    </>
  );
};
