import {HomeIcon, LibraryIcon, SearchIcon} from "../../Icons";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
export default function Menu() {


    const [home, setHome] = useState(false);
    const [search, setSearch] = useState(false);
    const [library, setlibrary] = useState(false);

    return (
        <nav>
            <ul className={"flex flex-col"}>
                <li onClick={()=>{
                    setHome(true);
                    setSearch(false);
                    setlibrary(false);
                }}>
                    <NavLink to="/" exact='/' className={"px-6 bg-active h-10 gap-x-4 rounded mb-1 flex text-sm text-link hover:text-white items-center"} activeClassName={" text-white"}>
                        <span>
                            <HomeIcon selected={home}/>
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li onClick={()=>{
                    setHome(false);
                    setSearch(true);
                    setlibrary(false);
                }}>
                    <NavLink to='/search' className={"px-6 h-10 gap-x-4 rounded flex text-sm font-semibold text-link hover:text-white items-center"} activeClassName={" text-white"}>
                        <span>
                            <SearchIcon selected={search}/>
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li onClick={()=>{
                    setHome(false);
                    setSearch(false);
                    setlibrary(true);
                }}>
                    <NavLink to="/collection" className={"px-6 h-10 gap-x-4 rounded mb-1 flex text-sm font-semibold text-link hover:text-white items-center"} activeClassName={" text-white"}>
                        <span>
                            <LibraryIcon selected={library}/>
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

