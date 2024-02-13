import {useState} from "react";

interface projectProps{
    title: string
    description: string,
    githubLink: string,
    pictureClassName: string
}
export default function ProjectContainer({title, description,githubLink, pictureClassName}: projectProps) {

    const [showDetails, setShowDetails] = useState(false)


    return (
        <div>
            <div

                onMouseLeave={() => {setShowDetails(false)}}

                onMouseOver={() => {setShowDetails(true)}}

                className={`bg-white shadow-xl w-[350px] h-[500px] rounded-[40px] opacity-50 hover:opacity-100 hover:scale-105 duration-300 ease-in-out ${pictureClassName} `}
            >
                {
                    showDetails &&
                    <div className="px-10 py-10 bg-[rgb(0,0,0,0.5)] h-full rounded-[40px] backdrop-blur-2xl">

                        <div className="flex flex-col h-full justify-between">

                            <div>
                                <div className="text-white text-2xl font-semibold">{title}</div>
                                <div className="text-white opacity-75 mt-2 font-thin">{description}</div>
                            </div>

                            <div>
                                <div className="flex justify-end">
                                    <a target={'_blank'} href={`${githubLink}`} className="animate-pulse border-2 border-white px-5 py-2 text-white rounded-full font-medium hover:scale-105 duration-300 ease-in-out ">Github +</a>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
