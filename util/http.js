import axios from "axios";

const BACKEND_URL = 'https://react-native-course-a9b2c-default-rtdb.firebaseio.com/'

export async function storeExpence(expenceData){
  const response =  await axios.post(BACKEND_URL + 'expences.json', expenceData );
  const id = response.data.name;
    return id;

}

export async function fetchExpences() {
   const response = axios.get( BACKEND_URL + 'expences.json' );

   const expences = [];


   for (const key in response.data) {
    const expenceObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.date[key].date),
        description: response.data[key].description
    };
    expences.push(expenceObj);
   }

   return expences;

}

export async function updateExpence(id, expenceData) {
  return  axios.put(BACKEND_URL + `/expences/${id}.json` , expenceData)
}

export async function deleteExpence(id) {
    return axios.delete(BACKEND_URL +`/expences/${id}.json` )
}
