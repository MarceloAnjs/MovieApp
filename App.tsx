import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigators/TabNavigator";
import { Logs } from "expo";
import { LogBox } from "react-native";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
