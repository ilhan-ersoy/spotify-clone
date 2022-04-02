export default function SectionSeeAll({fav}){
    return (
        <div className={`w-[9.58vw] h-[9.58vw] ${fav.bgColor} rounded-lg overflow-hidden`}>
            <a href="#" className={'rounded-lg h-[13.75rem] bg-[#ba5d08]'}>
                <h3 className={'text-2xl font-semibold m-5'}>{fav.type}</h3>
                <span className={'w-full flex justify-end'}>
                    <img className={'h-[5.1vw] w-[5.1vw] custom-transform'} src={fav.image} alt=""/>
                </span>
            </a>
        </div>
    )
}