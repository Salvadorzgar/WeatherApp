import { useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { City } from "../types";
import CityItem from "../components/CityItem";
import CitiesSearchBar from "../components/CitiesSearchBar";

export default function Home({ navigation }: any) {
    const [query, setQuery] = useState('');
    const [data, setData] = useState<City[]>([])
    
    const getCities = async () => {
        try {
        const response = await fetch(`https://search.reservamos.mx/api/v2/places?q=${query}`);
        const data = await response.json();
        setData(data);
        setQuery('');
        Keyboard.dismiss();
        } catch (error) {
        }
    }

    function handleNavigate(city: City) {
        navigation.navigate('Forecast', { coords: { lat: city.lat, lon: city.long }, city: city.city_name });
    }
    
    return (
        <KeyboardAvoidingView
            style={styles.background}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.listContainer}>
                <CitiesSearchBar
                    placeholder="Buscar ciudad"
                    onChangeText={setQuery}
                    onPress={getCities}
                />
                {data.length === 0 ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Busca una ciudad</Text>
                    </View>
                    ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <CityItem city={item} onPress={() => handleNavigate(item)} />}
                        keyExtractor={(item, index) => `${item.id}-${index}`}
                        contentContainerStyle={{ rowGap: 4 }}
                    />
                    )
                }
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0f2f2',
        flex: 1,
    },
    listContainer: {
        flex: 15,
        paddingHorizontal: 4,
    }
})