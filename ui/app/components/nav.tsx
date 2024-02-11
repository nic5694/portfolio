import {MutableRefObject, Ref, useRef} from "react";

interface NavigationProps {
    sectionHighlight: any;
    scrollToSection: (sectionRef: MutableRefObject<HTMLDivElement | null>) => void;
    navSections: { name: string, ref: MutableRefObject<HTMLDivElement | null> }[];
}
export const Navigation: React.FC<NavigationProps> = ({ sectionHighlight, scrollToSection, navSections }) => {
    return (
        <div className="bg-[#2D2D2D] px-5 py-4 lg:flex justify-between items-center text-white fixed w-full top-0 z-50">
            <div className="flex items-center">
                <div className="w-32 2xl:w-48 text-lg font-thin tracking-wider" style={{fontFamily: 'Bebas Neue'}}>
                    Nicholas Martoccia
                </div>
            </div>
            <div className="flex gap-10 text-sm">
                {navSections.map((section, index) => (
                    <div
                        key={index}
                        style={{fontFamily: 'Bebas Neue'}}
                        onClick={() => scrollToSection(section.ref)}
                        className={sectionHighlight === index ? 'text-companyYellow' : 'hover:underline underline-offset-4 text-lg decoration-2 decoration-companyYellow'
                        }
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
    );
};

export default Navigation;
