import {PlayIcon} from "../../Icons";
import {useState} from "react";

export default function Section({item,type}){
    const [play, setPlay] = useState(false);
    const [cursor, setCursor] = useState(false);
    // ${cursor ? 'show' : 'hide '}
    return (
        <>
                <div
                    id={item.id}
                    onMouseOver={()=>setCursor(true)}
                    onMouseOut={()=>setCursor(false)}
                    className={'flex flex-col bg-[#181818] w-[9.42vw] h-[13.48vw] items-center rounded transition duration-280 ease-in-out cursor-pointer hover:bg-[#292929] relative overflow-hidden'}>


                            <img src={item.image} className={'w-[8.428vw] rounded-full mt-3'} alt=""/>
                            <button
                                onClick={()=>setPlay(!play)}
                                className={`mr-5 bg-[#1ed760] w-12 h-12 rounded-full shadow-xxl flex items-center 
                                        justify-around transition duration-200 ease-in-out shadow-2xl absolute top-[6.625rem] left-[6.75rem] ${cursor ? 'show' : 'hide '}`}>
                                <PlayIcon play={play} />
                            </button>


                    <span className={'flex flex-col items-start min-h-14 pb-8 pt-2 pl-3 w-40 text-m'}>
                        <h5 className={'font-semibold text-m'}>{item.title}</h5>
                        <p className={'text-s text-gray-400 mt-1'}>Sanatçı</p>
                    </span>
                </div>
        </>
    )
}