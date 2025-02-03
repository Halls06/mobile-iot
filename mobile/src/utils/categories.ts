import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
    {id: "1", name: "Home", icon: "home"},
    {id: "2", name: "Localization", icon: "location-pin"},
    {id: "3", name: "Settings", icon: "settings"},
]