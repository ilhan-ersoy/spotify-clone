import {getTrackBackground, Range} from "react-range";

export default function RangeCustomize({state,min,step,controls}){
    return (
        <Range
            values={[state?.time]}
            step={step}
            min={min}
            max={state?.duration || 1}
            onChange={(values) => controls.seek(values[0])}
            renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    className={'group'}
                    style={{
                        ...props.style,
                        height: "36px",
                        display: "flex",
                        width: "100%",
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: "4px",
                            width: "100%",
                            borderRadius: "4px",
                            background: getTrackBackground({
                                values: [state?.time],
                                colors: ["#1db954", "#535353"],
                                min: min,
                                max: state?.duration || 1
                            }),
                            alignSelf: "center"
                        }}
                        className={''}
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
    )
}