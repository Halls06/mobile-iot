import { View, Text } from "react-native";


import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { Button } from "@/components/button";
import { router } from "expo-router";

export default function Index(){
    return (
        <View >
            <Welcome />
            <Steps />
            <Button onPress={() => router.navigate("/home")}>
                <Button.Title>Start</Button.Title>
            </Button>
        </View>
    )
}