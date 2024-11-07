import { Text,View, FlatList, StyleSheet } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";
import { GlobalStyles } from "../../constants/styles";



function ExpencesOutput({ expences, expencesPeriod}) {
    return (
        <View style={styles.container}>
          <ExpencesSummary expences={expences} periodName={expencesPeriod} />
          <ExpencesList expences={expences} />
        </View>
    )
   
}

export default ExpencesOutput;


const styles= StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:24,
        paddingTop:34,
        paddingbottom:0,
        
        
        backgroundColor: GlobalStyles.colors.primary700,
    }
})