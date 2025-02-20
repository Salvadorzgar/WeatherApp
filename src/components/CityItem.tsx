import { Pressable, StyleSheet, Text, View } from "react-native";
import { City } from "../types";

export default function CityItem({ city, onPress }: { city: City, onPress: () => void }) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{city.display}</Text>
            <Text style={styles.subtitle}>{city.city_name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
    },
})