import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import SearchIcon from "./SearchIcon";

type IProps = {
    onChangeText: (text: string) => void;
    onPress: () => void;
    placeholder: string;
}

export default function CitiesSearchBar({ placeholder, onChangeText, onPress }: IProps) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor="#CDCDCD"
            />
            <Pressable style={styles.button} onPress={onPress}>
                <SearchIcon color="white" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        columnGap: 12,
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
        marginBottom: 6,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        height: '100%',
        color: 'black',
    },
    button: {
        backgroundColor: '#333',
        borderRadius: 99,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusText: {
        color: 'white'
    }
});
