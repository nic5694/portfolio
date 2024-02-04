'use client';
import {Navigation} from "@/app/components/nav";
import {MutableRefObject, useRef, useState} from "react";
import Section from "@/app/components/section";
// @ts-ignore
import SectionBtn from "@/app/components/SectionBtn";
import ProgressCircle from "@/app/components/ProgressCircle";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import "react-multi-carousel/lib/styles.css";
import SectionTitle from "@/app/components/SectionTitle";
import TestimonialContainer from "@/app/components/TestimonialsComponent";
export default function Home() {
    const landingSection = useRef<HTMLDivElement>(null);
    const aboutMeSection = useRef<HTMLDivElement>(null);
    const skillsSection = useRef<HTMLDivElement>(null);
    const projectsSection = useRef<HTMLDivElement>(null);
    const workExperienceSection = useRef<HTMLDivElement>(null);
    const contactMeSection = useRef<HTMLDivElement>(null);
    const testamonials = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState();

    const sections = []

    const sendIconSVG = () => {
        return (
            <svg width="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5213 0.480536C19.3054 0.266169 19.0346 0.11547 18.7386 0.0450012C18.4427 -0.0254679 18.133 -0.0129794 17.8437 0.0810942L1.147 5.65045C0.837341 5.74857 0.563706 5.93626 0.360655 6.18981C0.157603 6.44335 0.0342435 6.75139 0.00615618 7.075C-0.0219312 7.39862 0.0465136 7.7233 0.202846 8.00803C0.359179 8.29277 0.596386 8.5248 0.884509 8.6748L7.81197 12.0986L11.2358 19.0489C11.3734 19.3209 11.584 19.5493 11.8439 19.7086C12.1039 19.8678 12.4031 19.9515 12.708 19.9505H12.8221C13.1486 19.9264 13.4603 19.8047 13.7168 19.6012C13.9732 19.3977 14.1625 19.1217 14.2601 18.8092L19.9093 2.15819C20.0102 1.87052 20.0273 1.5601 19.9586 1.2631C19.8899 0.966087 19.7383 0.694702 19.5213 0.480536ZM1.85458 7.2254L16.4285 2.36362L8.33695 10.4552L1.85458 7.2254ZM12.7879 18.1473L9.54669 11.6649L17.6382 3.57336L12.7879 18.1473Z" fill="white"/>
            </svg>
        )
    }

    const clearIconSVG = () => {
        return (
            <svg width="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.43687 8.49625L16.4719 1.45438C16.596 1.32965 16.6656 1.16082 16.6655 0.984873C16.6654 0.80892 16.5955 0.640186 16.4712 0.515626C16.2225 0.268126 15.7844 0.266877 15.5331 0.516877L8.49999 7.55875L1.46437 0.515002C1.21437 0.268126 0.77624 0.269376 0.52749 0.516251C0.465748 0.577747 0.416872 0.650925 0.383714 0.731513C0.350556 0.812101 0.33378 0.898486 0.334365 0.985627C0.334365 1.16313 0.403115 1.32938 0.52749 1.4525L7.56249 8.49563L0.528115 15.5394C0.403981 15.6643 0.334465 15.8334 0.334816 16.0095C0.335168 16.1856 0.405359 16.3543 0.529991 16.4788C0.650616 16.5981 0.82124 16.6669 0.99749 16.6669H1.00124C1.17812 16.6663 1.34874 16.5969 1.46687 16.4763L8.49999 9.43438L15.5356 16.4781C15.66 16.6019 15.8262 16.6706 16.0025 16.6706C16.0896 16.6709 16.176 16.6539 16.2566 16.6207C16.3371 16.5874 16.4103 16.5386 16.4719 16.477C16.5336 16.4153 16.5824 16.3421 16.6156 16.2616C16.6489 16.181 16.6659 16.0947 16.6656 16.0075C16.6656 15.8306 16.5969 15.6638 16.4719 15.5406L9.43687 8.49625Z" fill="black" fill-opacity="0.75"/>
            </svg>
        )
    }


    function scrollToSection(section: MutableRefObject<HTMLDivElement | null>) {
        if (section.current) {
            section.current.scrollIntoView({behavior: "smooth"});
        }
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const githubLogoSvg = () => {
        return (
            <svg width="20" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19 0C16.5049 0 14.0342 0.49145 11.729 1.44629C9.42383 2.40113 7.32928 3.80066 5.56497 5.56497C2.00178 9.12817 0 13.9609 0 19C0 27.398 5.453 34.523 12.996 37.05C13.946 37.202 14.25 36.613 14.25 36.1V32.889C8.987 34.029 7.866 30.343 7.866 30.343C6.992 28.139 5.757 27.55 5.757 27.55C4.028 26.372 5.89 26.41 5.89 26.41C7.79 26.543 8.797 28.367 8.797 28.367C10.45 31.255 13.243 30.4 14.326 29.944C14.497 28.709 14.991 27.873 15.523 27.398C11.305 26.923 6.878 25.289 6.878 18.05C6.878 15.941 7.6 14.25 8.835 12.901C8.645 12.426 7.98 10.45 9.025 7.885C9.025 7.885 10.621 7.372 14.25 9.823C15.751 9.405 17.385 9.196 19 9.196C20.615 9.196 22.249 9.405 23.75 9.823C27.379 7.372 28.975 7.885 28.975 7.885C30.02 10.45 29.355 12.426 29.165 12.901C30.4 14.25 31.122 15.941 31.122 18.05C31.122 25.308 26.676 26.904 22.439 27.379C23.123 27.968 23.75 29.127 23.75 30.894V36.1C23.75 36.613 24.054 37.221 25.023 37.05C32.566 34.504 38 27.398 38 19C38 16.5049 37.5086 14.0342 36.5537 11.729C35.5989 9.42383 34.1993 7.32929 32.435 5.56497C30.6707 3.80066 28.5762 2.40113 26.271 1.44629C23.9658 0.49145 21.4951 0 19 0Z"
                    fill="black"/>
            </svg>
        )
    }

    const jobIcon = () => {
        return (
            <svg width="30" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.83335 35.875C5.89377 35.875 5.08971 35.5407 4.42119 34.8722C3.75266 34.2037 3.41783 33.3991 3.41669 32.4583V13.6667C3.41669 12.7271 3.75152 11.923 4.42119 11.2545C5.09085 10.586 5.89491 10.2511 6.83335 10.25H13.6667V6.83334C13.6667 5.89375 14.0015 5.0897 14.6712 4.42117C15.3409 3.75264 16.1449 3.41781 17.0834 3.41667H23.9167C24.8563 3.41667 25.6609 3.75151 26.3306 4.42117C27.0002 5.09084 27.3345 5.89489 27.3334 6.83334V10.25H34.1667C35.1063 10.25 35.9109 10.5848 36.5806 11.2545C37.2502 11.9242 37.5845 12.7282 37.5834 13.6667V32.4583C37.5834 33.3979 37.2491 34.2025 36.5806 34.8722C35.912 35.5419 35.1074 35.8761 34.1667 35.875H6.83335ZM6.83335 32.4583H34.1667V13.6667H6.83335V32.4583ZM17.0834 10.25H23.9167V6.83334H17.0834V10.25Z"
                    fill="white"/>
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
                                        onClick={() => {
                                            scrollToSection(projectsSection)
                                        }}
                                        className='animate-bounce border-[1.5px] pl-5 pr-2 border-black pb-1 pt-1 gap-3 rounded-full text-sm flex hover:gap-5 duration-200 ease-in-out'>
                                        <span>See Projects</span>
                                        <span>{githubLogoSvg()}</span></button>
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
                    <SectionTitle title={"Projects"}/>
                    <div className={"flex flex-col"}>
                        <div className="flex flex-row gap-44 justify-center">
                            {/*<img*/}
                            {/*    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fbackground&psig=AOvVaw3UQ1sg6TvSW9EbdXgVI7v9&ust=1707081180871000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCZu4yLkIQDFQAAAAAdAAAAABAE"*/}
                            {/*    alt="Project 2"/>*/}
                        </div>
                    </div>

                </div>
            </Section>
        </div>
        <div ref={workExperienceSection}
             className={"mt-20 md:mt-0 flex flex-col justify-center bg-gray-200 md:max-h-min sm:max-h-min lg:max-h-min"}>
            <div>
                <SectionTitle title={"Work Experience"}/>
                <VerticalTimeline lineColor={"black"} animate={true}>
                    <VerticalTimelineElement
                        className={"vertical-timeline-element--work"}
                        contentStyle={{background: 'white', color: 'black', border: "solid 2px black"}}
                        contentArrowStyle={{borderRight: '7px solid  black'}}
                        date={"January 2022 - January 2024"}
                        iconStyle={{background: 'black', color: '#fff'}}
                        visible={true}
                        icon={jobIcon()}>
                        <h3 className="vertical-timeline-element-title">Lead Programmer Robotics Club</h3>
                        <h4 className="vertical-timeline-element-subtitle">Champlain College Saint-Lambert</h4>
                        <p>Competed and represented my school in CRC Robotics competitions. Participated as
                            programmer of the robot (Arduino C++) and leader of the Java programming challenge
                            team.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={"vertical-timeline-element--education"}
                        contentStyle={{background: 'white', color: 'black', border: "solid 2px black"}}
                        contentArrowStyle={{borderRight: '7px solid  black'}}
                        date={"June 2022 - August 2022"}
                        iconStyle={{background: 'black', color: '#fff'}}
                        visible={true}
                        icon={jobIcon()}
                    >
                        <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">University of Sherbrooke, Quebec</h4>
                        <p>Built and developed web components using TypeScript and the Lit framework for a
                            federal research on computational critical thinking and logistic.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={"vertical-timeline-element--work"}
                        contentStyle={{background: 'white', color: 'black', border: "solid 2px black"}}
                        contentArrowStyle={{borderRight: '7px solid  black'}}
                        date={"February 2024 - May 2024"}
                        iconStyle={{background: 'black', color: '#fff'}}
                        icon={jobIcon()}
                        visible={true}>
                        <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">CAE</h4>
                        <p>Deployment Technician - Control Force & Motion in charge or running tests on the
                            simulators and generating reports to ensure the simulators behaviors were within the
                            allowed delta set by the engineers. Collaborated in IoT projects to improve
                            simulator behavior and features.</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
        <div ref={testamonials} style={{alignItems: "center"}} className='bg-gray-200 flex justify-center py-16 gap-52 flex-wrap'>
            <div>
                <TestimonialContainer/>
            </div>
            <div>
                <div className='border-l-[6px] border-black pl-3'>
                    <div style={{fontFamily: 'Bebas Neue, cursive'}} className='text-[30px] leading-none mb-1'>Leave An Endorsement
                    </div>
                    <div
                         className='w-[100%] md:w-[350px] text-[12px] font-sans text-[rgb(0,0,0,0.65)]'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Here you can will find endorsements from past colleagues and employers. If you would like to leave an endorsement, please fill out the form below and don't forget to include your name and company where you worked with me.
                    </div>
                </div>

                <div style={{fontFamily: 'Bebas Neue, cursive'}} className='md:w-96'>
                    <form action="" className='flex flex-col gap-7'>

                        <div className='flex-col md:flex-row flex gap-5'>
                            <div>
                                <input
                                    className='w-[100%] border-b-[1px] border-[rgba(0,0,0,0.3)] md:w-44 focus:px-3 duration-150 ease-in-out'
                                    type="text" name="" id="" placeholder='Full Name'/>
                            </div>
                            <div>
                                <input
                                    className='w-[100%] border-b-[1px] border-[rgba(0,0,0,0.3)] md:w-44 focus:px-3 duration-150 ease-in-out'
                                    type="text" name="" id="" placeholder='Company'/>
                            </div>
                        </div>
                        <div>
                            <textarea
                                className='border-b-[1px] border-[rgba(0,0,0,0.3)] w-[100%] h-20 focus:px-3 focus:pt-3 duration-150 ease-in-out'
                                placeholder='Message...'></textarea>
                        </div>
                        <div className='flex gap-3 md:mb-0'>
                            <button style={{alignItems: "center"}}
                                    className='flex justify-center w-10 h-10 bg-black rounded-full shadow-lg hover:scale-[105%] duration-200 ease-in-out'
                                    type='submit'>{sendIconSVG()}</button>
                            <button style={{alignItems: "center"}}
                                    className='flex justify-center w-10 h-10 bg-white rounded-full border border-[lightgray] shadow-md hover:scale-[105%] duration-200 ease-in-out'
                                    type='reset'>{clearIconSVG()}</button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    <div ref={contactMeSection}>
        <Section goToSectionRef={contactMeSection} scrollTo={scrollToSection} showArrow={false}>
            <div className={"flex flex-col"}>
                <SectionTitle title={"Contact Me"}/>
                <div style={{alignItems: "center"}} className="flex flex-row gap-44 justify-center">

                </div>
            </div>
        </Section>
    </div>
</>
)
    ;
}
