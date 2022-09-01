import {NavLink} from "react-router-dom";

export default function Register(){
    return (
        <div className={'flex items-center gap-x-1'}>
            <NavLink to={'/register'}>
                <button className={'px-10 py-2 text-s font-semibold  hover:scale-110'}>REGISTER</button>
            </NavLink>
            <NavLink to={'/login'}>
                <button className={'px-10 py-2 bg-white text-black text-s font-bold rounded-full hover:scale-110'}>LOGIN</button>
            </NavLink>
        </div>
    )
}