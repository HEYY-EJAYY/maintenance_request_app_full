import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomNavigation } from "../../../components/common/BottomNavigation";
import styles from "./profileStyles";

interface ProfilePageProps {
  profileImage: string | null;
  getProfileImageSource: () => any;
  onImagePress: () => void;
  onBack: () => void;
  onNavigateToTasks: () => void;
  onNavigateToHome: () => void;
  onNavigateToNotifications: () => void;
  onLogout: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profileImage,
  getProfileImageSource,
  onImagePress,
  onBack,
  onNavigateToTasks,
  onNavigateToHome,
  onNavigateToNotifications,
  onLogout,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Rica Garcia");
  const [email, setEmail] = useState("admin.rica@camella.com");
  const [position, setPosition] = useState("Community Manager");
  const [phone, setPhone] = useState("+63 912 345 6789");
  const [community, setCommunity] = useState("Camella Communities");

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName("Rica Garcia");
    setEmail("admin.rica@camella.com");
    setPosition("Community Manager");
    setPhone("+63 912 345 6789");
    setCommunity("Camella Communities");
    setIsEditing(false);
  };
  return (
    <SafeAreaView style={styles.dashboardContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {/* Header */}
      <View style={styles.adminNotificationHeader}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <View style={styles.adminNotificationHeaderContent}>
          <Text style={styles.notificationTitle}>Profile</Text>
          <Text style={styles.notificationDate}>Admin Account</Text>
        </View>
        {!isEditing ? (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}
          >
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.editActions}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <ScrollView
        style={styles.profileContainer}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Profile Avatar Section */}
        <View style={styles.profileAvatarSection}>
          <TouchableOpacity
            style={styles.avatarContainer}
            onPress={onImagePress}
          >
            <Image
              source={getProfileImageSource()}
              style={styles.profileAvatarLarge}
            />
            <View style={styles.editAvatarButton}>
              <Text style={styles.editAvatarIcon}>📷</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.profileRole}>Administrator</Text>
        </View>

        {/* Profile Info Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileField}>
            <Text style={styles.profileFieldLabel}>Name</Text>
            {isEditing ? (
              <TextInput
                style={styles.profileFieldInput}
                value={name}
                onChangeText={setName}
                placeholder="Enter name"
              />
            ) : (
              <View style={styles.profileFieldValue}>
                <Text style={styles.profileFieldValueText}>{name}</Text>
              </View>
            )}
          </View>

          <View style={styles.profileField}>
            <Text style={styles.profileFieldLabel}>Email</Text>
            {isEditing ? (
              <TextInput
                style={styles.profileFieldInput}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email"
                keyboardType="email-address"
              />
            ) : (
              <View style={styles.profileFieldValue}>
                <Text style={styles.profileFieldValueText}>{email}</Text>
              </View>
            )}
          </View>

          <View style={styles.profileField}>
            <Text style={styles.profileFieldLabel}>Position</Text>
            {isEditing ? (
              <TextInput
                style={styles.profileFieldInput}
                value={position}
                onChangeText={setPosition}
                placeholder="Enter position"
              />
            ) : (
              <View style={styles.profileFieldValue}>
                <Text style={styles.profileFieldValueText}>{position}</Text>
              </View>
            )}
          </View>

          <View style={styles.profileField}>
            <Text style={styles.profileFieldLabel}>Phone</Text>
            {isEditing ? (
              <TextInput
                style={styles.profileFieldInput}
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter phone"
                keyboardType="phone-pad"
              />
            ) : (
              <View style={styles.profileFieldValue}>
                <Text style={styles.profileFieldValueText}>{phone}</Text>
              </View>
            )}
          </View>

          <View style={styles.profileField}>
            <Text style={styles.profileFieldLabel}>Community</Text>
            {isEditing ? (
              <TextInput
                style={styles.profileFieldInput}
                value={community}
                onChangeText={setCommunity}
                placeholder="Enter community"
              />
            ) : (
              <View style={styles.profileFieldValue}>
                <Text style={styles.profileFieldValueText}>{community}</Text>
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
        <TouchableOpacity style={styles.adminLogoutButton} onPress={onLogout}>
          <Text style={styles.adminLogoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab="home"
        onTabPress={(tab) => {
          if (tab === "home") onNavigateToHome();
          if (tab === "request-detail") onNavigateToTasks();
          if (tab === "notifications") onNavigateToNotifications();
        }}
      />
    </SafeAreaView>
  );
};
