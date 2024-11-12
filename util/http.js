import axios from "axios";

const BACKEND_URL = 'https://react-native-course-a9b2c-default-rtdb.firebaseio.com/';

export async function storeExpence(expenceData) {
    const response = await axios.post(BACKEND_URL + 'expences.json', expenceData);
    const id = response.data.name;
    return id;
}

export async function fetchExpences() {
    const response = await axios.get(BACKEND_URL + 'expences.json');
    const expences = [];

    
    
    
    for (const key in response.data) {
        console.log('RESPONSE', response.data[key]);
        const expenceObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date), 
            description: response.data[key].description
        };
        expences.push(expenceObj);
    }

    return expences;
}

export async function updateExpence(id, expenceData) {
  
    
    try {

        
        
        await axios.put(`${BACKEND_URL}/expences/${id}.json`, expenceData);
        console.log("Expense updated successfully.");
    } catch (error) {
        console.error("Error updating expense:", error);
    }
}

export async function deleteExpence(id) {
    try {
        await axios.delete(`${BACKEND_URL}/expences/${id}.json`);
        console.log("Expense deleted successfully.");
    } catch (error) {
        console.error("Error deleting expense:", error);
    }
}
