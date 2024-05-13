'use client';
import {useEffect, useState} from "react";
import axios from "axios";
import set = gsap.set;

function TestimonialContainer() {
    interface EndorsementResponse {
        id: string;
        name: string;
        company: string;
        comment: string;
        date: Date;
        status?: string;
    }

    const [activeTestimonial, setActiveTestimonial] = useState<EndorsementResponse | any>({})

    const[testimonialName, setTestimonialName] = useState('')
    const[testimonialCompany, setTestimonialCompany] = useState('')
    const[testimonialComment, setTestimonialComment] = useState('')
    const[testimonialDate, setTestimonialDate] = useState('')

    const refreshIcon = () => {
        return (
            <svg width="15" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M50 100C36.0417 100 24.2187 95.1562 14.5312 85.4687C4.84375 75.7812 0 63.9583 0 50C0 36.0417 4.84375 24.2187 14.5312 14.5312C24.2187 4.84375 36.0417 0 50 0C57.1875 0 64.0625 1.48333 70.625 4.45C77.1875 7.41667 82.8125 11.6625 87.5 17.1875V0H100V43.75H56.25V31.25H82.5C79.1667 25.4167 74.6104 20.8333 68.8312 17.5C63.0521 14.1667 56.775 12.5 50 12.5C39.5833 12.5 30.7292 16.1458 23.4375 23.4375C16.1458 30.7292 12.5 39.5833 12.5 50C12.5 60.4167 16.1458 69.2708 23.4375 76.5625C30.7292 83.8542 39.5833 87.5 50 87.5C58.0208 87.5 65.2604 85.2083 71.7188 80.625C78.1771 76.0417 82.7083 70 85.3125 62.5H98.4375C95.5208 73.5417 89.5833 82.5521 80.625 89.5313C71.6667 96.5104 61.4583 100 50 100Z"
                    fill="white"/>
            </svg>
        )
    }

    const LoadingIcon = () => {
        return (
            <svg className="animate-spin" width="30" viewBox="0 0 100 100" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M50 100C36.0417 100 24.2187 95.1562 14.5312 85.4687C4.84375 75.7812 0 63.9583 0 50C0 36.0417 4.84375 24.2187 14.5312 14.5312C24.2187 4.84375 36.0417 0 50 0C57.1875 0 64.0625 1.48333 70.625 4.45C77.1875 7.41667 82.8125 11.6625 87.5 17.1875V0H100V43.75H56.25V31.25H82.5C79.1667 25.4167 74.6104 20.8333 68.8312 17.5C63.0521 14.1667 56.775 12.5 50 12.5C39.5833 12.5 30.7292 16.1458 23.4375 23.4375C16.1458 30.7292 12.5 39.5833 12.5 50C12.5 60.4167 16.1458 69.2708 23.4375 76.5625C30.7292 83.8542 39.5833 87.5 50 87.5C58.0208 87.5 65.2604 85.2083 71.7188 80.625C78.1771 76.0417 82.7083 70 85.3125 62.5H98.4375C95.5208 73.5417 89.5833 82.5521 80.625 89.5313C71.6667 96.5104 61.4583 100 50 100Z"
                    fill="lightgray"/>
            </svg>
        )
    }

    const profileIcon = () => {
        return (
            <svg width="30" className='mt-2' viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.8341 18.8721C25.4622 20.1142 27.703 22.0477 29.3167 24.4655C30.9304 26.8832 31.8563 29.6943 31.9953 32.5978C32.0136 32.8638 31.9786 33.1308 31.8923 33.383C31.8061 33.6353 31.6703 33.8678 31.493 34.0669C31.3156 34.266 31.1003 34.4277 30.8596 34.5425C30.6189 34.6572 30.3578 34.7227 30.0915 34.7352C29.8251 34.7476 29.559 34.7067 29.3087 34.6149C29.0583 34.5231 28.8289 34.3822 28.6337 34.2005C28.4386 34.0189 28.2817 33.8 28.1723 33.5569C28.0629 33.3137 28.0032 33.0512 27.9966 32.7846C27.8511 29.7003 26.5234 26.7904 24.2892 24.6591C22.0549 22.5278 19.0857 21.3387 15.9979 21.3387C12.9102 21.3387 9.94097 22.5278 7.70672 24.6591C5.47248 26.7904 4.14479 29.7003 3.99927 32.7846C3.96331 33.3067 3.72436 33.794 3.33359 34.142C2.94282 34.4901 2.43129 34.6713 1.90855 34.6469C1.38581 34.6225 0.893415 34.3943 0.536805 34.0113C0.180195 33.6283 -0.0122765 33.1209 0.000607536 32.5978C0.139042 29.6945 1.06442 26.8835 2.67769 24.4657C4.29096 22.0479 6.53137 20.1144 9.1591 18.8721C7.47478 17.4672 6.26411 15.5775 5.69177 13.4602C5.11943 11.3429 5.21321 9.10061 5.96034 7.03845C6.70748 4.9763 8.0717 3.19435 9.86744 1.93499C11.6632 0.675631 13.8033 0 15.9966 0C18.1899 0 20.33 0.675631 22.1258 1.93499C23.9215 3.19435 25.2857 4.9763 26.0329 7.03845C26.78 9.10061 26.8738 11.3429 26.3014 13.4602C25.7291 15.5775 24.5184 17.4672 22.8341 18.8721ZM22.6713 10.6692C22.6713 8.89932 21.9682 7.20193 20.7167 5.95043C19.4652 4.69894 17.7678 3.99586 15.9979 3.99586C14.2281 3.99586 12.5307 4.69894 11.2792 5.95043C10.0277 7.20193 9.3246 8.89932 9.3246 10.6692C9.3246 12.4391 10.0277 14.1365 11.2792 15.388C12.5307 16.6395 14.2281 17.3425 15.9979 17.3425C17.7678 17.3425 19.4652 16.6395 20.7167 15.388C21.9682 14.1365 22.6713 12.4391 22.6713 10.6692Z"
                    fill="black"/>
            </svg>
        )
    }

    const [isLoadingNewTestimonials, setIsLoadingNewTestimonials] = useState(false)

    const getNewTestimonial = async () => {
        setIsLoadingNewTestimonials(true)
        axios.get(" https://api.nicportfolio.tech/api/v1/services/endorsementService")
            .then((response) => {
                const data = response.data
                const randomIndex = Math.floor(Math.random() * data.length)
                setTestimonialName(data[randomIndex].name)
                setTestimonialCompany(data[randomIndex].company)
                setTestimonialComment(data[randomIndex].comment)
                setTestimonialDate(data[randomIndex].date)
            })
            .catch((error) => {
                console.log(error)
            })
        setTimeout(() => {
            setIsLoadingNewTestimonials(false)
        }, 1000);
    }

    useEffect(() => {
        getNewTestimonial()
    }, [])
    useEffect(() => {
        console.log(activeTestimonial.name)
    }, [activeTestimonial])
    return (

        <div className={"bg-white rounded-[20px]"}>
            <div className='absolute'>
                <div className='absolute bg-gray-200 w-10 h-10 rounded-full animate-ping'></div>
                <button onClick={() => {
                    getNewTestimonial()
                }} style={{alignItems: "center"}}
                        className='absolute z-100 bg-black text-white w-10 h-10 rounded-full flex justify-center'>
                    {refreshIcon()}
                </button>
            </div>

            <div className='px-10 py-10 border w-[100%] h-[270px] md:w-[25rem] rounded-lg'>
                {isLoadingNewTestimonials ?
                    <div style={{alignItems: "center"}} className='flex justify-center h-full'>
                        {LoadingIcon()}
                    </div>
                    :
                    <>
                        <div style={{alignItems: "center"}} className='flex flex-row gap-3'>
                            <div style={{alignItems: "center"}}
                                 className='w-12 h-12 bg-white border-2 border-black shadow-md rounded-full flex justify-center'>{profileIcon()}</div>
                            <div className='flex flex-col'>
                                <div style={{fontFamily: 'Bebas Neue, cursive'}}
                                     className="leading-none">{testimonialName}</div>
                                <div className="leading-none text-sm">{testimonialCompany}</div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 mt-5 text-justify text-sm italic opacity-60'>
                            <div>{testimonialComment}</div>
                            <span className='italic opacity-50'>{testimonialDate}</span>

                        </div>
                    </>}

            </div>
        </div>
    )
}

export default TestimonialContainer