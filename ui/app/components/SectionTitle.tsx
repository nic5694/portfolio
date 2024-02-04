interface SectionTitleProps {
    title: string;
}
export default function SectionTitle({
                                         title,
                                        }: SectionTitleProps) {
    return (
        <div style={{fontFamily: 'Bebas Neue, cursive'}}
             className='flex pl-[5%] lg:justify-center lg:pl-0 py-3 text-5xl'>{title}
        </div>
    )
}