import React,{useContext} from 'react';
import Transaction from './Transaction';
import {GlobalContext} from '../context/GlobalState';

//context destructured and a sperate component created to loop over 
//transactions 

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);

  return (
    <>
     <h3>History</h3> 
     <ul id="list" className="list">
       {transactions.map(transaction =>(
          <Transaction transaction={transaction}/>
       ))}
     </ul>
    </>
  )
}

export default TransactionList
