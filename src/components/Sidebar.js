import spotifyLogo from "../Assets/img/logo.svg";
import Menu from "./Sidebar/Menu";


export default function Sidebar() {
    return (
        <div className={"w-60 py-6 bg-black flex flex-col "}>
            <img src={spotifyLogo} alt="page_logo" className="h-10 mb-5 pr-12"/>
            <Menu/>
        </div>
    )
}

