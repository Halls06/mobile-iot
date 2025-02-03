import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container:{
        width: "100%",
        flexDirection: "row",
        gap: 24,
        paddingHorizontal: 10,
        marginBottom: 20,
        margin: 15,
    },

    datails:{
        flex: 1,
    },

    title:{
        fontSize: 16,
        fontFamily: fontFamily.semibold,
        color: colors.gray[200],
    },
    
    description:{
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.gray[400],
        marginTop: 8,
        marginHorizontal: 5,
    }
})