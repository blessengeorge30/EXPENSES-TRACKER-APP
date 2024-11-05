import { Text,View, FlatList } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";

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
        id: 'e3',
        description: 'A book',
        amount: 5.99,
        date: new Date ('2022-02-21')
    },
    {
        id: 'e3',
        description: 'Another book',
        amount: 18.99,
        date: new Date ('2022-02-18')
    },
]

function ExpencesOutput({ expences, expencesPeriod}) {
    return (
        <View>
          <ExpencesSummary expences={expences} periodName={expencesPeriod}/>
          <ExpencesList/>
        </View>
    )
   
}

export default ExpencesOutput;