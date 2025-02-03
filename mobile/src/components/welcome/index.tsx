import { View, Text, Image } from "react-native";
import { s } from "./styles";

export function Welcome(){
    return (
        <View>
            <Image source={require("@/assets/logo.png")} style={s.logo}/>
            <Text style={s.title}> Bem-Vindos Ao Nearby</Text>
            <Text style={s.subtitle}>Monitore sua casa de qualquer lugar</Text>
        </View>
    )
}