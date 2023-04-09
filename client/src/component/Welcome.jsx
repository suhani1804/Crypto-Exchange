import React ,{ useContext}from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";




const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );

const Welcome = () => {

  const { connectWallet , CurrentAccount , formData,  handleChange, sendTransaction} =useContext(TransactionContext)
  // console.log(connectWallet);

  const handlesubmit= (e) =>
  {
    const{ addressTo, amount, keyword, message} = formData;

    e.preventDefault();
    //usually when you submit a form the page reloads to prevent this you have to use this preventDefault function

    if(!addressTo|| !amount || !keyword || !message)
      return;
      sendTransaction();
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row  items-centre justify-center md:p-20 py-12 px-4">

        <div className="flex felx-1 justify-start items-start flex-col mf:mr-10 ">
          <h1 className="text-white text-5xl sm:text-5xl ">
            Send Crypto <br />
            Across The world
          </h1>
          <p className="text-white pt-3 text-left w-9/12 md:w-7/12">
            Explore rhe crypto world. Buy and sell cryptocurriency easily on
            Krypto.
          </p>
          {!CurrentAccount && (
            <button
            type="button"
            
            onClick={connectWallet}
            className="flex felx-row justify-center w-full items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
            <p className="text-white font-semibold">Connect Wallet</p>
            </button>
          )}
          
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>


        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 ml-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full eth-card .white-glassmorphism ">
          <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-9 h-9 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={20} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>  
          </div>

          <div className=" mt-5 p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={()=>{handleChange}} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={()=>{handleChange}} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={()=>{handleChange}} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={()=>{handleChange}} />

            {false ?(<Loader/>)
            :(
                <button
                  type="button"
                  onClick={handlesubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
            )}
            
            </div>

        </div>


      </div>
    </div>
  );
};
export default Welcome;
