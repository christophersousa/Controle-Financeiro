import { View, Text, StyleSheet } from "react-native";

export function Finances(){
    return(
        <View style={styles.container}>
            <Text>Tla de finanças</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#555555',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 35,
    },
})