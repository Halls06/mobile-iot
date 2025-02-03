import { View, Text } from "react-native";


import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";

export default function Index(){
    return (
        <View >
            <Welcome />
            <Steps />
        </View>
    )
}