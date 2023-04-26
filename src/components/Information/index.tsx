import { Avatar } from "./Avatar";
import { Background } from "./Background";

export function Information() {
    return (
        <div>
            <Background />
            <div className="mt-[-32px] sm:mt-[-54px] md:mt-[-72px] xl:mt-[-90px]">
                <Avatar />
                <p className="mt-2 lg:mt-4 text-xl sm:text-3xl 
                md:text-4xl font-bold">Nguyễn Đạt</p>
                <p className="mt-2 lg:mt-4 text-sm sm:text-lg 
                md:text-xl font-semibold opacity-70">To help you some stupid question</p>
            </div>
        </div>
    )
}
