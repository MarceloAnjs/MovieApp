import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigators/TabNavigator";
import { Logs } from "expo";
import { LogBox } from "react-native";
import MovieDetailsScreen from "./src/screens/MovieDetails";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
