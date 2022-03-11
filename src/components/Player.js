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
        src: 'https://rr5---sn-qxoedn7k.googlevideo.com/videoplayback?expire=1646968206&ei=LmkqYvGVLtyZsfIP1dKouAg&ip=45.83.131.86&id=o-ADGP6ZU-fN2XpchaO1UR0YhmL1Pvelu8mLXG6qLqCHFs&itag=251&source=youtube&requiressl=yes&vprv=1&mime=audio%2Fwebm&gir=yes&clen=4142698&dur=247.841&lmt=1575733849176420&keepalive=yes&fexp=24001373,24007246,24162927&c=ANDROID&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgPLFyD_nsDgNpI6LBw5sd3OQUZ0NQt_6DJfjZEP5FXKcCIQCdZhSrdDZ0di3IpyXV2ySnYOQxOKQge-jr8pL0C4VLUw%3D%3D&title=Stranger%20Things%20Theme%20Song%20(C418%20REMIX)&redirect_counter=1&rm=sn-8xgp1vo-ioae7l&req_id=2b52cb7b452da3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=_t&mm=29&mn=sn-qxoedn7k&ms=rdu&mt=1646946543&mv=m&mvi=5&pl=23&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgByMP4p5m716O_nZWCaV4EwivUP8rTltV8ld-FWB_rvkCIQCPN7jk66CXfTuV-RpCZzx5Ok54nrn6LwLoee1TF9yqQw%3D%3D'
    });


    return (
        <div className="h-24 flex justify-between items-center px-4  bg-bottomBar border-t border-gray-900 h-full">
            <div className={'h-14 w-[30%] flex items-center gap-4'}>
                <div className={'flex items-center'}>
                    <img src={'https://i.scdn.co/image/ab67616d00004851e1936cf3e879a47f0deaece2'} className={'w-14'} alt=""/>
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

