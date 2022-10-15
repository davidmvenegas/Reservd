import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, InputAccessoryView, TouchableOpacity } from 'react-native';

export default function LoginScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title_text}>Reservd</Text>
            <InputAccessoryView
                style={styles.input}
                placeholder='Enter username'
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <InputAccessoryView
                style={styles.input}
                placeholder='Enter password'
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.btn} onPress={() => console.log('hi')}>
                <Text style={styles.btn_text}> Log In </Text>
            </TouchableOpacity>
        </SafeAreaView>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 50,
    },
    title_text: {
        fontSize: 40,
        fontWeight: '900',
        marginBottom: 55,
    },
    input: {
        backgroundColor: '#555',
    },
    btn: {
        backgroundColor: '#086972',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    btn_text: {
        fontSize: 23,
        color: '#fff',
    },
});