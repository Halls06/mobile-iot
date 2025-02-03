import { Pressable, PressableProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


import { colors } from "@/styles/colors";
import { s } from "./styles";


type  Props = PressableProps & {
    name: string
    isSelected: boolean
    Icon: keyof typeof MaterialIcons.glyphMap
}

export function Category({name, Icon, isSelected,...rest}: Props){
    const color = isSelected ? colors.green[200] : colors.gray[400]
    return (
        <Pressable style={s.container} {...rest}>
            <MaterialIcons name={Icon} size={16} color={color} />
            <Text style={s.name}>{name}</Text>
        </Pressable>
    )
}