import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 52,
        width: "100%",
        backgroundColor: colors.green[100],
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: colors.gray[100],
        fontFamily: fontFamily.regular,
        fontSize: 16,
    }
})