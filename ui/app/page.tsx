'use client';
import { Navigation } from "@/app/components/nav";
import { MutableRefObject, useRef , useState} from "react";
import Section from "@/app/components/section";

export default function Home() {
    const landingSection = useRef<HTMLDivElement>(null);
    const aboutMeSection = useRef<HTMLDivElement>(null);
    const skillsSection = useRef<HTMLDivElement>(null);
    const [ activeSection, setActiveSection] = useState();

    const sections = [

    ]

    function scrollToSection(section: MutableRefObject<HTMLDivElement | null>) {
        if (section.current) {
            section.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div>
            <Navigation sectionHighlight={activeSection} />
            <div className={"section"}>
            <Section showArrow={false} goToSectionRef={aboutMeSection} scrollTo={scrollToSection}>
                <div
                    ref={landingSection}
                    className={"HomePageContainer"}
                >
                    <div
                        style={{fontFamily: 'Bebas Neue', textAlign: "center", marginTop: "23vh"}}
                        className="text-white text-5xl sm:text-7xl 2xl:text-[120px]"
                    >
                        <div className="align-middle">Nicholas Martoccia</div>
                        <div className="align-bottom text-2xl my-32">
                            <button
                                onClick={() => {
                                    scrollToSection(aboutMeSection);
                                    // @ts-ignore
                                    // setActiveSection(0);
                                }}
                                className="bg-gray-400 py-2 px-2 rounded"
                            >
                                Enter Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
            </div>
            <div ref={aboutMeSection} className="aboutMeContainer">
                <Section goToSectionRef={skillsSection} scrollTo={scrollToSection} showArrow={false}>

                </Section>
            </div>
        </div>
    );
}
