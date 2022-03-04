import {
    BottomPlayIcon, ChooseDeviceIcon, FullScreenIcon,
    HeartFilledIcon,
    LoopIcon, MicIcon, PictureInPictureIcon,
    PlayerNextIcon,
    PlayerPrevIcon, QueqeIcon,
    ShuffleIcon
} from "../Icons";
import {useAudio} from 'react-use';

import {useEffect, useState} from "react";
import {secondsToTime} from "./Utils/utils";
import RangeCustomize from "./RangeCustomize";
import PlayerEnd from "./Player/PlayerEnd";

export default function Player() {
    const STEP = 0.1;
    const MIN = 0;

    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    });



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
            <div className={'max-w-[45.125rem] w-[40%]'}>
                <div className={'flex flex-col items-center gap-y-1'}>
                    <div className={'flex items-center gap-x-8'}>
                        <button className={'text-white text-opacity-70 flex items-center justify-center hover:text-opacity-100'}>
                            <ShuffleIcon/>
                        </button>
                        <button
                            className={'text-white text-opacity-70 flex items-center justify-center hover:text-opacity-100'}>
                            <PlayerPrevIcon/>
                        </button>
                        <button
                            onClick={()=>state?.paused ? controls.play() : controls.pause()}
                            className={'text-white text-opacity-70 flex items-center justify-center hover:scale-110 bg-white rounded-full w-8 h-8 '}>
                            <BottomPlayIcon playing={!state?.paused}/>
                        </button>
                        <button className={'text-white text-opacity-70 flex items-center justify-center hover:text-opacity-100'}>
                            <PlayerNextIcon/>
                        </button>
                        <button className={'text-white text-opacity-70 flex items-center justify-center hover:text-opacity-100'}>
                            <LoopIcon/>
                        </button>
                    </div>
                    <div className={'w-full flex items-center gap-x-2'}>
                        {audio}
                        {/*{JSON.stringify(state, null, 2)}*/}
                        <div className={'text-[0.688rem] text-white text-opacity-70'}>
                            {secondsToTime(state?.time)}
                        </div>
                        <RangeCustomize
                            state={state}
                            min={MIN}
                            step={STEP}
                            controls={controls}
                        />
                        <div className={'text-[0.688rem] text-white text-opacity-70'}>
                            {secondsToTime(state?.duration)}
                        </div>
                    </div>
                </div>
            </div>

            <PlayerEnd controls = {controls}/>
        </div>
    )
}

