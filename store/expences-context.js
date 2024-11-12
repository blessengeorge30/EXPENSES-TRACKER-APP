import { createContext, useReducer } from "react";



export const ExpencesContext = createContext({
    expences: [],
    addExpence: ({ description, amount, date }) => { },
    setexpences:(expences) =>{},
    deleteExpence: (id) => { },
    updateExpence: (id, { description, amount, date }) => { },

});

function expencesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state]
        
        case 'SET':
          const inverted = action.payload.reverse();
          return inverted;

        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
              );
              const updatableExpense = state[updatableExpenseIndex];
              const updatedItem = { ...updatableExpense, ...action.payload.data };
              const updatedExpenses = [...state];
              updatedExpenses[updatableExpenseIndex] = updatedItem;
              return updatedExpenses;
            
        case 'DELETE':
            return state.filter((expence) => expence.id !== action.payload)
        default:
            return state;
    }
}

function ExpencesContextProvider({ children }) {
    const [expencesState, dispatch] = useReducer(expencesReducer, []);

    function addExpence(expenceData) {
        dispatch({ type: 'ADD', payload: expenceData });
    }

    function setExpences(expences) {
        dispatch({type: 'SET' , payload: expences});
    }
    
    function deleteExpence(id){
        dispatch({type: 'DELETE' , payload: id});
    }

    function updateExpence(id, expenceData) {
        dispatch({type: 'UPDATE' , payload: {id: id , data: expenceData}})
    }

    const value ={
        expences: expencesState,
        addExpence: addExpence,
        setExpences: setExpences,
        deleteExpence: deleteExpence,
        updateExpence: updateExpence
    }

    return <ExpencesContext.Provider value={value}>{children}</ExpencesContext.Provider>
}

export default ExpencesContextProvider;