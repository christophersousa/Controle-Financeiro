import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { AccountsInterface, DebtorsInterface } from "../../interface/DebtorsInterface"
import {useNavigation} from '@react-navigation/native'
import { PropsStack } from "../../routes/models"
import { useEffect, useState } from "react"
import api from "../../services/api"



export function CardDebtors({name, contato, id}:DebtorsInterface){
    const [accounts, setAccounts] = useState<AccountsInterface>()
    const navigation = useNavigation<PropsStack>()

    function handleDebtors(){
        navigation.navigate("Debtors", {name:name, id: id})
    }

    async function getAccounts() {
        const result = await api.getDebtor(id)
        setAccounts(result)
    }

    useEffect(()=>{
        getAccounts()
    },[])


    return(
        <Pressable style={styles.container} onPress={handleDebtors}>
            <Image
                style={styles.img}
                source={require('../../../assets/user-img.png')}
            />
            <View >
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.total}>Total de contas ({accounts?.contas.length})</Text>
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