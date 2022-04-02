import {HomeIcon, LibraryIcon, SearchIcon} from "../../Icons";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
export default function Menu() {

    const [home, setHome] = useState(null);
    const [search, setSearch] = useState(false);
    const [library, setlibrary] = useState(false);
    const dispatch = useDispatch();

    return (
        <nav>
            <ul className={"flex flex-col"}>
                <li onClick={() => {
                    setHome(true);
                    setSearch(false);
                    setlibrary(false);

                }}>
                    <NavLink to='/' exact='/' className={"px-6 h-10 gap-x-4 rounded mb-1 flex text-sm text-link hover:text-white items-center transition duration-200 ease-in-out"} activeClassName={"text-white"}>
                        <span>
                            <HomeIcon selected={home}/>
                        </span>
                        Home
                    </NavLink>
                </li>
                <li onClick={()=>{
                    setHome(false);
                    setSearch(true);
                    setlibrary(false);
                }}>
                    <NavLink to='/search' className={"px-6 h-10 gap-x-4 rounded flex text-sm font-semibold text-link hover:text-white items-center transition duration-200 ease-in-out"} activeClassName={" text-white"}>
                        <span>
                            <SearchIcon selected={search}/>
                        </span>
                        Search
                    </NavLink>
                </li>
                <li onClick={()=>{
                    setHome(false);
                    setSearch(false);
                    setlibrary(true);
                }}>
                    <NavLink to="/collection/playlists" className={"px-6 h-10 gap-x-4 rounded mb-1 flex text-sm font-semibold text-link hover:text-white items-center transition duration-200 ease-in-out"} activeClassName={" text-white"}>
                        <span>
                            <LibraryIcon selected={library}/>
                        </span>
                        Your Library
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

