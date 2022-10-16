import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';

export default function UnlockScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Unlock</Text>
            </ScrollView>
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
});