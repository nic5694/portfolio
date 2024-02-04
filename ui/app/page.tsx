'use client';
import {Navigation} from "@/app/components/nav";
import {MutableRefObject, useRef, useState} from "react";
import Section from "@/app/components/section";
import SectionBtn from "@/app/components/sectionBtn";
import ProgressCircle from "@/app/components/ProgressCircle";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

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
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }};

    const githubLogoSvg = () => {
        return (
            <svg width="20" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0C16.5049 0 14.0342 0.49145 11.729 1.44629C9.42383 2.40113 7.32928 3.80066 5.56497 5.56497C2.00178 9.12817 0 13.9609 0 19C0 27.398 5.453 34.523 12.996 37.05C13.946 37.202 14.25 36.613 14.25 36.1V32.889C8.987 34.029 7.866 30.343 7.866 30.343C6.992 28.139 5.757 27.55 5.757 27.55C4.028 26.372 5.89 26.41 5.89 26.41C7.79 26.543 8.797 28.367 8.797 28.367C10.45 31.255 13.243 30.4 14.326 29.944C14.497 28.709 14.991 27.873 15.523 27.398C11.305 26.923 6.878 25.289 6.878 18.05C6.878 15.941 7.6 14.25 8.835 12.901C8.645 12.426 7.98 10.45 9.025 7.885C9.025 7.885 10.621 7.372 14.25 9.823C15.751 9.405 17.385 9.196 19 9.196C20.615 9.196 22.249 9.405 23.75 9.823C27.379 7.372 28.975 7.885 28.975 7.885C30.02 10.45 29.355 12.426 29.165 12.901C30.4 14.25 31.122 15.941 31.122 18.05C31.122 25.308 26.676 26.904 22.439 27.379C23.123 27.968 23.75 29.127 23.75 30.894V36.1C23.75 36.613 24.054 37.221 25.023 37.05C32.566 34.504 38 27.398 38 19C38 16.5049 37.5086 14.0342 36.5537 11.729C35.5989 9.42383 34.1993 7.32929 32.435 5.56497C30.6707 3.80066 28.5762 2.40113 26.271 1.44629C23.9658 0.49145 21.4951 0 19 0Z" fill="black"/>
            </svg>
        )
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
                    <div className="flex flex-col mx-4 md:mx-8 lg:mx-12 xl:mx-24">
                        <div className="flex flex-col md:flex-row justify-center">
                            <div className="flex flex-col md:mx-6 gap-4 justify-center">
                                <div className="text-5xl font-bebas">Skills</div>
                                <div className="flex flex-col md:w-1/2">
                                    The diagram provides a snapshot of some of my skills. For a more comprehensive view
                                    of my capabilities, please explore the projects available on my GitHub profile
                                    linked below. These repositories.
                                    <div className='flex justify-start mt-5'>
                                        <button
                                                onClick={ () => {scrollToSection(projectsSection)}}
                                              className='animate-bounce border-[1.5px] pl-5 pr-2 border-black pb-1 pt-1 gap-3 rounded-full text-sm flex hover:gap-5 duration-200 ease-in-out'><span>See Projects</span>
                                            <span>{githubLogoSvg()}</span> </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 justify-center">
                                <div className="w-full md:w-96 lg:w-96 xl:w-[35vw] flex gap-3 flex-wrap justify-center">
                                    <ProgressCircle percentage={90} text={"Java"}/>
                                    <ProgressCircle percentage={50} text={"C#"}/>
                                    <ProgressCircle percentage={40} text={"PHP"}/>
                                    <ProgressCircle percentage={70}
                                                    text={"Python"}/>
                                    <ProgressCircle percentage={95}
                                                    text={"JavaScript"}/>
                                    <ProgressCircle percentage={80}
                                                    text={"TypeScript"}/>
                                    <ProgressCircle percentage={80}
                                                    text={"Swift"}/>
                                    <ProgressCircle percentage={85}
                                                    text={"MySQL Server"}/>
                                    <ProgressCircle percentage={90}
                                                    text={"Microsoft SQL Server"}/>
                                    <ProgressCircle percentage={90}
                                                    text={"Spring Boot"}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </Section>
            </div>


            <div ref={projectsSection}>
                <Section goToSectionRef={workExperienceSection} scrollTo={scrollToSection} showArrow={false}>
                    <div className={"flex flex-row"}>
                        <div className="text-5xl font-bebas">Projects</div>
                        <div className={"flex flex-col"}>
                         <div className="flex flex-row gap-44 justify-center">
                                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbackground&psig=AOvVaw3UQ1sg6TvSW9EbdXgVI7v9&ust=1707081180871000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCZu4yLkIQDFQAAAAAdAAAAABAE" alt="Project 2" />
                         </div>
                        </div>

                    </div>
                </Section>
            </div>
            <div ref={workExperienceSection}>
                <Section goToSectionRef={projectsSection} scrollTo={scrollToSection} showArrow={false}>
                    <div className={"flex flex-col"}>
                        <div className="text-5xl font-bebas">New Section</div>
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
