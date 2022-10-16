import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import NavigationComponent from './src/components/NavigationComponent';
import HeaderComponent from './src/components/HeaderComponent';

// Auth screens
import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

// Regular screens
import HomeScreen from './src/screens/HomeScreen';
import UnlockScreen from './src/screens/UnlockScreen';
import ReserveScreen from './src/screens/ReserveScreen';
import WalletScreen from './src/screens/WalletScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

export default function Main() {
    const isLoggedIn = useSelector((store) => store.user.userId !== null);

    const userId = useSelector((store) => store.user.userId);
    console.log(userId)

    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Tab.Navigator
                    initialRouteName={"HomeScreen"}
                    tabBar={props => <NavigationComponent {...props} />}
                    screenOptions={{
                        headerTitle: props => <HeaderComponent {...props} />
                    }}>
                    <Tab.Group>
                        <Tab.Screen name="HomeScreen" component={HomeScreen} />
                        <Tab.Screen name="UnlockScreen" component={UnlockScreen} />
                        <Tab.Screen name="ReserveScreen" component={ReserveScreen} />
                        <Tab.Screen name="WalletScreen" component={WalletScreen} />
                        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
                        <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
                        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
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
    );
}