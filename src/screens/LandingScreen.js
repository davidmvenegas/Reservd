import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/countAction';
import CardboardBox from '../assets/cardboard_box.png'
import Arrow from '../assets/arrow.png'
import Lock from '../assets/lock.png'

export default function LandingScreen() {
    const dispatch = useDispatch();
    const count = useSelector((store) => store.count.count);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title_wrap}>
                <Text style={styles.title_text}>Reservd <Text style={styles.title_period}>.</Text></Text>
            </View>
            <View style={styles.image_wrap}>
                <Image style={styles.box_image} source={CardboardBox}/>
                <Image style={styles.arrow_image} source={Arrow}/>
                <Image style={styles.lock_image} source={Lock}/>
            </View>
            <View style={styles.description_wrap}>
                <Text style={styles.description_text_1}>Contactless Pickup.</Text>
                <Text style={styles.description_text_2}>Faster for them, Smarter for you.</Text>
            </View>

            <View style={styles.btn_wrap}>
                <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
                    <Text style={styles.btn_text}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleDecrement}
                    style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
                    <Text style={styles.btn_text}> Register </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        background: 'linear-gradient(to bottom, #282828 0 %, #111 80 % )',
        // backgroundColor: '#18252E',
    },
    title_wrap: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_text: {
        color: 'white',
        fontSize: 55,
        fontWeight: '800',
    },
    title_period: {
        color: '#01BA84',
        fontSize: 65,
    },
    image_wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    box_image: {
        width: 80,
        height: 80,
    },
    arrow_image: {
        width: 75,
        height: 35,
        marginLeft: 25,
        marginRight: 25,
    },
    lock_image: {
        width: 70,
        height: 105,
    },
    description_wrap: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description_text_1: {
        color: 'white',
        fontSize: 26,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: '35',
    },
    description_text_2: {
        color: 'white',
        fontSize: 23,
        fontWeight: '200',
        textAlign: 'center',
        lineHeight: '33',
    },
    btn_wrap: {
        flex: 1.8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    btn: {
        width: 200,
        backgroundColor: '#086972',
        padding: 20,
        paddingLeft: 15,
        margin: 10,
        borderRadius: 8,
    },
    btn_text: {
        fontSize: 23,
        fontWeight: '500',
        color: '#fff',
        border: '1px solid #fff',
        textAlign: 'center',
    },
});