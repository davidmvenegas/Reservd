import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationComponent from './src/components/NavigationComponent';

// Auth screens
import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

// Regular screens
import HomeScreen from './src/screens/HomeScreen';
import WalletScreen from './src/screens/WalletScreen';

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

export default function App() {
  const isLoggedIn = true;

  return (
    <Provider store={store}>
      <NavigationContainer>
          {isLoggedIn ? (
          <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={"HomeScreen"} tabBar={props => <NavigationComponent {...props} />}>
              <Tab.Group>
                <Tab.Screen name="HomeScreen" component={HomeScreen} />
                <Tab.Screen name="WalletScreen" component={WalletScreen} />
              </Tab.Group>
            </Tab.Navigator>
          ) : (
            <AuthStack.Navigator>
              <AuthStack.Group screenOptions={{ headerShown: false }} >
                <AuthStack.Screen name="LandingScreen" component={LandingScreen} />
                <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
                <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
              </AuthStack.Group>
            </AuthStack.Navigator>
          )}
      </NavigationContainer>
    </Provider>
  );
}