import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { home, wallet, scan, find, settings } from '../redux/actions/navigationAction';
import { useDispatch, useSelector } from 'react-redux';
import IIcon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';

export default function NavigationComponent({ navigation }) {
    const dispatch = useDispatch();
    const location = useSelector((store) => store.navigation.location);

    function handleHomeClick() {
        navigation.navigate('HomeScreen');
        dispatch(home());
    }
    function handleWalletClick() {
        navigation.navigate('WalletScreen');
        dispatch(wallet());
    }
    function handleScanClick() {
        navigation.navigate('UnlockScreen');
        dispatch(scan());
    }
    function handleFindClick() {
        navigation.navigate('ReserveScreen');
        dispatch(find());
    }
    function handleSettingsClick() {
        navigation.navigate('SettingsScreen');
        dispatch(settings());
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <TouchableOpacity onPress={handleHomeClick} style={location === 'HOME_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <IIcon name="home" size={33} color={location === 'HOME_SCREEN' ? '#0099ff' : '#999'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleWalletClick} style={location === 'WALLET_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <EIcon name="wallet" size={33} color={location === 'WALLET_SCREEN' ? '#0099ff' : '#999'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleScanClick} style={location === 'SCAN_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <IIcon name="ios-scan-outline" size={33} color={location === 'SCAN_SCREEN' ? '#0099ff' : '#999'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleFindClick} style={location === 'FIND_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <AIcon name="find" size={33} color={location === 'FIND_SCREEN' ? '#0099ff' : '#999'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSettingsClick} style={location === 'SETTINGS_SCREEN' ? [styles.title_wrap_highlighted] : [styles.title_wrap]}>
                    <IIcon name="settings-sharp" size={33} color={location === 'SETTINGS_SCREEN' ? '#0099ff' : '#999'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 85,
        width: '100%',
        borderTopWidth: 2,
        borderColor: '#353e4f',
        paddingBottom: 45,
        backgroundColor: "#18252E",
    },
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
    },
    title_wrap: {
        height: 60,
        width: 65,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title_wrap_highlighted: {
        height: 60,
        width: 65,
        marginTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: '#0099ff',
        borderTopWidth: 4,
    },
});