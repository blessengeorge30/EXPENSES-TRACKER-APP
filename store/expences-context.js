import { createContext, useReducer } from "react";

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
    {
        id: 'e6',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date ('2021-05-09')
    },
    {
        id: 'e7',
        description: 'Macbook Air M4',
        amount: 2599.00,
        date: new Date ('2024-11-03')
    },
    {
        id: 'e8',
        description: ' Iphone 16 pro Max',
        amount: 1899.99,
        date: new Date ('2024-11-05')
    },
]

export const ExpencesContext = createContext({
    expences: [],
    addExpence: ({ description, amount, date }) => { },
    deleteExpence: (id) => { },
    updateExpence: (id, { description, amount, date }) => { },

});

function expencesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload,id: id }, ...state]
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;

        case 'UPDATE':
            const updateableExpenceIndex = state.findIndex((expence) => expence.id === action.payload.id);
            const updateableExpence = state[updateableExpenceIndex];
            const updatedItem = { ...updateableExpence , ...action.payload.data}
            const updatedExpences =[...state];
            updatedExpences[updateableExpenceIndex] = updatedItem;

            return updatedExpences;
            
        case 'DELETE':
            return state.filter((expence) => expence.id !== action.payload)
        default:
            return state;
    }
}

function ExpencesContextProvider({ children }) {
    const [expencesState, dispatch] = useReducer(expencesReducer, DUMMY_EXPENCES);

    function addExpence(expenceData) {
        dispatch({ type: 'ADD', payload: expenceData });
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
        deleteExpence: deleteExpence,
        updateExpence: updateExpence
    }

    return <ExpencesContext.Provider value={value}>{children}</ExpencesContext.Provider>
}

export default ExpencesContextProvider;