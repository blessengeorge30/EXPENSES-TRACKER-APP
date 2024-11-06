import { Text,View, FlatList, StyleSheet } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";
import { GlobalStyles } from "../../constants/styles";



function ExpencesOutput({ expences, expencesPeriod}) {
    return (
        <View style={styles.container}>
          <ExpencesSummary expences={DUMMY_EXPENCES} periodName={expencesPeriod} />
          <ExpencesList expences={DUMMY_EXPENCES} />
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