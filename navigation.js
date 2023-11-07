import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./screens/Feed";
import TweetDetailScreen from "./screens/TweetDetailsScreen";

// Stack
const HomeStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={Feed} />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{
          headerTitle: "Tweet Details",
        }}
      />
    </HomeStack.Navigator>
  );
}
