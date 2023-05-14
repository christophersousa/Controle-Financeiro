import { Pressable, View, Image, Text, StyleSheet } from "react-native";
import { AccountInterface, AccountsInterface, DebtorsInterface } from "../../interface/DebtorsInterface";

import api from "../../services/api";
import { useEffect, useState } from "react";

export function CardAccount({name, id, parcelas, valor_parcela, banco, parcelas_pagas}:AccountInterface){


    function handleDebtors(){
        console.log("Teste")
    }

    function setImageBank(value:string){
        switch (value) {
            case "C6 Bank":
                return require('../../../assets/c6bank.png')
                break
            case "Nubank":
                return require('../../../assets/nubank.png')
                break
            case "Itau":
                return require('../../../assets/itau.png')
                break
            default:
                break;
        }
    }

    return (
        <Pressable style={styles.container} onPress={handleDebtors}>
            <Image
                style={styles.img}
                source={setImageBank(banco)}
            />
            <View >
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.total}>Parcelas {parcelas_pagas}/{parcelas}</Text>
            </View>
            <View style={styles.value}>
                <Text style={styles.name}>{Number(valor_parcela).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
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
        width: 50,
        height: 50,
        borderRadius: 50
    },
    name:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "600"
    },
    total:{
        fontSize: 12,
        color: "#D9D9D9"
    },
    value:{
        marginLeft: 'auto',
    }
})