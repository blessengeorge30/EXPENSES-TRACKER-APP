import axios from "axios";

const BACKEND_URL = 'https://react-native-course-a9b2c-default-rtdb.firebaseio.com/'

export function storeExpense(expenseData){
    axios.post(BACKEND_URL + 'expences.json', expenseData );
    
}

export async function fetchExpences() {
   const response = axios.get( BACKEND_URL + 'expences.json' );

   const expences = [];


   for (const key in response.data) {
    const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.date[key].date),
        description: response.data[key].description
    };
    expences.push(expenseObj);
   }

   return expences;

}