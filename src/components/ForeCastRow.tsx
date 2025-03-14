import { FlatList, StyleSheet, Text, View } from "react-native"
import { ForecastList } from "../types"
import ForeCastRowItem from "./ForeCastRowItem"

const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

type IProps = {
    item: [string, ForecastList];
    index: number;
}

export default function ForeCastRow({ item, index }: IProps) {
    return (
        <View testID={`forecast-row-${index}`} style={styles.container}>
            <Text>{DAYS[new Date(item[0]).getDay()]}</Text>
            <FlatList
                horizontal
                data={item[1]}
                renderItem={({ item }) => <ForeCastRowItem item={item} />}
                keyExtractor={(item, index) => `${item.dt}-${index}`}
                contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%'
    }
})