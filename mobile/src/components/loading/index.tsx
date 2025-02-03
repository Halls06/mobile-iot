import { ActivityIndicator } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/colors";

export function Loading(){
    return <ActivityIndicator size={'small'} color={colors.green[100]} style={s.container} />
}