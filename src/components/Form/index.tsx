import { MessageForm } from "./MessageForm"
import { DonateForm } from "./DonateForm"


export function Form (){
    return(
        <div className="flex flex-wrap-reverse justify-around w-full h-[50rem]">
            <MessageForm email="offcial.nguyendat@gmail.com" message="Fucking" amount={1000} />
            <DonateForm />
        </div>
    )
}