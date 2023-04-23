import React, { useState } from "react";
import { TbCoffee } from 'react-icons/tb'

export function DonateForm (){
    const [amount, setAmount] = useState<any>(0)

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        return setAmount(event.target.value);
    };

    const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        return setAmount(event.target.value);
    };

    const [message, setMessage] = useState('');
    const handleMessageChange = event  => {
        setMessage(event.target.value);
        console.log(event.target.value);
      };

    return (
        <div className="flex w-[30%] p-4">
            <div className="flex w-full h-[40rem] bg-[#f3f1e5] border-[1px] rounded-xl border-gray-400 ">
                <div className="w-full">

                    <p className="flex m-8 text-2xl font-semibold w-auto"> Buy Nguyễn Đạt a coffee</p>
                
                    <div className="flex w-auto m-2 p-2 h-20 border-[1px] rounded-xl border-black bg-[#ffe5c8]">
                        <div className="flex flex-row self-center">

                            <div className="mr-2 ml-2 self-center ">
                                <TbCoffee className="w-12 h-12 fill-slate-300" />
                            </div>
                            <div className="mr-2 ml-2 self-center">
                                <label className="ml-2 text-xl font-medium text-black ">X</label>
                            </div>
                                
                            <ul className="grid grid-cols-3 gap-x-1 mt-10 mb-10 max-w-md mx-auto">
                                <li className="relative">
                                    <div className="pr-4 pl-4 self-center">
                                        <input type="radio" name="Cafe" 
                                                className="sr-only peer"
                                                id="1" value="1" onChange={radioHandler}/>
                                        <label  
                                        htmlFor="1"
                                        className="flex justify-center w-10 h-10 border-2 border-black rounded-full 
                                        text-2xl font-medium peer-checked:bg-[#ff9257] ">
                                            1</label>
                                    </div>
                                </li>

                                <li className="relative">
                                    <div className="pr-4 pl-4 self-center">
                                        <input type="radio" name="Cafe" className="sr-only peer"
                                        id="2" value="2" onChange={radioHandler}/>
                                        <label  
                                        htmlFor="2"
                                        className="flex justify-center w-10 h-10 border-2 border-black rounded-full 
                                        text-2xl font-medium peer-checked:bg-[#ff9257]">
                                            2</label>
                                    </div>
                                </li>

                                <li className="relative">
                                    <div className="pr-4 pl-4 self-center">
                                        <input type="radio" name="Cafe" className="sr-only peer"
                                        id="3" value="3" onChange={radioHandler}/>
                                        <label  
                                        htmlFor="3"
                                        className="flex justify-center w-10 h-10 border-2 border-black rounded-full 
                                        text-2xl font-medium peer-checked:bg-[#ff9257]">
                                            3</label>
                                    </div>
                                </li>

                            </ul>

                            <div className="mr-2 ml-2 self-center">
                                <input type="inline-radio" name="Cafe" placeholder="10"
                                value={amount} onChange={formHandler}
                                className="pl-2 pr-2 w-16 h-10 text-xl border-2 rounded-md" />
                            </div>
                        </div>
                    </div>

                    <p className="flex m-4 text-2xl font-semibold w-auto"> Question is</p>

                    <div className="flex w-auto p-2 h-auto "> 
                        <textarea id="message" name="message" value={message} 
                        onChange={handleMessageChange} cols={30} rows={8} 
                        className="w-full bg-[#f3f1e5] text-2xl p-4 border-2 rounded-xl border-black" 
                        placeholder="What ever you want to ask"></textarea>
                    </div>

                    <div className="flex w-auto m-2 h-10 border-[1px] 
                            rounded-xl bg-[#ff813f] justify-center" >
                        <button className="text-2xl" disabled={!message}>{"Support " + amount*5 + " $"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}