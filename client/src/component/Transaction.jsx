import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import dummyData from "../Utils/dummyData"
import { shortenAddress } from "../Utils/shortenAddress";

export const TransactionCard = ({addressTo, addressFrom, timestamp,message,amount,url,keyword})=>
{
  return(
    <div className="bg-[#181918] m-4 flex flex-1
    2xl:min-w-[450px]
    2xl:max-w-[500px]
    sm:min-w-[270px]
    sm:max-w-[300px]
    flex-xol p-3 rounded-md hover:shadow-2xl
    ">
      <div className="flex flex-col items-center w-full mt-3">
        <div className="flex justify-center w-full mb-6 p-2">
          <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="blank" rel="noopener noreferrer">
            <p className="text-white">From:{shortenAddress(addressFrom)}</p>
          </a>
        </div>
      </div>
    </div>
  )
  
}
  

const Transactions =()=>
{
  
  const {transactions,currentAccount}=useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex felx-col md:p-12 py-12 px-4 "> 
      {currentAccount ?
      (
        <h3 className="text-white text-3xl text-center my-2">Latest Transaction</h3>
      ):( <h3 className="text-white text-3xl text-center my-2">Connect wallet to see transactions Transaction</h3>)};
      <div className="flex flex-wrap justify-center items-center mt-10">
        {[dummyData].reverse().map((transactions,i)=>
        {
          <TransactionCard key={i} {...transactions}/>
        })}
      </div>
      </div>
    </div>
  );
};

export default Transactions;