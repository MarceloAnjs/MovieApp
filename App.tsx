import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigators/TabNavigator";
import MovieDetailsScreen from "./src/screens/MovieDetails";
import SeatBookingScreen from "./src/screens/SeatBooking";
import * as Font from "expo-font";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LogBox } from "react-native";
import { Logs } from "expo";

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const LoadFonts = async () => {
  await Font.loadAsync({
    "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
    "Poppins-BlackItalic": require("./src/assets/fonts/Poppins-BlackItalic.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-BoldItalic": require("./src/assets/fonts/Poppins-BoldItalic.ttf"),
    "Poppins-ExtraBold": require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraBoldItalic": require("./src/assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    "Poppins-ExtraLight": require("./src/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-ExtraLightItalic": require("./src/assets/fonts/Poppins-ExtraLightItalic.ttf"),
    "Poppins-Italic": require("./src/assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "Poppins-LightItalic": require("./src/assets/fonts/Poppins-LightItalic.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-MediumItalic": require("./src/assets/fonts/Poppins-MediumItalic.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-SemiBoldItalic": require("./src/assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Poppins-Thin": require("./src/assets/fonts/Poppins-Thin.ttf"),
    "Poppins-ThinItalic": require("./src/assets/fonts/Poppins-ThinItalic.ttf"),
  });
};

export default function App() {
  useEffect(() => {
    LoadFonts();
  }, []);

  Logs.disableExpoCliLogging();
  LogBox.ignoreAllLogs(true);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
