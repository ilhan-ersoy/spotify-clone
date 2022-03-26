import {PlayIcon} from "../../Icons";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setControls, setCurrent} from "../../Redux/playerSlice";
import {setBackground} from "../../Redux/themeSlice";

export default function SectionHome({item}){
    const [cursor, setCursor] = useState(false);
    const dispatch = useDispatch();
    const background = useSelector(state => state.theme.background)
    const current = useSelector(state=>state.player.current);
    const controls = useSelector(state => state.player.controls)
    const play = useSelector(state => state.player.play);
    const updateCurrent = () => {
        dispatch(setCurrent(item));
    }

    const onMouseOver = () => {
        setCursor(true)
        // dispatch(setBackground(item.color))

    }
    const onMouseOut = () => {
        setCursor(false)
    }

    return (
        <div
             id={item.id}
             onMouseOver={()=>onMouseOver()}
             onMouseOut={()=>onMouseOut()}
             className={'max-w-[32.625rem] h-20 bg-recently hover:bg-recentlyActive cursor-pointer ' +
                 'transition duration-300 ease-in-out mt-4 rounded flex items-center justify-between'}>
            <div className={'flex items-center gap-x-4'}>
                <img src={item.image} className={'w-20 rounded'} alt={item.title}/>
                <span className={'font-semibold text-sm '}>
                    {item.title}                
                </span>
            </div>

            <button
                onClick={()=>updateCurrent()}
                className={`mr-5 bg-[#1ed760] w-12 h-12 rounded-full shadow-xxl flex items-center 
                    justify-around transition duration-200 ease-in-out ${cursor ? 'show' : 'hide'}  shadow-2xl`}>
                <PlayIcon play={item.id === current.id} />
            </button>
        </div>
    )
}