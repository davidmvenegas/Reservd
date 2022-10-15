import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title_wrap}>
                <Text style={styles.title_text}>Login</Text>
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
    },
    title_text: {
        color: 'white',
        fontSize: 50,
        fontWeight: '700',
    },
});