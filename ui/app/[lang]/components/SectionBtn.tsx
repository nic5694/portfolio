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
    return (
        <div className='flex justify-center'>
            <button
                className="bg-zinc-100 text-lg sm:text-xl lg:text-2xl m-auto font-bebas p-2 xsm:p-0.5 lg:px-4 md:px-3 lg:py-3 px-5 sm:px-7 xsm:px-2 text-gray-600"
                onClick={() => scrollTo(goToSectionRef)}
            >
                {btnName}
            </button>
        </div>
    );
}