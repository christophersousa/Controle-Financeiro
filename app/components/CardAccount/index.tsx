import { Pressable, View, Image, Text, StyleSheet } from "react-native";
import { AccountInterface } from "../../interface/DebtorsInterface";

export function CardAccount({name, valor, parcela, parcelas}:AccountInterface){

    function handleDebtors(){
        console.log("Teste")
    }

    return (
        <Pressable style={styles.container} onPress={handleDebtors}>
            <Image
                style={styles.img}
                source={require('../../../assets/user-img.png')}
            />
            <View >
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.total}>{parcelas}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#676767",
        paddingHorizontal: 24,
        paddingVertical: 12,
        marginBottom: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        borderRadius: 8

    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 1/2
    },
    name:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "600"
    },
    total:{
        color: "#D9D9D9"
    },
})