import { View, FlatList, Text } from "react-native";
import ExpenceItems from "../ExpenceItem";

function renderExpenceItem(itemData) {
    console.log(itemData);
    
    return (
        <ExpenceItems   {...itemData.item}/>
    );
}

function ExpencesList({ expences }) {
    return (
        <FlatList
            data={expences}
            renderItem={renderExpenceItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default ExpencesList;
