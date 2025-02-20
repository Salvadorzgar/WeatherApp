import { Image, StyleSheet, Text, View } from "react-native";
import { Weather } from "../types";

export default function ForeCastRowItem({ item } : { item: Weather & { dt_txt: string; }}) {
    return (
        <View style={styles.container}>
            <Text>{`${item.main.temp_max.toFixed(0)}°`}</Text>
            <Image src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} width={25} height={25} />
            <Text>{`${item.main.temp.toFixed(0)}°`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})