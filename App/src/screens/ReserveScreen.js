import { useState } from "react";
import { useDispatch } from 'react-redux';
import { wallet } from '../redux/actions/navigationAction';
import { addCurrentReservation } from '../redux/actions/currentReservationAction';
import { StyleSheet, SafeAreaView, Dimensions, View, ScrollView, Text, Image, Modal, Pressable, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import IIcon from 'react-native-vector-icons/Ionicons';
import CardboardBox from '../assets/cardboard_box.png';

export default function ReserveScreen({ navigation }) {
    const dispatch = useDispatch();
    const [lockerOption, setLockerOption] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentReservation, setCurrentReservation] = useState({})

    const allOptions = [
        { value: 'TEST_1' },
        { value: 'TEST_2' },
        { value: 'TEST_3' },
    ];

    function handleOpenModal() {
        setCurrentReservation({ name: 'TEST_NAME', lng: 42.3596633, lat: -71.0643705, price: 9.99, size: '10" X 20"' })
        setModalVisible(true)
    }

    function handleCloseModal() {
        setCurrentReservation({})
        setLockerOption(null)
        setModalVisible(false)
    }

    function handleGoToPayment() {
        dispatch(addCurrentReservation({payload: currentReservation}));
        setModalVisible(false);
        setLockerOption(null)
        dispatch(wallet());
        navigation.navigate('WalletScreen');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <Text style={styles.title_text}>Select Location:</Text>
                    <View style={styles.map_wrap}>
                        <MapView
                            style={styles.map_styles}
                            provider={PROVIDER_GOOGLE}
                            showsUserLocation
                            initialRegion={{
                                latitude: 42.3596633,
                                longitude: -71.0643705,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1,
                            }}>
                            <Marker onPress={handleOpenModal} coordinate={{ latitude: 42.3596633, longitude: -71.0643705 }}>
                                <Image style={styles.map_marker} source={CardboardBox}/>
                            </Marker>
                            <Marker onPress={handleOpenModal} coordinate={{ latitude: 42.374973, longitude: -71.124275 }}>
                                <Image style={styles.map_marker} source={CardboardBox}/>
                            </Marker>
                        </MapView>
                    </View>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.scrollview_wrap}>
                                <ScrollView>
                                    <View style={styles.scrollview_content}>
                                        <Pressable style={styles.buttonClose} onPress={handleCloseModal}>
                                            <IIcon name="ios-close-outline" size={50} color="#023436" />
                                        </Pressable>
                                        <View style={styles.modal_content}>
                                            <Text style={styles.modal_text_1}>Staples Connect Cambridge</Text>
                                            <Text style={styles.modal_text_2}>Hours:</Text>
                                            <Text style={styles.modal_text_3}>
                                                Sunday: &nbsp;8AM–10PM
                                                {"\n"}Monday: &nbsp;7AM–11PM
                                                {"\n"}Tuesday: &nbsp;7AM–10PM
                                                {"\n"}Wednesday: &nbsp;7AM–11PM
                                                {"\n"}Thursday: &nbsp;7AM–11PM
                                                {"\n"}Friday: &nbsp;7AM–11PM
                                                {"\n"}Saturday: &nbsp;7AM–11PM
                                            </Text>
                                            <Text style={styles.modal_select_title}>Available Lockers:</Text>
                                            <View style={styles.modal_select_content}>
                                                {allOptions.map((option, index) => (
                                                    <Pressable
                                                        onPress={() => setLockerOption(option.value)} key={index}
                                                        style={option.value === lockerOption ? styles.selected : styles.unselected}>
                                                        <Text style={styles.option_title}>{option.value}</Text>
                                                        <Text style={styles.option_size}>Size: 10" X 20"</Text>
                                                    </Pressable>
                                                ))}
                                            </View>
                                        </View>
                                        <TouchableOpacity style={lockerOption === null ? styles.modal_confirm_disabled : styles.modal_confirm} onPress={handleGoToPayment} disabled={lockerOption === null}>
                                            <Text style={styles.modal_confirm_text}>Select Locker</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </Modal>
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
        paddingBottom: 35,
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
        marginBottom: 25,
    },
    map_wrap: {
        position: 'relative',
        width: deviceWidth - 40,
        height: 350,
    },
    map_styles: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 6,
    },
    map_marker: {
        height: 40,
        width: 40,
    },

    // Modal styles
    centeredView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.75)',
    },
    modalView: {
        height: 400,
        width: deviceWidth - 40,
        backgroundColor: "#ddd",
        borderRadius: 6,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    scrollview_wrap: {
        width: deviceWidth - 40,
    },
    buttonClose: {
        position: 'absolute',
        top: 4,
        right: 4,
        zIndex: 100,
    },
    modal_content: {
        padding: 25,
    },
    modal_text_1: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 4,
        color: "#353e4f",
    },
    modal_text_2: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
    },
    modal_text_3: {
        fontSize: 16,
    },
    modal_select_title: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 18,
        marginBottom: 8,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
    },
    modal_select_content: {
        marginTop: 4,
        marginBottom: -8,
    },
    option_title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'left',
        marginBottom: 10,
    },
    option_size: {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
    },
    unselected: {
        backgroundColor: '#888',
        marginBottom: 8,
        marginTop: 8,
        padding: 10,
        borderRadius: 10,
    },
    selected: {
        marginBottom: 8,
        marginTop: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#0099ff',
    },
    modal_confirm: {
        width: "86%",
        marginLeft: '7%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#353e4f',
        marginBottom: 20,
        borderRadius: 6,
    },
    modal_confirm_disabled: {
        width: "86%",
        marginLeft: '7%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#353e4f',
        marginBottom: 20,
        borderRadius: 6,
        opacity: 0.4,
    },
    modal_confirm_text: {
        fontSize: 16,
        fontWeight: '600',
        color: "#fff",
    },
});