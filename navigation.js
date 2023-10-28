import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "./screens/Feed";
import TweetDetailScreen from "./screens/TweetDetailsScreen";
import Profil from "./screens/Profil";
import { Pressable, Image } from "react-native";

// Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/user.jpg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{
          headerTitle: "Tweet Details",
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="HomeStackGroup"
        component={HomeStackGroup}
        options={{
          title: "Feed",
        }}
      />
      <Drawer.Screen name="Profil" component={Profil} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
}
