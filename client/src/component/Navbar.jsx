import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import logo from "../../logo_1.png";

const Navitem = ({ title, classprops }) => {
  return <li className={`mx-4 py-2 cursor-pointer ${classprops}`}>{title}</li>;
};

const Navbar = () => {
  const [togglemenu, settogglemenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between item-center p-2 -mb-8 -mt-2">
      <div className="md:flex-[0.6] flex-initial justify-centre item-centre ">
        <h1 className="w-24 h-20 text-xl font-semibold text-blue-700 italic cursor-pointer flex justify-center items-center" >Crypto</h1>
      </div>
      <ul className="text-white md:flex hidden py-5 list-none flex-row justify-between item-centre  flex-initial ">
        {["market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <Navitem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] h-10 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          login
        </li>
      </ul>
      <div className="flex relative mt-6 ">
      {togglemenu && (
          <ul className="z-10 fixed w-[70vw] item-end h-screen shadow-2xl blue-glassmorphism text-white animate-slide-in flex felx-col justify-start rounded-md md:hidden list-none top-0 -right-1 p-3 ">
            <li className="text-xl w-20 my-2 ">
              <AiOutlineClose onClick={() => settogglemenu(false)} />
            </li>
            
            {["market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <Navitem
                  key={item + index}
                  title={item}
                  classprops="my-6 text-xl h-10"
                 
                />
                
              )
            )}
          </ul>
        )}
        {!togglemenu && (
          <HiMenuAlt4 
            fontSize={28}
            className="text-white md:hidden cursor-pointer "
            onClick={() => settogglemenu(true)}
          />
        )}
        {togglemenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer "
            onClick={() => settogglemenu(false)}
          />
        )}

        
      </div>
    </nav>
  );
};

export default Navbar;
