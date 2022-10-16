import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import Header from '../components/HeaderComponent'
import Navigation from '../components/NavigationComponent'

export default function WalletScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView>
                <Text>WALLET</Text>
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