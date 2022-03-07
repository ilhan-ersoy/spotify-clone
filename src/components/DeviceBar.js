import {SpeakerIcon} from "../Icons";

export default function DeviceBar(){
    return (
        <div className={'bottomAlert w-full h-[20rem] bg-[#80da60] text-black text-s font-semibold flex items-center '}>
            <div className={'flex justify-end items-center gap-x-2 w-[95%]'}>
                <SpeakerIcon/>
                <p className={''}>ilhan’s MacBook Pro cihazında dinleniyor</p>
            </div>
        </div>
    )
}