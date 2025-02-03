import { Image, Text, View } from "react-native";
import { s } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export default function Home(){
    return (
        <View style={s.container}>
            <View style={s.Header}>
                <Image source={require("@/assets/logo.png")} style={s.logo}></Image>
                <MaterialCommunityIcons name="menu" size={22} color={colors.gray[100]}/>
            </View>
        </View>
    )
}