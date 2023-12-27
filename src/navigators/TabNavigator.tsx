import React from "react";

import { COLORS, FONTSIZE, SPACING } from "../theme/theme";

import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import TicketScreen from "../screens/Ticket";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.Orange } : {},
                ]}
              >
                <MaterialCommunityIcons
                  name="movie-open-outline"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.Orange } : {},
                ]}
              >
                <MaterialCommunityIcons
                  name="movie-search-outline"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.Orange } : {},
                ]}
              >
                <MaterialCommunityIcons
                  name="ticket-confirmation-outline"
                  size={FONTSIZE.size_30}
                  color={COLORS.White}
                />
              </View>
            );
          },
        }}
      />
      {/*
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.Orange } : {},
                ]}
              >
                <CustomIcon
                  name="user"
                  color={COLORS.White}
                  size={FONTSIZE.size_30}
                />
              </View>
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;
