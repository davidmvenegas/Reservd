import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import { home } from '../redux/actions/navigationAction';
import { StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity, Dimensions, View } from 'react-native';

export default function SettingsScreen({ navigation }) {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
        dispatch(home());
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.wrap}>
                    <TouchableOpacity style={styles.btn} onPress={handleLogout}>
                        <Text style={styles.btn_text}> Logout </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: deviceWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "#18252E",
    },
    wrap: {
        alignItems: 'center',
    },
    btn: {
        width: 300,
        backgroundColor: '#086972',
        padding: 15,
        margin: 10,
        borderRadius: 10,
    },
    btn_text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
});