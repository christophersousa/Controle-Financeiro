import { View,Text, StyleSheet } from "react-native";

export function Logo(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Finanças</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 45,
        backgroundColor: "#A665B1",
        marginBottom: 14,
        marginTop: 34,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 8,


    },
    text:{
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
    }
})