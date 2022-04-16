import {DeviceIcon, InfoIcon, SpeakerIcon} from "../../Icons";
import {useState} from "react";
import {useDispatch} from "react-redux";

import {setDevice} from "../../Redux/devicesSlice";

export default function ChooseDevice({show}){

    const [mobile, setMobile] = useState(false);
    const [desktop, setDesktop] = useState(false);
    const dispatch = useDispatch();
    return (
        <div
            className={`w-[17.5rem] h-[18.625rem] bg-black absolute bottom-[1.75rem] 
            -right-[7.75rem] p-[0.3rem] bg-[#282828] rounded shadow-2xl ${show ? 'display' : 'displayNone'} text-white flex flex-col items-center transition duration-300 ease-in-out`}>
            <div className={'flex items-center justify-center text-xl font-semibold'} style={{padding: '14px 35px 10px 14px'}}>
                <h3>Bir cihaza bağlan</h3>
                {/*<InfoIcon/>*/}
            </div>
            <div className={'py-[1rem] w-full flex items-center justify-center'}>
                <img style={{width:'180px',height:'86px'}} src="https://open.scdn.co/cdn/images/connect_header@1x.8f827808.png" alt=""/>
            </div>

            <button
                onClick={()=> {
                    setMobile(!mobile)
                    setDesktop(false)
                    dispatch(setDevice(false))
                }}
                className={`px-[0.6rem] py-2 flex items-center w-full gap-x-5 hover:bg-[#333] ${mobile && 'text-[#1db954]'}`}>
                <DeviceIcon/>
                <span className={'flex flex-col items-center gap-y-1'}>
                    <p className={'text-sm font-semibold'}>Dinlediğin Cihaz</p>
                    <div className={'flex items-center gap-x-1'}>
                        <SpeakerIcon/>
                        <span style={{fontSize:'11px'}}> Bu Web Tarayıcısı </span>
                    </div>
                </span>
            </button>

            <button
                onClick={()=> {
                    setDesktop(!desktop)
                    setMobile(false)
                    dispatch(setDevice(true))
                }}
                className={`px-[0.6rem] py-2 flex items-center w-full gap-x-5 hover:bg-[#333] ${desktop && 'text-[#1db954]'}`}>
                <DeviceIcon/>
                <span className={'flex flex-col items-center gap-y-1'}>
                    <p className={'text-sm font-semibold'}>Dinlediğin Cihaz</p>
                    <div className={'flex items-center gap-x-1'}>
                        <SpeakerIcon/>
                        <span style={{fontSize:'11px'}} className={'text-opacity-50'}> ilhan’s MacBook Pro </span>
                    </div>
                </span>
            </button>

        </div>
    )
}