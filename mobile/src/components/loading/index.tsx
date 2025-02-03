import { colors } from "@/styles/colors";
import { ActivityIndicator, View } from "react-native";
import { s } from "./styles";

export function Loading(){
    return (
        <View style={s.container}>
             <ActivityIndicator size={"small"} color={colors.green[100]} />
             <text>Carregando...</text>
        </View>
    )
}