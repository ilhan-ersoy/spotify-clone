import {InputSearchIcon, PrevIcon, SearchIcon} from "../Icons";
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
        <div className={'h-[3.75rem] mt-0.1 px-8 flex items-center justify-between '}>
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
                        <div className="mr-auto ml-2 relative">
                            <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
                                <SearchIcon size={24} name="search" />
                            </label>
                            <input type="text" id="search-input" className="h-10 pl-12 outline-none text-black font-medium bg-white rounded-3xl text-sm placeholder-black/50 max-w-full w-[22.75rem]" placeholder="Sanatçılar, şarkılar veya podcast'ler"/>
                        </div>
                    )}
                </span>
            </div>
            {auth ? <UserBar setAuth={setAuth}/> :<Register/>}
        </div>
    )
}

