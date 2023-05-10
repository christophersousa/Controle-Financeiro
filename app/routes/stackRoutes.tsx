import {View, Text} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../page/Home"
import { Debtors } from "../page/Debtors"
import { HeaderTitle } from '../components/HearderTitle'
import { NewDebtors } from '../page/NewDebtors'
import { RouterStackParamList } from './models'

const Stack = createNativeStackNavigator<RouterStackParamList>()
export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Debtors"
                component={Debtors}
                initialParams={{ name: '' }}
                options={{
                    headerStyle:{
                        backgroundColor: '#676767',
                    },
                    headerTitleStyle:{
                        color: '#fff'
                    },
                    headerTintColor: '#fff',
                    headerTitle: ()=>(<Text>Debtors</Text>)
                }}
            />
            <Stack.Screen
                name="NewDebtors"
                component={NewDebtors}
                options={{
                    title: "Adicionar novo devedor",
                    headerStyle:{
                        backgroundColor: '#676767',
                    },
                    headerTitleStyle:{
                        color: '#fff'
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    )
}

