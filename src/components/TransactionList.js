import React from 'react'

const TransactionList = () => {
  return (
    <>
     <h3>History</h3> 
     <ul id="list" className="list">
       <li className="minus">
         Cash <span>-R400</span><button className="delete-btn">X</button>
       </li>
     </ul>
    </>
  )
}

export default TransactionList