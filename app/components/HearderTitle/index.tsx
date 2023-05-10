import { View, Image, StyleSheet, Text } from "react-native";

interface HeaderTitleProps{
    name: string;
}

export function HeaderTitle({name}:HeaderTitleProps){
    return(
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('../../../assets/user-img.png')}
            />
            <View >
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: "row",
        alignItems: "center",
        gap: 14,

    },
    img:{
        width: 30,
        height: 30,
        borderRadius: 1/2
    },
    name:{
        color: "#fff",
        fontSize: 14,
        fontWeight: "600"
    },
})