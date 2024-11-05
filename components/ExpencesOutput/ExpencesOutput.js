import { Text,View, FlatList, StyleSheet } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENCES =[
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date ('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date ('2022-01-29')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date ('2021-05-09')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 5.99,
        date: new Date ('2022-02-21')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.99,
        date: new Date ('2022-02-18')
    },
]

function ExpencesOutput({ expences, expencesPeriod}) {
    return (
        <View style={styles.container}>
          <ExpencesSummary expences={DUMMY_EXPENCES} periodName={expencesPeriod}/>
          <ExpencesList expences={DUMMY_EXPENCES}/>
        </View>
    )
   
}

export default ExpencesOutput;


const styles= StyleSheet.create({
    container:{
        flex: 1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})