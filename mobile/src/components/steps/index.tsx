import { View } from "react-native"
import { Step } from "@/components/step"

import { s } from "./styles"

export function Steps(){
    return (
        <View style={s.container}>
            <Step 
            icon="binoculars"
            title="Monitoramento"
            description="Monitore seus dispositivos diretamente do seu dispositivo movel"
            />

            <Step
            icon="wifi"
            title="Conecte-se a Internet"
            description="Conecte-se com seu dispositivos IOT e cotrole sua casa"
            />
        </View>        
    )
}