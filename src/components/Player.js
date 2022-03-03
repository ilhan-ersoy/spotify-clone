import {
    BottomPlayIcon,
    HeartFilledIcon,
    LoopIcon, PictureInPictureIcon,
    PlayerNextIcon,
    PlayerPrevIcon,
    PlayIcon,
    ShuffleIcon
} from "../Icons";
import { Range, getTrackBackground } from "react-range";
import {useState} from "react";

export default function Player() {
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;

    const [values, setValues] = useState([50]);


    return (
        <div className="h-24 flex justify-between items-center px-4  bg-bottomBar border-t border-gray-900 h-full">
            <div className={'h-14 w-[30%] flex items-center gap-4'}>
                <div className={'flex items-center'}>
                    <img src={'https://i.scdn.co/image/ab67616d000048516fa94edbbffc59e019e796ae'} className={'w-14'} alt=""/>
                    <div className={'mx-3'}>
                        <h5 className={'text-s'}>Zgt</h5>
                        <p className={'text-xxs text-gray-400'}>Motive</p>
                    </div>
                </div>
                <div className={'flex items-center gap-4'}>
                    <button className={'text-[#1db954]'}>
                        <HeartFilledIcon/>
                    </button>
                    <button className={'text-white text-opacity-70 hover:text-opacity-100'}>
                        <PictureInPictureIcon/>
                    </button>
                </div>

            </div>
            <div className={''}>
                <div className={'flex flex-col items-center gap-y-1'}>
                    <div className={'flex items-center gap-x-8'}>
                        <button className={'text-white text-opacity-70 flex items-center justify-center hover:text-opacity-100'}>
                            <ShuffleIcon/>
                        </button>
                        <button className={'text-white text-opacity-70 flex items-center justify-center hover:text-opacity-100'}>
                            <PlayerPrevIcon/>
                        </button>
                        <button className={'text-white text-opacity-70 flex items-center justify-center hover:scale-110 bg-white rounded-full w-8 h-8 '}>
                            <BottomPlayIcon/>
                        </button>
                        <button className={'text-white text-opacity-70 flex items-center justify-center hover:text-opacity-100'}>
                            <PlayerNextIcon/>
                        </button>
                        <button className={'text-white text-opacity-70 flex items-center justify-center hover:text-opacity-100'}>
                            <LoopIcon/>
                        </button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className={'w-[30%]'}>

            </div>
        </div>
    )
}

