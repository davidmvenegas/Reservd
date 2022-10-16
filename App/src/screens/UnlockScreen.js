import { StyleSheet, SafeAreaView, Text, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import RFID from '../assets/RFID.png'
import PIN from '../assets/PIN.png'

export default function UnlockScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <Text style={styles.title_text}>Choose Unlock Method</Text>
                    <View style={styles.section_content}>
                        <TouchableOpacity style={{ ...styles.action_box, marginRight: 16 }}>
                            <View style={styles.image_box}>
                                <Image style={styles.rfid_image} source={RFID} />
                            </View>
                            <Text style={styles.action_text}>RFID Device</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action_box}>
                            <View style={styles.image_box}>
                                <Image style={styles.pin_image} source={PIN} />
                            </View>
                            <Text style={styles.action_text}>PIN Code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: "#18252E",
    },
    section: {
        padding: 20,
        paddingTop: 30,
        paddingBottom: 26,
        flex: 1,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: deviceWidth,
        borderColor: '#353e4f',
        borderBottomWidth: 2
    },
    title_text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 30,
    },
    section_content: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    action_box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
        width: deviceWidth - 40,
        backgroundColor: "#73d2de",
        borderRadius: 10,
        marginBottom: 20,
    },
    image_box: {
        flex: 2.65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rfid_image: {
        width: 122,
        height: 72,
    },
    pin_image: {
        width: 72,
        height: 72,
    },
    action_text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 21,
        fontWeight: '700',
        color: '#222'
    },
});