import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

import Toast from 'react-native-toast-message';
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/models";
import { TextInputMask } from 'react-native-masked-text';

interface NewDebtorsPropsForm{
    name: string;
    contato: string;
    total_contas: number;
}

export function NewDebtors(){
    const { control, handleSubmit, formState: { errors } } = useForm<NewDebtorsPropsForm>();
    const navigation = useNavigation<PropsStack>()

    const onSubmit = (data:NewDebtorsPropsForm) => {
        addDebtors(data)
        setTimeout(() => {
            showToastSucess(data?.name);
        }, 5000);
        navigation.navigate('Home')
    }

    async function addDebtors(data:NewDebtorsPropsForm){
        try {
            data.total_contas = 12
            const res = await api.post('devedores', data)
            console.log(res.data)
            return res.data
          } catch (e) {
            alert(e)
          }
    }

    const showToastErrors = (text1:string, text2:string) => {
        Toast.show({
          type: 'error',
          text1: text1,
          text2: text2,
          visibilityTime: 2000,
          autoHide: true,
        });
      }

      const showToastSucess = (name: string) => {
        Toast.show({
          type: 'success',
          text1: name,
          text2: "Cadastrado com sucesso",
          visibilityTime: 2000,
          autoHide: true,
        });
      }

      const maskTelefone = (value: string) =>{
        let v = value.replace(/\D/g,'').slice(0, 11);
       if (v.length > 7) {
          return `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
        }
        else if (v.length >= 3) {
            return `(${v.slice(0,2)}) ${v.slice(2)}`;
        }
        return v
    }



    useEffect(() => {
        if(errors?.name || errors?.contato){
            const [text1, text2] = errors?.name?
                                    (["Nome", "Nome é obrigatorio"])
                                    : (["Contato", errors?.contato?.message || "Contato obrigatório"] )
            showToastErrors(text1, text2);
        }

    },[errors?.name || errors?.contato])
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Cadastre um novo devedor</Text>
            <Toast/>

            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (

                    <View style={[styles.containerView,styles.form]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    </View>
                )}
                name="name"
            />

            <Controller
                control={control}
                rules={{
                required: true,
                pattern: {
                    value: /^\(\d{2}\) \d{5}-\d{4}$/,
                    message: 'Por favor cadastre um número valido',
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (

                    <View style={[styles.containerView,styles.form]}>
                        <TextInputMask
                            type={'custom'}
                            options={{
                                mask: '(99) 99999-9999',
                            }}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder="(XX) XXXXX-XXXX"
                            keyboardType="phone-pad"
                            />
                    </View>
                )}
                name="contato"
            />

            <Pressable
                style={[styles.containerView,styles.button]}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.textButton} >Cadastrar</Text>
            </Pressable>

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
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: '500',
        marginBottom: 14
    },
    containerView:{
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginBottom: 14,
        marginTop: 14,
        borderRadius: 8,
        width: "100%"
    },
    form:{
        backgroundColor: '#D9D9D9',
    },
    input:{
        width: '90%',
        maxWidth: '90%',
    },
    button:{
        backgroundColor: '#A665B1',
        alignItems: 'center',
    },
    textButton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
})