import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons, Entypo } from '@expo/vector-icons'
import { Home } from '../page/Home'
import {Finances} from '../page/Finances'
import { StackRoutes } from './stackRoutes'



const Tab = createBottomTabNavigator()
export function Router() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,

                tabBarStyle:{
                    backgroundColor: "#676767",
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({color, size, focused}) =>{
                        if(focused) return <Ionicons name='home' color="#fff" size={size} />
                        return <Ionicons name='home' color="#D9D9D9" size={size} />
                    }
                }}
                />
            <Tab.Screen
                name="FinanceTab"
                component={Finances}
                options={{
                    tabBarIcon: ({color, size, focused}) =>{
                        if(focused) return <Entypo name="calendar" size={size} color="#fff" />
                        return <Entypo name="calendar" size={size} color="#D9D9D9" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}