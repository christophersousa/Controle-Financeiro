import {View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import { HeaderTitle } from '../../components/HearderTitle'
import { RouterPropsDebtors } from '../../routes/models'
import {Ionicons} from "@expo/vector-icons"
import api from '../../services/api'
import { AccountsInterface } from '../../interface/DebtorsInterface'
import { CardAccount } from '../../components/CardAccount'
import { BottomAdd } from '../../components/BottomAdd'

export function Debtors(){
    const route = useRoute<RouteProp<RouterPropsDebtors, 'Detail'>>()
    const [accounts, setAccounts] = useState<AccountsInterface>()
    const navegation = useNavigation()

    async function getAccounts(id:number) {
        const result = await api.getDebtor(id)
        setAccounts(result)
    }

    function valueMonth(){
        return accounts?.contas.reduce((acc, account) => acc + account.valor_parcela,0)
    }

    function valueTotal(){
        return accounts?.contas.reduce((acc, account) => acc + account.valor,0)
    }

    function handleAdd(){
        console.log("Clicou")
    }

    useLayoutEffect(()=>{
        navegation.setOptions({
            headerTitle: ()=>(<HeaderTitle name={route.params?.name ? route.params?.name: "Usuário não encontrado"}/>)
        })
        getAccounts(route.params?.id)
    },[route.params?.name, route.params?.id])

    return(
        <SafeAreaView style={styles.container}>

            <BottomAdd
                icon='add'
                handleBottom={handleAdd}
            />

            <View style={styles.containerCard}>

                <View style={styles.cardMensal}>
                    <Text style={styles.textCard}>Mensal</Text>
                    <Text style={styles.valueCard}>{Number(valueMonth()).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
                </View>
                <View style={styles.cardMensal}>

                    <Text style={styles.textCard}>Total</Text>
                    <Text style={styles.valueCard}>{Number(valueTotal()).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
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
                {accounts?.contas.map((account, index) => (
                    <CardAccount
                        key={index}
                        valor={account.valor}
                        valor_parcela={account.valor_parcela}
                        parcelas={account.parcelas}
                        parcelas_pagas={account.parcelas_pagas}
                        name={account.name}
                        banco={account.banco}
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