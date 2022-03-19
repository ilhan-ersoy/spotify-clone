import {
    BottomPlayIcon, ChooseDeviceIcon, FullScreenIcon,
    HeartFilledIcon,
    LoopIcon, MicIcon, NoMusic, PictureInPictureIcon,
    PlayerNextIcon,
    PlayerPrevIcon, QueqeIcon,
    ShuffleIcon
} from "../Icons";
import {useAudio} from 'react-use';

import {useEffect, useState} from "react";
import {secondsToTime} from "./Utils/utils";
import RangeCustomize from "./RangeCustomize";
import PlayerEnd from "./Player/PlayerEnd";
import {useDispatch, useSelector} from "react-redux";
import {setControls, setPlay} from "../Redux/playerSlice";

export default function Player() {
    const STEP = 0.1;
    const MIN = 0;
    const dispatch = useDispatch();
    const current = useSelector(state => state.player.current)
    const play = useSelector(state => state.player.play)
    const [audio, state, controls, ref] = useAudio({
        src: current?.mp3Src
    });

    useEffect(()=>{
        dispatch(setControls(controls))
        dispatch(setPlay(state.playing))
    }, [])

    useEffect(()=>{
        controls.play()
    }, [current])

    return (
        <div className="h-24 flex justify-between items-center px-4  bg-bottomBar border-t border-gray-900 h-full">
            <div className={'h-14 w-[30%] flex items-center gap-4'}>
                <div className={'flex items-center'}>
                    <img src={current?.image} className={'w-14'} alt=""/>
                    <div className={'mx-3'}>
                        <h5 className={'text-s'}>Stranger Things</h5>
                        <p className={'text-xxs text-gray-400'}>Kyle Dixon & Michael Stein</p>

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

            <div className={'w-[30%] flex items-center gap-x-5 justify-end'}>
                <PlayerEnd controls = {controls}/>
            </div>
        </div>
    )
}

