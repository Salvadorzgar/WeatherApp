import { Pressable, StyleSheet, Text, View } from "react-native";

import CurrentWeather from "../components/CurrentWeather";
import ForeCastList from "../components/ForeCast";

export default function Forecast({ navigation, route }: any) {
    const { coords, city } = route.params;
    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>{'<'}</Text>
            </Pressable>

            <CurrentWeather lat={coords.lat} lon={coords.lon} city={city} />

            <ForeCastList lat={coords.lat} lon={coords.lon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingTop: 6,
        rowGap: 12,
    },
    backButton: {
        width: 35,
        height: 35,
        borderRadius: 50,
        // backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 'auto',
    },
    backButtonText: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
