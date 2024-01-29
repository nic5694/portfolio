import { useEffect, useRef, ReactNode, MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
    scrollTo?: (ref: React.RefObject<HTMLDivElement>) => void;
    goToSectionRef?: React.RefObject<HTMLDivElement>;
    showArrow?: boolean;
    children?: ReactNode;
}

export default function Section({
                                    scrollTo,
                                    goToSectionRef,
                                    showArrow = true,
                                    children,
                                }: SectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     gsap.fromTo(
    //         containerRef.current,
    //         {
    //             autoAlpha: 0,
    //             y: -20,
    //         },
    //         {
    //             y: 0,
    //             autoAlpha: 1,
    //             duration: 1,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 scroller: ".container",
    //                 trigger: containerRef.current,
    //                 start: "top 60%",
    //                 end: "bottom 0%",
    //                 toggleActions: "play none restart reverse",
    //             },
    //         }
    //     );
    //     return () => {};
    // }, []);

    return (
        <div className="relative section bg-gray-200" ref={containerRef}>
            {children && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {children}
                </div>
            )}
            {showArrow && scrollTo && (
                <button
                    className="absolute bottom-20 left-0 right-0 mx-auto bg-no-repeat bg-contain w-10 h-10 bg-cover"
                    style={{
                        backgroundImage: "url('../../images/downarrow.svg')",
                        zIndex: 2,
                    }}
                    // @ts-ignore
                    onClick={() => scrollTo(goToSectionRef)}
                ></button>
            )}
        </div>
    );
}
