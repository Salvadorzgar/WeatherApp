import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import ForeCastRow from "./ForeCastRow";
import useForecast from "../hooks/useForecast";
import { format } from "../utils";

type IProps = {
    lat: string;
    lon: string;
}

export default function ForeCastList({ lat, lon }: IProps) {
    const [data, loading] = useForecast({ lat, lon });
    
    if (loading) {
        return <View><ActivityIndicator  /></View>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Object.entries(format(data))}
                renderItem={({ item }) => <ForeCastRow item={item} /> }
                contentContainerStyle={{ rowGap: 4 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%'
    }
})