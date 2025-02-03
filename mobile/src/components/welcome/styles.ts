import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        margin: 20,
        marginTop: 62,
        marginBottom: 28,
    },
    title: {
        marginHorizontal: 20,
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[100]
    },
    subtitle: {
        fontSize: 16,
        marginHorizontal: 28,
        fontFamily: fontFamily.regular,
        color: colors.gray[300],
        marginTop: 12,
    }
})