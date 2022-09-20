import {DownArr, HomeIcon, OpenProfileSettingsIcon} from "../../Icons";
import {useRef, useState} from "react";
import Home from "../../PageSections/Home";

export default function UserBar({setAuth}) {
    const [active, setActive] = useState(false);

    const AuthRef = useRef(null);


    const user = {
        name:'İlhan Ersoy',
        avatar:'https://scontent-ams2-1.xx.fbcdn.net/v/t31.18172-1/13522778_1709692472613362_3310462657506682521_o.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=0c64ff&_nc_ohc=N7gL7DFw0vwAX9ceCjD&_nc_ht=scontent-ams2-1.xx&edm=AP4hL3IEAAAA&oh=00_AT9twU56RJxC-RRm_Z6JH_UzJ6JIHupNNUuPvGtFf84U5w&oe=634BB4F4'
    }

    return (
        <div ref={AuthRef} onClick={()=>{
            setActive(!active);
        }} className={`rounded-full flex items-center gap-x-2 bg-black bg-opacity-70 p-0.5 py-0 cursor-pointer hover:bg-authBar ${active && 'bg-authBar'}`}>
            <img
                className={'w-7 h-7 rounded-full'}
                src={user.avatar} alt=""/>
            <a href="#" className={'text-s font-semibold mt-1'}>{user.name}</a>
            <DownArr status={active}/>
            {active && (
                <div className='absolute top-14 right-8 rounded p-1 w-50 h-32 bg-authBar text-s shadow-lg'>
                    <nav className={'mt-1'}>
                        <ul className='flex justify-between items-center px-4 py-2 text-s hover:bg-authBarActive rounded'>
                            <li className={'flex w-52 justify-between items-center rounded'}>
                                <span>Account</span>
                                <OpenProfileSettingsIcon/>
                            </li>
                        </ul>
                        <ul className='flex justify-between items-center px-4 py-2 text-s hover:bg-authBarActive rounded'>
                            <li className={'rounded'}>Profile</li>
                        </ul>
                        <ul  onClick={()=>setAuth(false)} className='flex justify-between items-center px-4 py-2 text-s hover:bg-authBarActive rounded'>
                            <li className={'rounded'}>Log out</li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}

