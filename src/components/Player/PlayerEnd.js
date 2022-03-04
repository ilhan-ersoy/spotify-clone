import {ChooseDeviceIcon, FullScreenIcon, MicIcon, QueqeIcon, VolumeNormalIcon} from "../../Icons";
import { Range, getTrackBackground } from "react-range";

import {useAudio} from "react-use";
import {useState} from "react";

export default function PlayerEnd({controls}){
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;

    const [values, setValues] = useState([50]);

    return (
        <div className={'w-[30%] flex items-center gap-x-5 justify-end'}>
            <button className={'text-white text-opacity-70 hover:text-opacity-100'}>
                <MicIcon/>
            </button>
            <button className={'text-white text-opacity-70 hover:text-opacity-100'}>
                <QueqeIcon/>
            </button>
            <button className={'text-white text-opacity-70 hover:text-opacity-100'}>
                <ChooseDeviceIcon/>
            </button>
            <div className={''}>
                <div className={'flex items-center gap-2 w-[7.813rem]'}>
                    <VolumeNormalIcon/>
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
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: "36px",
                                    display: "flex",
                                    width: "100%"
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
        </div>
    )
}