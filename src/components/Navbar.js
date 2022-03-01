import {PrevIcon} from "../Icons";
import {NextIcon} from "../Icons";
import {useHistory, useRouteMatch} from "react-router-dom";
import UserBar from "./Navbar/UserBar";

export default function Navbar() {

    const history = useHistory();
    const isSearch = useRouteMatch('/search');

    return (
        <div className={'h-[3.75rem] mt-0.1 px-8 flex items-center justify-between'}>
            <div className={'flex items-center justify-between'}>
                <nav className={'flex gap-x-4'}>
                    <button onClick={()=>{history.goBack()}} className={'w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full'}>
                        <PrevIcon/>
                    </button>
                    <button onClick={()=>history.goForward()} className={'w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full'}>
                        <NextIcon/>
                    </button>
                </nav>
                <span>
                    {isSearch && (
                        <div style={{marginLeft:'30px'}}>
                            Search Bar
                        </div>
                    )}
                </span>
            </div>
            <UserBar/>
        </div>
    )
}

