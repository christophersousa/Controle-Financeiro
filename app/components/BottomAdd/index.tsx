import { Pressable, Text, StyleSheet } from "react-native";
import {Ionicons } from "@expo/vector-icons"

interface PropsBottom {
    icon: String;
    handleBottom: ()=>void
}

export function BottomAdd({icon, handleBottom}:PropsBottom){

    function setIcon(icon:String){
        switch (icon) {
            case 'person-add':
                return  <Ionicons name='person-add' size={22} color="#fff" />
                break;

            default:
                return  <Ionicons name='add' size={24} color="#fff" />
                break;
        }
    }

    return(
        <Pressable style={styles.container} onPress={handleBottom}>
            {setIcon(icon)}
            <Text style={styles.text}>Adicionar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        bottom: 20,
        right: 14,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: "#A665B1",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 99,
        gap: 5
    },
    text:{
        color: "#fff",
        fontWeight: "500",
        fontSize: 16
    }
})

