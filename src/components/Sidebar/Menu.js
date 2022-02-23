import {HomeIcon, LibraryIcon, SearchIcon} from "../../Icons";
import {NavLink} from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <ul className={"flex flex-col"}>
                <li>
                    <NavLink to="/" exact='/' className={"px-6 h-10 gap-x-4 rounded mb-1 flex text-sm text-link hover:text-white items-center"} activeClassName={"bg-active text-white"}>
                        <span>
                            <HomeIcon />
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/search' className={"px-6 h-10 gap-x-4 rounded mb-1 flex text-sm font-semibold text-link hover:text-white items-center"} activeClassName={"bg-active text-white"}>
                        <span>
                            <SearchIcon/>
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/collection" className={"px-6 h-10 gap-x-4 rounded mb-1 flex text-sm font-semibold text-link hover:text-white items-center"} activeClassName={"bg-active text-white"}>
                        <span>
                            <LibraryIcon/>
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

