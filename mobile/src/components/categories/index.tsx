import { FlatList } from "react-native";


import { categories } from "@/utils/categories";
import { Category } from "../category";
import { s } from "./styles";


type Props = {
    selected: string
    onChange: (category: string) => void
}

export function Categories({ selected, onChange }: Props){

    return (
        <FlatList 
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({item}) =>
        <Category  
          name={item.name}
          Icon={item.icon}
          isSelected={item.name === selected}
           onPress={() => onChange(item.name)}
          />} 
          horizontal style={s.container}
          contentContainerStyle={s.content}
          showsHorizontalScrollIndicator={false}
          />
    )

}