import React,{createContext, useReducer} from 'react';
//note useReducer seperate file AppReducer
import AppReducer from './AppReducer';

//Initial State - initially add dummy transactions 
const initialState = {
  transactions: [
      {
        id: 1,
        text: 'Energy drink',
        amount: -20
      },
      {
        id:2,
        text:'Salary',
        amount: 1000,
      },
      {
        id:3,
        text: 'book',
        amount: 300
      },
      {
        id:4,
        text: 'food',
        amount: -20
      }
  ]
}

//Create context
export const GlobalContext = createContext(initialState);
//provider component for other components to get access to state must be wrapped
//in the provider - note wrapping other componets become children of provider
//hence desctucture 
export const GlobalProvider = ({children}) =>{
//need this dispatch in order to use a reducer action - note seperate file
//passing value prop as below will give access in other componenets note syntax 
  const [state,dispatch] = useReducer(AppReducer,initialState);
  return (<GlobalContext.Provider value={{transactions: state.transactions}}>
      {children}
  </GlobalContext.Provider>);
//note again whatever we wrap children
}