import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";


type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean
}

function Button({children, style, isLoading = false, ...rest}: ButtonProps){
    return (
        <TouchableOpacity 
        style={[s.container, style]}
        activeOpacity={0.8}
        disabled={isLoading}
         {...rest}>
        {isLoading ? <ActivityIndicator size={"small"} color={colors.gray[300]} /> : children}
        
            
        </TouchableOpacity>
        )
    }

function Title({children}: TextProps){
    return <Text style={s.title}>{children}</Text>
}

type IconProps = {
    icon: keyof typeof MaterialCommunityIcons.glyphMap
}

function Icon({icon}: IconProps){
    return <MaterialCommunityIcons name={icon} size={24} color={colors.gray[600]} />
    
}


Button.Title = Title
Button.Icon = Icon


export {Button}