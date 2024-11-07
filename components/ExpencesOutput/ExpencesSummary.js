import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpencesSummary({expences =[], periodName}){
    const expencesSum = expences.reduce((sum, expence) => {
        return sum + expence.amount
    }, 0);

    return(
     
            <View style={styles.container}>
                <Text style={styles.period}> {periodName}</Text>
                <Text style={styles.sum}>${expencesSum.toFixed(2)}</Text>
            </View>
    
    );
}
export default ExpencesSummary;

const styles =StyleSheet.create({
    container:{
        padding: 25,
        marginBottom:14,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',

    },
    period:{
        fontSize:16,
        color:GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    }

})
