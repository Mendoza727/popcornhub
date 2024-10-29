import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../screens/Details/DetailsScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';

export type RootStackParamas = {
    Home: undefined,
    Details: { MovieId: number }
}

const Stack = createStackNavigator<RootStackParamas>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}