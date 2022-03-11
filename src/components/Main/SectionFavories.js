export default function SectionFavories({fav}){
    return (
            <div className={`w-[23.875rem] h-[13.75rem] bg-[${fav.bgColor}] rounded-lg overflow-hidden`}>
            <a href="#" className={'rounded-lg h-[13.75rem] bg-[#ba5d08]'}>
                <h3 className={'text-5xl font-semibold m-5'}>{fav.type}</h3>
                <span className={'w-full flex justify-end'}>
                    <img className={'h-32 w-32 custom-transform'} src={fav.image} alt=""/>
                </span>
            </a>
        </div>
    )
}