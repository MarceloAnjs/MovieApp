import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigators/TabNavigator";
import { Logs } from "expo";
import { LogBox } from "react-native";
import MovieDetailsScreen from "./src/screens/MovieDetails";
import SeatBookingScreen from "./src/screens/SeatBooking";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  Logs.disableExpoCliLogging();
  LogBox.ignoreAllLogs(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: "default" }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="SeatBooking"
          component={SeatBookingScreen}
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
