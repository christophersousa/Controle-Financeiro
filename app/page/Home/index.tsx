import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { Logo } from "../../components/Logo";
import {Ionicons} from "@expo/vector-icons"
import { BottomAdd } from "../../components/BottomAdd";
import { useEffect, useState } from "react";
import { DebtorsInterface } from "../../interface/DebtorsInterface";
import api from "../../services/api";
import { CardDebtors } from "../../components/CardDebtors";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/models";


export function Home(){

    const navigation = useNavigation<PropsStack>()

    const [debtors, setDebtors] = useState<DebtorsInterface[]>([])

    useEffect(()=>{
        async function fetchApi() {
            const result = await api.get("/devedores")
            setDebtors(result.data)
        }
        fetchApi()
    },[])


    function handleSearch(){
        console.log("Clicou")
    }

    function handleAdd(){
        navigation.navigate('NewDebtors')
    }
    return(
        <SafeAreaView style={styles.container}>
            <BottomAdd
                icon='person-add'
                handleBottom={handleAdd}
            />
            <Logo/>
            <View>
                <Text style={[styles.text , styles.textWhite]}>Controle as suas finanças</Text>
                <Text style={[styles.text , styles.textGray]}>O melhor  para o seu bolço</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Procure por alguém"
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name="search" size={28} color="#A665B1"/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
                {debtors.map((d, index)=>{
                    return <CardDebtors key={index} id={d.id} name={d.name} contato={d.contato}/>
                })}
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
    text:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    textWhite:{
        color: '#fff',
    },
    textGray:{
        color: '#A5A5A5',
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
    body:{
        marginTop: 24
    }

})