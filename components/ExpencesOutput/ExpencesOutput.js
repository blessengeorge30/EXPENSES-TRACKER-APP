import { Text,View, FlatList, StyleSheet } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";
import { GlobalStyles } from "../../constants/styles";



function ExpencesOutput({ expences, expencesPeriod, fallbackText}) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (expences.length > 0){
        content = <ExpencesList expences={expences}/>
    }
    return (
        <View style={styles.container}>
          <ExpencesSummary expences={expences} periodName={expencesPeriod} />
          {content}
          {/* <ExpencesList expences={expences} /> */}
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
    },
    infoText:{
        color: 'white',
        fontSize: 16,
        textAlign:'center',
        marginTop: 22
 }
})