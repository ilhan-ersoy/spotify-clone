import spotifyLogo from "../Assets/img/logo.svg";
import Menu from "./Sidebar/Menu";
import {LikedSongsIcon, PlusIcon} from "../Icons";
import MyPlaylist from "./Sidebar/MyPlaylist";
import DownloadApp from "./DownloadApp";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


export default function Sidebar() {
    const current = useSelector(state=>state.player.current);
    const coverImage = useSelector(state=>state.player.coverImage);
    return (
        <div className={"w-60 pt-6 bg-black flex flex-col min-w-[15rem]"}>
            <img src={spotifyLogo} alt="page_logo" className="h-10 mb-8 pr-14"/>
            <Menu/>
            <nav className={'mt-6'}>
                <ul>
                    <li>
                        <a href="#" className={'py-2 px-6 flex text-sm text-link group font-semibold hover:text-white items-center transition duration-300 ease-in-out'}>
                            <span className={'w-6 h-6 flex items-center group-hover:bg-opacity-100 bg-opacity-60 justify-center mr-4 bg-white text-sm text-black'}>
                                <PlusIcon size={'12'}/>
                            </span>
                            Create Playlist
                        </a>
                    </li>
                    <li>
                        <NavLink to={"/tracks"} className={'py-2 px-6 group flex text-sm group text-link font-semibold hover:text-white items-center transition duration-300 ease-in-out'}>
                            <span className={'w-6 h-6 flex opacity-60 group-hover:opacity-100 items-center justify-center mr-4 text-sm bg-gradient-to-br from-blue-600 to-indigo-300'}>
                                <LikedSongsIcon size={'12'}/>
                            </span>
                            Liked Songs
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <MyPlaylist/>
            <DownloadApp/>

            {coverImage && <img className={'w-full'} src={current?.coverImage} alt=""/>}
        </div>
    )
}

