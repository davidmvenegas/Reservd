import { useState } from 'react';
import { find } from '../redux/actions/navigationAction';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, ScrollView, View, TouchableOpacity, Button, Image, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ApplePay from '../assets/ApplePay.png'
import Paypal from '../assets/Paypal.png'

export default function WalletScreen({ navigation }) {
    const dispatch = useDispatch();
    const currentReservation = useSelector((store) => store.currentReservation.currentReservation);
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    console.log(currentReservation)

    function handleGoToReserve() {
        navigation.navigate('ReserveScreen');
        dispatch(find());
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    {currentReservation === null
                    ?
                    <View style={styles.wrap}>
                        <Text style={styles.no_location}>No location selected</Text>
                        <TouchableOpacity style={styles.btn} onPress={handleGoToReserve}>
                            <Text style={styles.btn_text}> Go to Locations </Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.wrapMain}>
                        <View>
                            <Text style={styles.title}>Payment</Text>
                            <View style={styles.content_wrap}>
                                <View style={styles.item_wrap}>
                                    <Text style={styles.left_txt}>Selected Locker:</Text>
                                    <Text style={styles.right_txt}>{currentReservation.name}</Text>
                                </View>
                                <View style={styles.item_wrap}>
                                    <Text style={styles.left_txt}>Size:</Text>
                                    <Text style={styles.right_txt}>{currentReservation.size}</Text>
                                </View>
                                <View style={styles.item_wrap}>
                                    <Text style={styles.left_txt}>Location:</Text>
                                    <Text style={styles.right_txt}>{currentReservation.lng}, {currentReservation.lng}</Text>
                                </View>
                                <View style={styles.date_wrap}>
                                    <Text style={styles.left_txt}>Start Time:</Text>
                                    <DateTimePicker
                                        value={date}
                                        mode={'datetime'}
                                        display={'default'}
                                        is24Hour={true}
                                        minimumDate={new Date(Date.now())}
                                        maximumDate={new Date(2022, 9, 20)}
                                        onChange={(event, value) => setDate(value)}
                                        style={styles.datePicker}
                                        />
                                </View>
                                <View style={styles.date_wrap}>
                                    <Text style={styles.left_txt}>End Time:</Text>
                                    <DateTimePicker
                                        value={date}
                                        mode={'datetime'}
                                        display={'default'}
                                        is24Hour={true}
                                        isDarkModeEnabled={false}
                                        minimumDate={new Date(Date.now())}
                                        maximumDate={new Date(2022, 9, 20)}
                                        onChange={(event, value) => setDate(value)}
                                        style={styles.datePicker}
                                        />
                                </View>
                                <View style={styles.item_wrap}>
                                    <Text style={styles.left_txt}>Total Time:</Text>
                                    <Text style={styles.right_txt}>3d 12h 30min</Text>
                                </View>
                                <View style={styles.item_wrap}>
                                    <Text style={styles.left_txt}>Price:</Text>
                                    <Text style={styles.right_txt}>$9.99</Text>
                                </View>
                                <View style={styles.btns_wrap}>
                                    <TouchableOpacity>
                                        <Image style={styles.pay_image} source={Paypal}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={styles.pay_image} source={ApplePay}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>}
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
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "#18252E",
    },
    wrapMain: {
        alignItems: 'center',
    },

    // No location styles
    wrap: {
        marginTop: '50%',
        alignItems: 'center',
    },
    no_location: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '200',
        textAlign: 'center',
        marginBottom: 80
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

    // Procedure styles
    title: {
        color: '#fff',
        fontSize: 36,
        fontWeight: '200',
        textAlign: 'center',
        marginTop: 35,
        marginBottom: 25,
    },
    content_wrap: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: deviceWidth - 40,
    },
    item_wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 50,
    },
    left_txt: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '500',
        paddingRight: 20,
    },
    right_txt: {
        color: '#57737a',
        fontSize: 18,
        fontWeight: '500',
    },

    // DateTimePicker
    date_wrap: {
        flexDirection: 'row',
        height: 55,
    },
    pickedDateContainer: {
        padding: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    pickedDate: {
        fontSize: 18,
        color: 'black',
    },
    btnContainer: {
        padding: 20,
    },
    datePicker: {
        width: 200,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    
    // Payment
    btns_wrap: {
        marginTop: 20,
    },
    pay_image: {
        height: 55,
        width: deviceWidth - 40,
        borderRadius: 10,
        marginBottom: 10,
    },
});