import {MutableRefObject, ReactNode} from "react";

interface SectionBtnProps {
    scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
    goToSectionRef: React.RefObject<HTMLDivElement>;
    btnName: string;
}
export default function SectionBtn({
                                       scrollTo,
                                       goToSectionRef,
                                   btnName} : SectionBtnProps
){
    return(
    <div className='flex justify-center'>
        <button
            className="bg-zinc-100 text-2xl font-bebas p-2 px-7 text-gray-600"
            onClick={() => scrollTo(goToSectionRef)}
        >{btnName}
        </button>
    </div>
    )
}