import {useFonts, Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold} from "@expo-google-fonts/oswald"


import { Loading } from "@/components/loading"
import { Stack } from "expo-router"
import { colors } from "@/styles/colors"

export default function Layout(){
    const [isLoaded] = useFonts({
        Oswald_400Regular,
        Oswald_500Medium,
        Oswald_600SemiBold,
        Oswald_700Bold,
    })

    if (!isLoaded) {
        return <Loading />
    }
    return <Stack screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.gray[700]}
    }} />
}