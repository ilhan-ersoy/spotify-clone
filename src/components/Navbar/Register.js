import {NavLink} from "react-router-dom";

export default function Register(){
    return (
        <div className={'flex items-center gap-x-1'}>
            <NavLink to={'/register'}>
                <button className={'px-10 py-2 text-s font-semibold  hover:text-m'}>KAYDOL</button>
            </NavLink>
            <NavLink to={'/login'}>
                <button className={'px-10 py-2 bg-white text-black text-s font-bold rounded-full hover:text-m'}>OTURUM AÇ</button>
            </NavLink>
        </div>
    )
}