import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constansts/colors";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor={Colors.primary500} />
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: Colors.gray700,
                contentStyle: { backgroundColor: Colors.gray700 },
              }}
            >
              <Stack.Screen
                name="AllPlaces"
                component={AllPlaces}
                options={({ navigation }) => ({
                  title: "Your Favorite Places",
                  headerRight: ({ tintColor }) => (
                    <IconButton
                      icon="add"
                      size={28}
                      color={tintColor}
                      onPress={() => navigation.navigate("AddPlace")}
                    />
                  ),
                })}
              />
              <Stack.Screen
                name="AddPlace"
                component={AddPlace}
                options={{
                  title: "Add a new Place",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
