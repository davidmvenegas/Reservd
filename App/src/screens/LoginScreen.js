import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title_wrap}>
                <Text style={styles.title_text}>Login</Text>
            </View>
            <View style={styles.total_input_wrap}>
                <View style={styles.input_wrap}>
                    <Text style={styles.input_text}>Email Address*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='john@example.com'
                        placeholderTextColor={'#999'}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.middle}></View>
                <View style={styles.input_wrap}>
                    <Text style={styles.input_text}>Password*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='••••••••••••'
                        secureTextEntry={true}
                        placeholderTextColor={'#999'}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
            </View>
            <View style={styles.btn_wrap}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.btn_text}> Login </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.account_wrap}>
                <Text style={styles.account_text}>
                    Don't have an account? <Text style={styles.account_underline} onPress={() => navigation.navigate('RegisterScreen')}>Register</Text> 
                </Text>
            </View>
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: "#18252E",
    },
    title_wrap: {
        flex: 1.2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    title_text: {
        color: 'white',
        fontSize: 50,
        fontWeight: '700',
    },
    total_input_wrap: {
        flex: 1.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middle: {
        height: 25,
    },
    input_wrap: {
        width: 300,
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 10,
    },
    input_text: {
        color: '#DDD',
        fontSize: 18,
        paddingBottom: 10,
    },
    input: {
        color: '#11acba',
        fontSize: 16,
        width: 300,
        height: 58,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 15,
        borderColor: '#353e4f',
        borderWidth: 2,
        borderRadius: 6,
    },
    btn_wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    account_wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    account_text: {
        color: 'white',
        fontSize: 17,
    },
    account_underline: {
        textDecorationLine: 'underline',
    },
});