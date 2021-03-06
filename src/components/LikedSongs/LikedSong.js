import {LikedSongsIcon, LsPlayIcon, LsPlayMoreIcon} from "../../Icons";
import {useState} from "react";

export default function LikedSong(){

    const [mouseOver, setMouseOver] = useState(true);

    return (
        <div
            onMouseOver={()=>setMouseOver(false)}
            onMouseOut={()=>setMouseOver(true)}
            className={'flex justify-between items-center rounded hover:ls-hover px-6 py-2 max-h-[3.5rem] '}>
            <div className={'flex items-center gap-x-4'}>
                {mouseOver
                    ?
                    <span className={'text-gray-400 w-1 mr-2'}>1</span>
                    :
                    <span className={'text-white w-1 mr-2'}><LsPlayIcon size={16}/></span>
                }
                <img style={{width:'40px'}} src="https://i.scdn.co/image/ab67616d00004851072e9faef2ef7b6db63834a3" alt=""/>
                <div>
                    <h4>SICKO MODE</h4>
                    <div className={'flex items-center gap-x-2'}>
                        <span className={'text-black bg-[#a1a1a3] w-[0.93rem] text-center'} style={{fontSize:'11px'}}>E</span>
                        <p className={'text-s text-gray-400'}>
                            Travis Scott
                        </p>
                    </div>
                </div>
            </div>
            <div className={'text-gray-400 text-sm'}>ASTROWORLD</div>
            <div className={'text-gray-400 text-sm'}>3 hours ago</div>
            <div className={'flex items-center justify-between w-[8%]'}>
                <div className={'flex items-center gap-x-4'}>
                    <div>
                        <LikedSongsIcon size={16} color={'#1db954'}/>
                    </div>
                    <div className={'text-sm text-gray-400'}>
                        5:12
                    </div>
                </div>
                {!mouseOver && (<div>
                    <LsPlayMoreIcon size={16} color={'white'}/>
                </div>)}
            </div>
        </div>
    )
}