export type UserMessage = {
    email: string | undefined
    message: string | undefined
    amount: number | undefined
}

export function MessageForm(props: UserMessage){
    
    return(
        <div className="relative min-w-[24rem] max-w-[24rem] 
                        md:min-w-[32rem] md:max-w-[32rem]
                        lg:min-w-[44rem] lg:max-w-[44rem]  
                        px-4 my-4">
                <div className="relative w-full h-auto bg-[#f3f1e5] border-[1px] rounded-xl border-gray-400 px-4 ">
                        <div className="flex w-full my-2 rounded-md h-24 border-2 border-black justify-center">
                             <p className="flex text-xl font-semibold self-center mx-2">{"Tao co email la: " + props.email}</p>
                             <p className="flex text-xl font-semibold self-center mx-2">{"Tao co dieu muon noi la: " + props.message}</p>
                             <p className="flex text-xl font-semibold self-center mx-2">{"Tao bo thi may " + props.amount + " ly ca phe"}</p>
                        </div>
                </div> 
                
                
                
            </div>
    )
}