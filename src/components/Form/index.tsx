import { MessageForm } from "./MessageForm"
import { DonateForm } from "./DonateForm"

export function Form (){
    return(
        <div className="flex w-full h-[50rem]">
            <MessageForm />
            <DonateForm />
        </div>
    )
}