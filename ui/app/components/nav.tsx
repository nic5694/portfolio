'use client';
import {MutableRefObject, Ref, useRef, useState} from "react";

interface NavigationProps {
    sectionHighlight: any;
    scrollToSection: (sectionRef: MutableRefObject<HTMLDivElement | null>) => void;
    navSections: { name: string, ref: MutableRefObject<HTMLDivElement | null> }[];
}

export const Navigation: React.FC<NavigationProps> = ({sectionHighlight, scrollToSection, navSections}) => {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

    const menuIcon = () => {
        return (
            <svg
                className="pt-1"
                width="25"
                viewBox="0 0 89 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="89" height="13" fill="white"/>
                <rect y="31" width="89" height="13" fill="white"/>
                <rect y="62" width="89" height="13" fill="white"/>
            </svg>
        )
    }

    return (
        <>
            {/*Mobile version*/}

            <div style={menuOpen ? {alignItems: "center", backgroundColor: "#2D2D2D"} : {alignItems: "center"}}
                 className="px-5 py-4 flex justify-between lg:hidden bg-[#2D2D2D] ">
                <div>
                    <div className="text-lg font-thin tracking-wider text-white" style={{fontFamily: 'Bebas Neue'}}>
                        Nicholas Martoccia
                    </div>
                </div>

                <div className='flex md:hidden gap-5'>

                    <button
                        onClick={() => {
                            setMenuOpen(!menuOpen)
                        }}
                    >
                        {menuIcon()}
                    </button>
                </div>
            </div>

            <div
                className="absolute lg:hidden text-[gray] z-10"
                style={
                    menuOpen
                        ? {width: '100%', height: '100%', overflow: 'hidden'}
                        : {height: '0', overflow: 'hidden'}
                }
            >
                <div className='bg-white shadow-2xl'>
                    <div
                        style={{fontFamily: 'Bebas Neue, cursive'}}
                        onClick={() => {scrollToSection(navSections[0].ref)}}
                        className="px-5 py-2 border-b bg-white hover:bg-companyYellow hover:text-[#2D2D2D] hover:pl-10 duration-300 ease-in-out "
                    >
                        About
                    </div>
                    <div
                        style={{fontFamily: 'Bebas Neue, cursive'}}
                        onClick={() => {scrollToSection(navSections[1].ref)}}
                        className="px-5 py-2 border-b bg-white hover:bg-companyYellow hover:text-[#2D2D2D] hover:pl-10 duration-300 ease-in-out "
                    >
                        Skills
                    </div>
                    <div
                        style={{fontFamily: 'Bebas Neue, cursive'}}
                        onClick={() => {scrollToSection(navSections[2].ref)}}
                        className="px-5 py-2 border-b bg-white hover:bg-companyYellow hover:text-[#2D2D2D] hover:pl-10 duration-300 ease-in-out "
                    >
                        Projects
                    </div>
                    <div
                        style={{fontFamily: 'Bebas Neue, cursive'}}
                        onClick={() => {scrollToSection(navSections[3].ref)}}
                        className="px-5 py-2 border-b bg-white hover:bg-companyYellow hover:text-[#2D2D2D] hover:pl-10 duration-300 ease-in-out "
                    >
                        Work Experience
                    </div>
                    <div
                        style={{fontFamily: 'Bebas Neue, cursive'}}
                        onClick={() => {scrollToSection(navSections[4].ref)}}
                        className="px-5 py-2 border-b bg-white hover:bg-companyYellow hover:text-[#2D2D2D] hover:pl-10 duration-300 ease-in-out "
                    >
                        Testimonials
                    </div>
                    <div
                        style={{fontFamily: 'Bebas Neue, cursive'}}
                        className="px-5 py-2 border-b bg-white hover:bg-companyYellow hover:text-[#2D2D2D] hover:pl-10 duration-300 ease-in-out "
                    >
                        Resume
                    </div>
                </div>
            </div>


            {/*Desktop*/}
            <div
                className="bg-[#2D2D2D] px-5 py-4 hidden md:flex lg:justify-between lg:items-center text-white fixed w-full top-0 z-50">
                <div className="flex items-center">
                    <div className="text-lg font-thin tracking-wider text-white" style={{fontFamily: 'Bebas Neue'}}>
                        Nicholas Martoccia
                    </div>
                </div>
                <div className={`lg:hidden flex gap-5 items-center ${menuOpen ? 'flex-col' : 'hidden'}`}>
                    {/* Collapse/Expand button */}
                    <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
                </div>
                <div className={`lg:flex gap-10 text-sm ${menuOpen ? 'hidden' : 'flex'}`}>
                    {navSections.map((section, index) => (
                        <div
                            key={index}
                            style={{fontFamily: 'Bebas Neue'}}
                            onClick={() => scrollToSection(section.ref)}
                            className={sectionHighlight === index ? 'text-companyYellow' : 'hover:underline underline-offset-4 text-lg decoration-2 decoration-companyYellow'}
                        >
                            {section.name}
                        </div>
                    ))}
                    <div className="hover:underline underline-offset-4 decoration-2 text-lg  decoration-companyYellow"
                         style={{fontFamily: 'Bebas Neue'}}>
                        Resume
                    </div>
                </div>
            </div>
        </>

    )
        ;
};

export default Navigation;
