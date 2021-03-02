import React,{useState} from 'react';

const AddTransaction = () => {
  const [txtAdd,setTxtAdd] = useState("");
  const [addAmount,setAddAmount] = useState(0);

  return (
    <>
     <h3>Add Transaction</h3> 
     <form>
          <div className="form-control">
            <label htmlFor="txtAddTransaction">Text</label>
            <input value={txtAdd} onChange={(e)=>setTxtAdd(e.target.value)} type="text" id="txtAddTransaction" placeholder="Enter text..."/>
          </div>
          <div className="form-control">
            <label htmlFor="addTransactionAmount">Amount<br/>
            {/* some calculations here  */}
            </label>
            <input value={addAmount} onChange={(e)=>setAddAmount(e.target.value)} type="number" id="addTransactionAmount" placeholder="Enter amount..."/>
          </div>
     </form>
    </>
  )
}

export default AddTransaction
