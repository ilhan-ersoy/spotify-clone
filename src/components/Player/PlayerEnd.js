import {
    ChooseDeviceIcon,
    FullScreenIcon,
    MicIcon,
    QueqeIcon, SelectedDeviceIcon,
    VolumeHighIcon,
    VolumeLowIcon, VolumeMuteIcon,
    VolumeNormalIcon
} from "../../Icons";
import { Range, getTrackBackground } from "react-range";

import {useAudio} from "react-use";
import {useEffect, useState} from "react";
import ChooseDevice from "./ChooseDevice";
import {useSelector} from "react-redux";

export default function PlayerEnd({controls}){
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;

    const [values, setValues] = useState([50]);
    const [show, setShow] = useState(false);
    const [micIcon, setMicIcon] = useState(<VolumeLowIcon/>);
    const device = useSelector(state => state.devices.device);
    useEffect(() => {
        return () => {
            if (values > 0 && values < 33){
                setMicIcon(<VolumeLowIcon/>)
            }
            else if (values > 33 && values < 66) {
                setMicIcon(<VolumeNormalIcon/>)
            }
            else if (values > 66 && values <= 100) {
                setMicIcon(<VolumeHighIcon/>)
            }
            else {
                setMicIcon(<VolumeMuteIcon/>)
            }
        };
    }, [values]);


    return (
        <>
            <button className={'text-white text-opacity-70 hover:text-opacity-100'}>
                <MicIcon/>
            </button>
            <button className={'text-white text-opacity-70 hover:text-opacity-100'}>
                <QueqeIcon/>
            </button>

            <div className={'flex items-center'}>

                <button onClick={()=> {
                    setShow(!show)
                }} className={'text-white text-opacity-70 hover:text-opacity-100 relative'}>
                    <ChooseDevice show={show} setShow={setShow}/>
                    {device ? <SelectedDeviceIcon/> : <ChooseDeviceIcon/>}
                </button>
            </div>

            <div className={''}>
                <div className={'flex items-center gap-2 w-[7.813rem]'}>
                    {micIcon}
                    <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(values) => {
                            setValues(values)
                            controls?.volume(values/100)
                        }}
                        renderTrack={({ props, children }) => (
                            <div
                                className={'flex w-full h-[2.25rem]'}
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: "5px",
                                        width: "100%",
                                        borderRadius: "4px",
                                        background: getTrackBackground({
                                            values: values,
                                            colors: ["#1db954", "#535353"],
                                            min: MIN,
                                            max: MAX
                                        }),
                                        alignSelf: "center"
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                className={`opacity-0 group-hover:opacity-100 ${isDragged && 'opacity-100'}`}
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "12px",
                                    width: "12px",
                                    borderRadius: "100%",
                                    backgroundColor: "#FFF",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 2px 6px #AAA"
                                }}
                            >
                            </div>
                        )}
                    />
                </div>
            </div>
            <button className={'text-white text-opacity-70'}>
                <FullScreenIcon/>
            </button>
        </>
    )
}