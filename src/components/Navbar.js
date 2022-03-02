import {InputSearchIcon, PrevIcon} from "../Icons";
import {NextIcon} from "../Icons";
import {useHistory, useRouteMatch} from "react-router-dom";
import UserBar from "./Navbar/UserBar";
import {useState} from "react";
import Register from "./Navbar/Register";

export default function Navbar() {

    const history = useHistory();
    const isSearch = useRouteMatch('/search');
    const [auth, setAuth] = useState(true);
    return (
        <div className={'h-[3.75rem] mt-0.1 px-8 flex items-center justify-between'}>
            <div className={'flex items-center justify-between'}>
                <nav className={'flex gap-x-4'}>
                    <button onClick={()=>{history.goBack()}} className={'w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full'}>
                        <PrevIcon/>
                    </button>
                    <button onClick={()=>history.goForward()} className={'w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full mr-3'}>
                        <NextIcon/>
                    </button>
                </nav>
                <span>
                    {isSearch && (
                        <nav>
                            <label htmlFor="searchInput" className={''}>
                                <InputSearchIcon/>
                                <input id='search-input' type="text" className={'text-black text-sm w-88 no-outline h-10 py-1 px-7 rounded-full text-sm'} placeholder={'Sanatçılar, şarkılar veya podcast\'ler'}/>
                            </label>
                        </nav>
                    )}
                </span>
            </div>
            {auth ? <UserBar setAuth={setAuth}/> :<Register/>}
        </div>
    )
}

