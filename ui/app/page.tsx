'use client';
import {Navigation} from "@/app/components/nav";
import {MutableRefObject, useRef, useState} from "react";
import Section from "@/app/components/section";
import SectionBtn from "@/app/components/sectionBtn";

export default function Home() {
    const landingSection = useRef<HTMLDivElement>(null);
    const aboutMeSection = useRef<HTMLDivElement>(null);
    const skillsSection = useRef<HTMLDivElement>(null);
    const projectsSection = useRef<HTMLDivElement>(null);
    const workExperienceSection = useRef<HTMLDivElement>(null);
    const contactMeSection = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState();

    const sections = []

    function scrollToSection(section: MutableRefObject<HTMLDivElement | null>) {
        if (section.current) {
            section.current.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <>
            <Navigation sectionHighlight={activeSection}/>
            <div className={"section"}>
                <Section showArrow={true} goToSectionRef={aboutMeSection} scrollTo={scrollToSection}>
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
            <div ref={aboutMeSection}>
                <Section goToSectionRef={skillsSection} scrollTo={scrollToSection} showArrow={true}>
                    <div className={"flex flex-col"}>
                        <div style={{alignItems: "center"}} className="flex flex-row gap-44 justify-center">
                            <div className={"flex flex-col gap-4"}>
                                <div className="w-[400px] h-[400px] bg-black rounded-full"/>
                                <div className={"flex flex-row justify-center gap-10"}>
                                    <div className="w-[60px] h-[60px] bg-stone-400 rounded-full"/>
                                    <div className="w-[60px] h-[60px] bg-stone-400 rounded-full"/>
                                    <div className="w-[60px] h-[60px] bg-stone-400 rounded-full"/>
                                </div>
                            </div>
                            <div className="w-[40%] text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisi risus,
                                fringilla et sollicitudin id, dictum viverra nunc. Nam faucibus nec nisl eu varius.
                                Etiam feugiat velit nec augue cursus fringilla. Duis eget elit neque. Praesent ex
                                lacus, vestibulum vitae enim a.
                                <br/>
                                Currently a DEC graduate starting my Bachelors in Computer Science at Concordia
                            </div>
                        </div>
                        <div className={"text-center text-4xl sm:text 2xl:text font-bebas"}>
                            Learn more about my my:
                        </div>
                        <div className={"flex flex-row justify-center py-3 gap-16"}>
                            <SectionBtn scrollTo={scrollToSection} goToSectionRef={projectsSection}
                                        btnName={"Projects"}/>
                            <SectionBtn scrollTo={scrollToSection} goToSectionRef={skillsSection} btnName={"Skills"}/>
                            <SectionBtn scrollTo={scrollToSection} goToSectionRef={workExperienceSection}
                                        btnName={"Work Experience"}/>
                            <SectionBtn scrollTo={scrollToSection} goToSectionRef={aboutMeSection} btnName={"Resume"}/>
                        </div>

                    </div>
                </Section>
            </div>
            <div ref={skillsSection}>
                <Section goToSectionRef={projectsSection} scrollTo={scrollToSection} showArrow={false}>
                    <div className={"flex flex-col mx-24"}>
                        <div className="flex flex-row justify-center">
                            <div className={"flex flex-col mx-6 gap-4 justify-center"}>
                                <div className={"text-5xl font-bebas"}>Skills</div>
                                {/*<div className={"flex flex-row"}>*/}
                                <div className={"flex flex-col w-[50%]"}>The diagram provides a snapshot of some of my
                                    skills.
                                    For a more comprehensive view of my capabilities, please explore the projects
                                    available on my GitHub profile linked below. These repositories.
                                </div>
                            </div>
                            {/*</div>*/}
                            <div className={"flex flex-col"}>
                                <div className="w-[412px] h-[416px] relative">
                                    <div className="w-[100px] h-[123px] left-[277px] top-0 absolute">
                                        <div
                                            className="w-[100px] h-[100px] left-0 top-0 absolute bg-black rounded-full"/>
                                        <div
                                            className="w-16 h-[30px] left-[24px] top-[34px] absolute text-black text-3xl font-normal font-['Inter']">95%
                                        </div>
                                        <div
                                            className="w-[63px] h-4 left-[23px] top-[107px] absolute text-black text-xl font-extrabold font-['Inter']">Java
                                        </div>
                                    </div>
                                    <div className="w-[100px] h-[123px] left-[141px] top-0 absolute">
                                        <div
                                            className="w-[100px] h-[100px] left-0 top-0 absolute bg-black rounded-full"/>
                                        <div
                                            className="w-16 h-[30px] left-[24px] top-[34px] absolute text-black text-3xl font-normal font-['Inter']">75%
                                        </div>
                                        <div
                                            className="w-[63px] h-4 left-[23px] top-[107px] absolute text-black text-xl font-extrabold font-['Inter']"> C#
                                        </div>
                                    </div>
                                    <div className="w-[100px] h-[123px] left-[5px] top-0 absolute">
                                        <div
                                            className="w-[100px] h-[100px] left-0 top-0 absolute bg-black rounded-full"/>
                                        <div
                                            className="w-16 h-[30px] left-[24px] top-[34px] absolute text-black text-3xl font-normal font-['Inter']">40%
                                        </div>
                                        <div
                                            className="w-[63px] h-4 left-[23px] top-[107px] absolute text-black text-xl font-extrabold font-['Inter']"> PHP
                                        </div>
                                    </div>
                                    <div className="w-[100px] h-[123px] left-[6px] top-[147px] absolute">
                                        <div
                                            className="w-[100px] h-[100px] left-0 top-0 absolute bg-black rounded-full"/>
                                        <div
                                            className="w-16 h-[30px] left-[24px] top-[34px] absolute text-black text-3xl font-normal font-['Inter']">70%
                                        </div>
                                        <div
                                            className="w-[72px] h-4 left-[14px] top-[107px] absolute text-black text-xl font-extrabold font-['Inter']">Python
                                        </div>
                                    </div>
                                    <div className="w-[114px] h-[122px] left-0 top-[294px] absolute">
                                        <div
                                            className="w-[100px] h-[100px] left-[5px] top-0 absolute bg-black rounded-full"/>
                                        <div
                                            className="w-16 h-[30px] left-[29px] top-[34px] absolute text-black text-3xl font-normal font-['Inter']">95%
                                        </div>
                                        <div
                                            className="w-[114px] h-4 left-0 top-[106px] absolute text-black text-xl font-extrabold font-['Inter']">JavaScript
                                        </div>
                                    </div>
                                    <div className="w-[114px] h-[122px] left-[143px] top-[294px] absolute">
                                        <div
                                            className="w-[100px] h-[100px] left-[1px] top-0 absolute bg-black rounded-full"/>
                                        <div
                                            className="w-16 h-[30px] left-[25px] top-[34px] absolute text-black text-3xl font-normal font-['Inter']">90%
                                        </div>
                                        <div
                                            className="w-[114px] h-4 left-0 top-[106px] absolute text-black text-xl font-extrabold font-['Inter']">Microsoft
                                            SQL Server
                                        </div>
                                    </div>
                                    <div className="w-[125px] h-[122px] left-[287px] top-[294px] absolute">
                                        <div
                                            className="w-[100px] h-[100px] left-0 top-0 absolute bg-black rounded-full"/>
                                        <div
                                            className="w-16 h-[30px] left-[24px] top-[34px] absolute text-black text-3xl font-normal font-['Inter']">80%
                                        </div>
                                        <div
                                            className="w-[114px] h-4 left-[11px] top-[106px] absolute text-black text-xl font-extrabold font-['Inter']">MySQL
                                            Server
                                        </div>
                                    </div>
                                    <div className="w-[113px] h-[123px] left-[140px] top-[147px] absolute">
                                        <div
                                            className="w-[100px] h-[100px] left-[2px] top-0 absolute bg-black rounded-full"/>
                                        <div
                                            className="w-16 h-[30px] left-[26px] top-[34px] absolute text-black text-3xl font-normal font-['Inter']">80%
                                        </div>
                                        <div
                                            className="w-[113px] h-4 left-0 top-[107px] absolute text-black text-xl font-extrabold font-['Inter']">TypeScript
                                        </div>
                                    </div>
                                    <div className="w-[100px] h-[123px] left-[278px] top-[144px] absolute">
                                        <div
                                            className="w-[100px] h-[100px] left-0 top-0 absolute bg-black rounded-full"/>
                                        <div
                                            className="w-16 h-[30px] left-[24px] top-[34px] absolute text-black text-3xl font-normal font-['Inter']">80%
                                        </div>
                                        <div
                                            className="w-[63px] h-4 left-[23px] top-[107px] absolute text-black text-xl font-extrabold font-['Inter']">Swift
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>


            <div ref={projectsSection}>
                <Section goToSectionRef={workExperienceSection} scrollTo={scrollToSection} showArrow={false}>

                    <div className={"flex flex-row"}>

                    </div>
                </Section>
            </div>
            <div ref={workExperienceSection}>
                <Section goToSectionRef={projectsSection} scrollTo={scrollToSection} showArrow={false}>
                    <div className={"flex flex-col"}>
                        <div style={{alignItems: "center"}} className="flex flex-row gap-44 justify-center">

                        </div>
                    </div>
                </Section>
            </div>
            <div ref={contactMeSection}>
                <Section goToSectionRef={contactMeSection} scrollTo={scrollToSection} showArrow={false}>
                    <div className={"flex flex-col"}>
                        <div style={{alignItems: "center"}} className="flex flex-row gap-44 justify-center">

                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
}
