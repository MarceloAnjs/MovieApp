import * as React from "react";
import { Text, View, StatusBar, Image } from "react-native";
import { styles } from "./styles";
import AppHeader from "../../components/AppHeader";
import SettingComponent from "../../components/SettingComponent";

const UserAccountScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header={"My Profile"}
          action={() => navigation.goBack()}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/image/avatar.png")}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>John Doe</Text>
      </View>

      <View style={styles.profileContainer}>
        <SettingComponent
          icon="account-outline"
          heading="Account"
          subheading="Edit Profile"
          subtitle="Change Password"
        />
        <SettingComponent
          icon="account-cog-outline"
          heading="Settings"
          subheading="Theme"
          subtitle="Permissions"
        />
        <SettingComponent
          icon="account-plus-outline"
          heading="Offers & Refferrals"
          subheading="Offer"
          subtitle="Refferrals"
        />
        <SettingComponent
          icon="badge-account-horizontal-outline"
          heading="About"
          subheading="About Movies"
          subtitle="more"
        />
      </View>
    </View>
  );
};

export default UserAccountScreen;
