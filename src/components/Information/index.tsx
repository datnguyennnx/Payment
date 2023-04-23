import { Avatar } from "./Avatar";
import { Background } from "./Background";

export function Information() {
    return (
        <div>
            <Background />
            <div className="mt-[-24px] sm:mt-[-54px] md:mt-[-72px] xl:mt-[-120px]">
                <Avatar />
                <p className="mt-2 lg:mt-4 text-xl sm:text-3xl 
                md:text-4xl xl:text-5xl font-semibold">Nguyễn Đạt</p>
                <p className="mt-2 lg:mt-4 text-sm sm:text-lg 
                md:text-xl xl:text-2xl font-medium opacity-70">To help you some stupid question</p>
            </div>
        </div>
    )
}
