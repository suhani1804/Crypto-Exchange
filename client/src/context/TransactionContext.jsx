 //Context Abi is used for only connecting to the block chain That allow us not to write all of our login in all the components Only write it in one centralise place

import React ,{useEffect , useState } from 'react'; //importing react and useeffect and useState hooks from react
import {ethers} from 'ethers'; //importing ether from ethers package for the use of intergration smart contract

import { contractABI , contractAddress } from '../Utils/constants'; //taking the abi and address for the integration
//import { useContext } from 'react';

export const TransactionContext = React.createContext(); //context provider is to pass data through the component tree without using proper\s manually

const { ethereum  } = window;
// ethereum sindow object is used for the get the all the metamask data throgh window object of ethereum 

const createEthereumContract =()=>
{
    const provider = new ethers.providers.Web3Provider(ethereum);
    //create the object of provider from Web3provider and pass the ethereum window object.
    const signer = provider.getSigner();
    //will get the signer 
    const transactionContract = new ethers.Contract(contractABI,contractAddress,signer,provider);
    //get the contract containing the 3 datas
   
    return transactionContract;
    
}
export const TransactionProvider =({children})=>
{
    const {CurrentAccount, setCurrentAccount} = useState('');
    const [formData, setformData] =useState({addressTo:'',amount:'',keyword:'',message:''});

    const [isLoading, setisLoading] = useState(false);

    const [transactioncount, settransactioncount] = useState(localStorage.getItem(`transactioncount`));

    const handleChange=(e,name)=>
    {
        setformData((prevState)=>(
        {
            ...prevState,[name]: e.target.value
        }));
    }
    //async = when a method is taking time to run then the another method will run at the time of the execution that's why we use async function and await is the functionality is provide to listong down
    const checkIfWalletIsConnected = async ()=>
    {
        try 
        {
            if(!ethereum) return alert("Please install metamask"); 
        //if the ethereum object is not founded then return the alert statement

            const account = await ethereum.request({method: 'eth_accounts'});
        // account object in which we can get the method 'eth_accounts' by requesting it to the ethereum object

            if(account.length)//if the length is not equal to 0 then run this
            {
            //console.log(accounts.length);
                setCurrentAccount(account[0]);
            
            //can create getallTrasactions()
            }
            else //if the length is equal to 0 then run this
            {
                console.log("No accounts found"); 
            }
                // console.log(account);
            } 
            catch (error) 
            {
            console.log(error);
           
            }
        
    }

    const connectWallet = async ()=>
    {
        try 
        {
            if(!ethereum) return alert("Please install metamask"); 

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            //requesting the first metamask account to connect
            setCurrentAccount(accounts[0]);
            window.location.reload();
        } 
        catch (error) 
        {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    const sendTransaction = async()=>
    {
        try 
        {
            if(ethereum) {

            const{ addressTo, amount, keyword, message} = formData;
            const transactionContract= getEthereumContract();
            const parseAmount = ethers.utils.parseEther(amount);

            await ethereum.request(
                {
                    method:'eth_sendTransaction',
                    params:[
                        {
                            from: CurrentAccount,
                            to: addressTo,
                            gas: '0x5208',
                            value: parseAmount._hex,

                        }]
                });
            const transactionHash = await transactionContract.addToBlockchain(addressTo, parseAmount, keyword, message);

            setisLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setisLoading(false);
            console.log(`success - ${transactionHash.hash}`);
            
            const transactioncount = await transactionContract.gettrasactioncount();

            settransactioncount(transactioncount.toNumber());
            window.location.reload();
        }
        else
        {
            console.log("No Ethereum object");
        }
    }
        catch (error) 
        {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

useEffect(()=>{checkIfWalletIsConnected()},[]);


    return (
        <TransactionContext.Provider value={{connectWallet, CurrentAccount ,sendTransaction, formData, setformData, handleChange}}>
            {children}
        </TransactionContext.Provider>
    );
}
