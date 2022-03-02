import {PlayIcon} from "../../Icons";
import {useState} from "react";

export default function Section({item}){
    const [cursor, setCursor] = useState(false);
    const [play, setPlay] = useState(false);

    return (
        <div id={item.id}
             onMouseOver={()=>setCursor(true)}
             onMouseOut={()=>setCursor(false)}
             className={'max-w-[32.625rem] h-20 bg-recently hover:bg-recentlyActive cursor-pointer ' +
                 'transition duration-300 ease-in-out mt-4 rounded flex items-center justify-between'}>
            <div className={'flex items-center gap-x-4'}>
                <img src={item.image} className={'w-20 rounded'} alt={item.title}/>
                <span className={'font-semibold text-sm '}>
                                {item.title}
                            </span>
            </div>

            <button
                onClick={()=>setPlay(!play)}
                className={`mr-5 bg-[#1ed760] w-12 h-12 rounded-full shadow-xxl flex items-center 
                    justify-around transition duration-200 ease-in-out ${cursor ? 'show' : 'hide'}  shadow-2xl`}>
                <PlayIcon play={play} />
            </button>
        </div>
    )
}