import {PlayIcon} from "../../Icons";
import {useState} from "react";

export default function LikedSongsSec(){
    const [play, setPlay] = useState(false);
    const [cursor, setCursor] = useState(true);
    return (
        <div
            onMouseOver={()=>setCursor(true)}
            onMouseOut={()=>setCursor(false)}
            className={'bg-blue-200 w-[24.063rem] h-[16.125rem] rounded-lg bg-gradient-to-br from-blue-800 to-indigo-300'}>
            <div className={'h-[100%] flex flex-col justify-center'}>
                <div className={'flex h-[60%] flex-col justify-between '}>
                    <div className={'ml-5 flex gap-x-2 items-center'}>
                        <div className={'flex h-full gap-x-1 text-m '}>
                            <p>Stabil</p> <span className={'opacity-60'}>BILLBOARD</span>
                            <p>Stabil</p> <span className={'opacity-60'}>BILLBOARD</span>
                        </div>
                    </div>
                    <div className={'ml-5 flex flex-col'}>
                        <div className={' text-3xl font-bold'}>
                            Liked Songs
                        </div>
                        <div className={'mt-1 text-sm'}>
                            120 Liked Songs
                        </div>
                    </div>
                </div>
                <div className={'shadow-2xl'}>
                    <button
                        onClick={()=>setPlay(!play)}
                        className={`mr-5 bg-[#1ed760] w-12 h-12 rounded-full shadow-xxl flex items-center 
                                        justify-around transition duration-200 ease-in-out shadow-2xl absolute top-[22.438rem] left-[36.75rem] ${cursor ? 'show' : 'hide'}`}>
                        <PlayIcon play={play} />
                    </button>
                </div>
            </div>
        </div>
    )
}