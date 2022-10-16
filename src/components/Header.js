import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

export default function Header({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <View style={styles.text_wrap}>
                    <Text style={styles.username_text}>Good morning, John</Text>
                </View>
                <View style={styles.image_wrap}>
                    <TouchableOpacity>
                        <IIcon style={styles.notification_image} name="ios-notifications" size={30} color="#900" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FAIcon style={styles.profile_image} name="user-alt" size={25} color="#100" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#353e4f',
    },
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 20,
    },
    text_wrap: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    username_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '300',
    },
    image_wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    notification_image: {
        height: 30,
        width: 30,
        color: '#999',
        marginRight: 25,
    },
    profile_image: {
        height: 25,
        width: 25,
        color: '#999',
    },
});