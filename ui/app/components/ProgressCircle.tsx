import {Circle} from 'rc-progress';
interface ProgressCircleProps {
    percentage: number;
    text: string;
}

export default function ProgressCircle(progressCircleProps: ProgressCircleProps){
    return (
        <div className='w-24'>
            <div style={{fontFamily: 'Bebas Neue, cursive'}}
                 className='absolute ml-[35px] mt-[35px] text-2xl'>{progressCircleProps.percentage}%
            </div>
            <div>
                <Circle percent={progressCircleProps.percentage} strokeWidth={6} strokeColor="black"/>
                <div style={{fontFamily: 'Bebas Neue, cursive'}}
                     className='flex justify-center text-lg pt-1'>{progressCircleProps.text}</div>
            </div>
        </div>
    )
}