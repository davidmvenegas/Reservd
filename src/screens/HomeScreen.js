import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Header from '../components/Header'

export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <View style={styles.section_1}>
                <Text style={styles.title_text}>Quick Actions</Text>
                <View style={styles.section_content_1}>
                    <View style={styles.reserve_box}>
                        <Text style={styles.reserve_text}>Reserve a box</Text>
                    </View>
                    <View style={styles.unlock_box}>
                        <Text style={styles.unlock_text}>Unlock a box</Text>
                    </View>
                </View>
            </View>
            <View style={styles.section_2}>
                <Text style={styles.title_text}>My Boxes</Text>
                <View style={styles.section_content_2}>
                    <View style={styles.mybox_wrap}>
                        <View style={styles.mybox_lvl_1}>
                            <Text style={styles.mybox_title}>Box No. 82</Text>
                        </View>
                        <View style={styles.mybox_lvl_2}>
                            <Text style={styles.mybox_title}>Leverett Hall</Text>
                            <Text style={styles.mybox_title}>3h 58min left</Text>
                        </View>
                        <View style={styles.mybox_lvl_3}>
                            <Text style={styles.mybox_title}>start</Text>
                            <Text style={styles.mybox_title}>end</Text>
                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
};

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
        flex: 1,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%',
    },
    title_text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#63C7AD',
    },
    section_content_1: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    reserve_box: {
        height: 200,
        width: 200,
    },
    reserve_text: {},
    unlock_box: {},
    unlock_text: {},



    // NEXT
    section_2: {
        padding: 20,
        flex: 1,
        alignItems: 'start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%',
    },
    section_content_2: {},
    mybox_wrap: {},
    mybox_lvl_1: {},
    mybox_lvl_2: {},
    mybox_lvl_3: {},
    mybox_title: {},
});