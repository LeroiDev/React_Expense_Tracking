import React from 'react';

const Transaction = ({transaction}) => {

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li key={transaction.id} className={sign === "-" ? "minus" : "plus"}>{transaction.text}<span>{sign}R{Math.abs(transaction.amount)}</span>
     <button className="delete-btn">X</button>
    </li>
  )
}

export default Transaction
