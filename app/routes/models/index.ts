import {  NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types"

export type RouterStackParamList ={
    Home: undefined,
    NewDebtors: undefined,
    Debtors: {
        id: number,
        name: String,
    }
}

export type PropsStack= NativeStackNavigationProp<RouterStackParamList>

export type RouterPropsDebtors = {
    Detail:{
        id: number,
        name: string
    }
}