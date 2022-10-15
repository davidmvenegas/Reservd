import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}