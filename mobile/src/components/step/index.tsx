import { Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import { s } from "./styles";
import { colors } from "@/styles/colors";


type Props = {
    title: string
    description: string
    icon: keyof typeof MaterialCommunityIcons.glyphMap
}

export function Step({title, icon, description}: Props){
    return (
        <View style={s.container}>
            {<MaterialCommunityIcons name={icon} size={32} color={colors.green[100]} />}
            <View style={s.datails}>
            <Text style={s.title}>{title}</Text>
            <Text style={s.description}>{description}</Text>
            </View>
        </View>
    )
}