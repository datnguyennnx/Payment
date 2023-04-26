import React, { useState, useRef } from "react";
import { TbCoffee } from 'react-icons/tb'
import useAutosizeTextArea from "./useAutosizeTextArea";


export function DonateForm (){
    

    const [amount, setAmount] = useState<any>(0)
    const [inputEmail] = useState(null);
    const [message, setMessage] = useState('');

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, message);


    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        return setAmount(event.target.value)
    }

    const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        return setAmount(event.target.value)
    }

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        return setMessage(textAreaRef.current.value);
      };

    const [form, setForm] = useState({
        email:  inputEmail,
        message: message,
        amount: amount,
    })

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const showState = () => {
        console.log(form)
    }

    return (
        <div className="flex min-w-[24rem] max-w-[24rem] 
                        md:min-w-[28rem] md:max-w-[28rem] 
                        p-4 m-4">
            <div className="flex w-full h-auto bg-[#f3f1e5] border-[1px] rounded-2xl border-gray-400 ">
                <div className="w-full">

                    <p className="flex m-8 text-lg sm:text-lg md:text-xl 
                                  lg:text-2xl font-semibold w-auto"> Buy Nguyễn Đạt a coffee</p>
                
                    <div className="flex w-auto m-6 p-2 h-20 border-[1px] rounded-xl border-black bg-[#ffe5c8]">
                        <div className="flex flex-row self-center">

                            <div className="mr-[1px] ml-[1px]  self-center ">
                                <TbCoffee className="w-8 h-8 md:w-12 md:h-12 fill-slate-300" />
                            </div>
                            <div className="mr-[1px] ml-[1px] self-center">
                                <label className="ml-2 text-xl font-bold text-black ">X</label>
                            </div>
                                
                            <ul className="grid grid-cols-3 gap-x-1 my-10 min-w-[10rem] ml-2 md:ml-0">
                                <li className="relative">
                                    <div className="px-1 mx-1 md:px-4 md:x-2 self-center">
                                        <input type="radio" name="amount" 
                                                className="sr-only peer"
                                                id="1" value="1" onChange={radioHandler}/>
                                        <label  
                                        htmlFor="1"
                                        className="flex justify-center py-[2px] w-10 h-10 border-2 border-black rounded-full 
                                        text-lg lg:text-xl font-medium peer-checked:bg-[#ff9257] ">
                                            1</label>
                                    </div>
                                </li>

                                <li className="relative">
                                    <div className="px-1 mx-1 md:px-4 md:x-2 self-center">
                                        <input type="radio" name="amount" className="sr-only peer"
                                        id="2" value="2" onChange={radioHandler}/>
                                        <label  
                                        htmlFor="2"
                                        className="flex justify-center py-[2px] w-10 h-10 border-2 border-black rounded-full 
                                        text-lg lg:text-xl font-medium peer-checked:bg-[#ff9257]">
                                            2</label>
                                    </div>
                                </li>

                                <li className="relative">
                                    <div className="px-1 mx-1 md:px-4 md:x-2 self-center">
                                        <input type="radio" name="amount" className="sr-only peer"
                                        id="3" value="3" onChange={radioHandler}/>
                                        <label  
                                        htmlFor="3"
                                        className="flex justify-center py-[2px] w-10 h-10 border-2 border-black rounded-full 
                                        text-lg lg:text-xl font-medium peer-checked:bg-[#ff9257] ">
                                            3</label>
                                    </div>
                                </li>

                            </ul>

                            <div className="mr-[1px] ml-[1px] md:mr-2 md:ml-4 self-center">
                                <input type="inline-radio" name="amount" placeholder="10"
                                value={amount}  onChange={changeHandler}
                                className="pl-2 pr-2 w-12 md:w-14 md:h-10 text-xl border-2 rounded-md" />
                            </div>
                        </div>
                    </div>

                    <p className="flex my-[2px] mx-8 md:my-2 text-lg sm:text-lg md:text-xl 
                                  lg:text-2xl font-semibold w-auto "> Email</p>

                    <input className="flex min-w-[18.25rem]  md:min-w-[22.5rem] my-[2px] px-2 py-2 mx-8 md:my-2 text-base
                                      font-medium border-[1px] border-black rounded-md"
                            placeholder="Enter Email"
                            id="email"
                            type="text"
                            name="email"
                            onChange={changeHandler}
                            />


                    <p className="flex my-[1px] mx-8 md:my-2 text-lg sm:text-lg md:text-xl 
                                  lg:text-2xl font-semibold w-auto"> Question</p>

                    <div className="flex w-auto px-6 py-4 h-auto "> 
                        <textarea cols={30} rows={2}
                        ref={textAreaRef}
                        className="flex w-full bg-[#f3f1e5] text-lg lg:text-xl p-4 border-2 
                        max-h-[25rem] rounded-xl border-black" 
                        placeholder="Enter Question"
                        id="message"
                        name="message"
                        value={message}
                        onChange={changeHandler}></textarea>
                    </div>

                    <div className="flex w-auto my-2 mx-8 h-10 border-[1px] border-[#ff7300]
                            rounded-xl bg-[#ff813f] justify-center" >
                        <button className="w-full text-lg  md:text-xl font-semibold " 
                                disabled={!amount} onClick={showState}>{"Support " + amount*5 + " $"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}