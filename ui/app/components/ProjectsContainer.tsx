import Link from "next/link";
import img from "../../images/landing.jpg"
import Image from "next/image";

interface ProjectsContainerProps{
    name: string,
    description: string,
    link: string

}
export default function ProjectsContainer (ProjectsContainerProps: ProjectsContainerProps) {
    const GitHubSVG = () => {
        return (
            <svg width="29" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0C16.5049 0 14.0342 0.49145 11.729 1.44629C9.42383 2.40113 7.32928 3.80066 5.56497 5.56497C2.00178 9.12817 0 13.9609 0 19C0 27.398 5.453 34.523 12.996 37.05C13.946 37.202 14.25 36.613 14.25 36.1V32.889C8.987 34.029 7.866 30.343 7.866 30.343C6.992 28.139 5.757 27.55 5.757 27.55C4.028 26.372 5.89 26.41 5.89 26.41C7.79 26.543 8.797 28.367 8.797 28.367C10.45 31.255 13.243 30.4 14.326 29.944C14.497 28.709 14.991 27.873 15.523 27.398C11.305 26.923 6.878 25.289 6.878 18.05C6.878 15.941 7.6 14.25 8.835 12.901C8.645 12.426 7.98 10.45 9.025 7.885C9.025 7.885 10.621 7.372 14.25 9.823C15.751 9.405 17.385 9.196 19 9.196C20.615 9.196 22.249 9.405 23.75 9.823C27.379 7.372 28.975 7.885 28.975 7.885C30.02 10.45 29.355 12.426 29.165 12.901C30.4 14.25 31.122 15.941 31.122 18.05C31.122 25.308 26.676 26.904 22.439 27.379C23.123 27.968 23.75 29.127 23.75 30.894V36.1C23.75 36.613 24.054 37.221 25.023 37.05C32.566 34.504 38 27.398 38 19C38 16.5049 37.5086 14.0342 36.5537 11.729C35.5989 9.42383 34.1993 7.32929 32.435 5.56497C30.6707 3.80066 28.5762 2.40113 26.271 1.44629C23.9658 0.49145 21.4951 0 19 0Z" fill="black"/>
            </svg>
        )
    }

    return (
        <div className={"flex flex-col m-2 lg:w-80 h-fit md:max-w-full"}>
            <div className={"projectImage h-1/2"}>
                <Image className={"h-[100%]"} src={img} alt="alt" />
            </div>
            <div className={"h-1/2 bg-white"}>
                <div className={"lg:text-3xl xsm:text-2xl sm:text:2xl py-1 justify-start mb-2 px-6"}>{ProjectsContainerProps.name}</div>
                <div className={"text-base px-6"}>{ProjectsContainerProps.description}</div>
                <div className={"px-6 pt-3 py-2 flex"}>
                    <Link style={{alignItems: "center"}}
                        className={"border-[1.5px] pl-5 pr-2 border-black py-1 gap-3 rounded-full text-sm flex hover:gap-5 ease-in-out"}
                        href={ProjectsContainerProps.link}><span>Repository</span><span>{GitHubSVG()}</span></Link>
                </div>
            </div>
        </div>
    )

}