import {PrevIcon} from "../Icons";
import {NextIcon} from "../Icons";
import {useHistory} from "react-router-dom";
import Auth from "./Navbar/Auth";

export default function Navbar() {

    const history = useHistory();

    return (
        <div className={'h-[3.75rem] px-8 flex items-center justify-between'}>
            <nav className={'flex gap-x-4'}>
                <button onClick={()=>{history.goBack()}} className={'w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full'}>
                    <PrevIcon/>
                </button>
                <button onClick={()=>history.goForward()} className={'w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full'}>
                    <NextIcon/>
                </button>
            </nav>
            <Auth/>
        </div>
    )
}

