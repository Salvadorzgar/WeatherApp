import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import useWeather from "../hooks/useWeather";

type IProps = {
    lat: string;
    lon: string;
    city: string;
}

export default function CurrentWeather({ lat, lon, city }: IProps) {
    const [data, loading] = useWeather({lat, lon});

    return (
        <View style={styles.container}>
            {
                loading
                ? <ActivityIndicator size="large" color="black" />
                : (
                    <>
                        <Text style={styles.title}>{city}</Text>
                        <Text style={styles.day}>Hoy</Text>
                        <Image
                            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                            width={100}
                            height={100}
                        />
                        <View style={styles.tempcontainer}>
                            <Text style={styles.mintemp}>{`${data?.main.temp_min.toFixed(0)} °C`}</Text>
                            <Text style={styles.subtitle}>{`${data?.main.temp.toFixed(0)} °C`}</Text>
                            <Text style={styles.maxtemp}>{`${data?.main.temp_max.toFixed(0)} °C`}</Text>
                        </View>
                    </>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 25,
        fontWeight: '400',
    },
    day: {
        fontSize: 12,
        fontWeight: '400',
    },
    tempcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: 12,
    },
    mintemp: {
        fontSize: 16,
        fontWeight: '400',
        color: 'lightblue'
    },
    maxtemp: {
        fontSize: 16,
        fontWeight: '400',
        color: 'orange'
    }
})