export default function SectionSeeAll({fav}){
    return (
        <div className={`w-[11.56rem] h-[11.56rem] ${fav.bgColor} rounded-lg overflow-hidden`}>
            <a href="#" className={'rounded-lg h-[13.75rem] bg-[#ba5d08]'}>
                <h3 className={'text-2xl font-semibold m-5'}>{fav.type}</h3>
                <span className={'w-full flex justify-end'}>
                    <img className={'h-[6.25rem] w-[6.25rem] custom-transform'} src={fav.image} alt=""/>
                </span>
            </a>
        </div>
    )
}