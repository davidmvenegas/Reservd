import { StyleSheet, SafeAreaView, Text, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import EIcon from 'react-native-vector-icons/Entypo';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import CardboardBox from '../assets/cardboard_box.png'
import Lock from '../assets/lock.png'

export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView>
                <View style={styles.section_1}>
                    <Text style={styles.title_text}>Quick Actions</Text>
                    <View style={styles.section_content_1}>
                        <TouchableOpacity style={{...styles.action_box, marginRight: 16}}>
                            <View style={styles.image_box}>
                                <Image style={styles.box_image} source={CardboardBox} />
                            </View>
                            <Text style={styles.action_text}>Reserve</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action_box}>
                            <View style={styles.image_box}>
                                <Image style={styles.lock_image} source={Lock} />
                            </View>
                            <Text style={styles.action_text}>Unlock</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.section_2}>
                    <Text style={styles.title_text}>My Boxes</Text>
                    <View style={styles.section_content_2}>
                        <MyBox/>
                        <MyBox/>
                        <MyBox/>
                    </View>
                </View>
            </ScrollView>
            <Navigation/>
        </SafeAreaView>
    );
};

function MyBox() {
    return (
        <View style={styles.mybox_wrap}>
            <View style={styles.mybox_lvl_1}>
                <Text style={styles.mybox_title}>Box No. 82</Text>
            </View>
            <View style={styles.mybox_lvl_2}>
                <View style={styles.lvl_2_item}>
                    <EIcon style={styles.location_image} name="location-pin" size={30} color="#023436" />
                    <Text style={styles.mybox_text}>Leverett Hall</Text>
                </View>
                <View style={styles.lvl_2_item}>
                    <MIcon style={styles.clock_image} name="clock-time-four" size={30} color="#023436" />
                    <Text style={styles.mybox_text}>3h 58min left</Text>
                </View>
            </View>
            <View style={styles.mybox_lvl_3}>
                <View style={styles.lvl_3_item}>
                    <MAIcon style={styles.date_image} name="date-range" size={30} color="#023436" />
                    <Text style={styles.mybox_text}>10/15/2022</Text>
                </View>
                <Text style={styles.lvl_3_to}>—</Text>
                <View style={styles.lvl_3_item}>
                    <MAIcon style={styles.date_image} name="date-range" size={30} color="#023436" />
                    <Text style={styles.mybox_text}>10/16/2022</Text>
                </View>
            </View>
        </View>
    )
}

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
    section_1: {
        padding: 20,
        paddingTop: 20,
        paddingBottom: 38,
        flex: 1,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%',
        borderColor: '#353e4f',
        borderBottomWidth: 2
    },
    section_content_1: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    action_box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 160,
        width: (deviceWidth / 2) - 28,
        backgroundColor: "#73d2de",
        borderRadius: 10
    },
    image_box: {
        flex: 2.65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box_image: {
        width: 72,
        height: 72,
    },
    lock_image: {
        width: 60,
        height: 90,
    },
    action_text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 21,
        fontWeight: '700',
        color: '#222'
    },

    // My Boxes
    section_2: {
        padding: 20,
        paddingTop: 18,
        flex: 2,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    title_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 18,
    },
    section_content_2: {
        width: deviceWidth - 40,
    },
    mybox_wrap: {
        backgroundColor: '#9effe8',
        flex: 1,
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 8,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#57737a',
    },
    mybox_lvl_1: {
        backgroundColor: '#2b4141',
        flex: 1,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        paddingTop: 7,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 6,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#18252E',
        width: '100%',
    },
    mybox_title: {
        padding: 4,
        paddingLeft: 6,
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
    },
    mybox_text: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
    },
    mybox_lvl_2: {
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingBottom: 15,
    },
    lvl_2_item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    location_image: {
        paddingRight: 2,
    },
    clock_image: {
        paddingRight: 7,
    },
    date_image: {
        paddingRight: 6,
    },
    mybox_lvl_3: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingBottom: 15,
    },
    lvl_3_item: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingRight: 5,
    },
    lvl_3_to: {
        marginLeft: 12,
        marginRight: 14,
        color: '#042a2b',
        fontSize: 16,
        fontWeight: '600',
    }
});