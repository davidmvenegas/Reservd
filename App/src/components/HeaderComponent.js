import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { notifications, profile } from '../redux/actions/navigationAction';
import IIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

export default function HeaderComponent() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const location = useSelector((store) => store.navigation.location);

    function handleNotificationsClick() {
        navigation.navigate('NotificationsScreen');
        dispatch(notifications());
    }
    function handleProfileClick() {
        navigation.navigate('ProfileScreen');
        dispatch(profile());
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <View style={styles.text_wrap}>
                    <Text style={styles.username_text}>Welcome Back, John</Text>
                </View>
                <View style={styles.image_wrap}>
                    <TouchableOpacity onPress={handleNotificationsClick}>
                        <IIcon style={styles.notification_image} name="ios-notifications" size={28} color={location === 'NOTIFICATIONS_SCREEN' ? '#0099ff' : '#999'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleProfileClick}>
                        <FAIcon style={styles.profile_image} name="user-alt" size={23} color={location === 'PROFILE_SCREEN' ? '#0099ff' : '#999'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        height: 92,
        width: deviceWidth,
        borderBottomWidth: 2,
        borderColor: '#353e4f',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#18252E",
        padding: 20,
        paddingTop: 65,
        marginLeft: -16,
        marginTop: -46,
    },
    wrap: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text_wrap: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    username_text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '300',
    },
    image_wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    notification_image: {
        height: 28,
        width: 28,
        marginRight: 25,
    },
    profile_image: {
        height: 23,
        width: 23,
    },
});