import {View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import { HeaderTitle } from '../../components/HearderTitle'
import { RouterPropsDebtors } from '../../routes/models'
import {Ionicons} from "@expo/vector-icons"
import api from '../../services/api'
import { AccountsInterface } from '../../interface/DebtorsInterface'
import { CardAccount } from '../../components/CardAccount'

export function Debtors(){
    const route = useRoute<RouteProp<RouterPropsDebtors, 'Detail'>>()
    const [accounts, setAccounts] = useState<AccountsInterface>()
    const navegation = useNavigation()

    async function getAccounts(id:number) {
        const result = await api.get("/compras_devedores", {
            params: {
                id: id
            }
        })
        setAccounts(result.data[0])
    }

    useLayoutEffect(()=>{
        navegation.setOptions({
            headerTitle: ()=>(<HeaderTitle name={route.params?.name ? route.params?.name: "Usuário não encontrado"}/>)
        })
        getAccounts(route.params?.id)
    },[route.params?.name, route.params?.id])
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerCard}>

                <View style={styles.cardMensal}>
                    <Text style={styles.textCard}>Mensal</Text>
                    <Text style={styles.valueCard}>R$1.800,00</Text>
                </View>
                <View style={styles.cardMensal}>

                    <Text style={styles.textCard}>Total</Text>
                    <Text style={styles.valueCard}>R$5.000,00</Text>
                </View>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Procure por uma conta"
                />
                <TouchableOpacity onPress={()=>console.log("Procure")}>
                    <Ionicons name="search" size={28} color="#A665B1"/>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {accounts?.contas.map((account) => (
                    <CardAccount
                        valor={account.valor}
                        parcela={account.parcela}
                        parcelas={account.parcelas}
                        name={account.name}
                        bancos={account.bancos}
                        id={account.id}
                    />))}
            </ScrollView>
        </SafeAreaView>
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
    containerCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardMensal:{
        backgroundColor: "#676767",
        paddingVertical: 18,
        paddingHorizontal: 45,
        justifyContent: 'center',
        borderRadius: 8,
        gap: 5

    },
    textCard:{
        color: "#fff",
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    valueCard:{
        color: "#fff",
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    form:{
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: '#D9D9D9',
        marginBottom: 14,
        marginTop: 14,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input:{
        width: '90%',
        maxWidth: '90%',
    },
})