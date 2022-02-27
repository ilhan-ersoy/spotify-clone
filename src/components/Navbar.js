import {PrevIcon} from "../Icons";
import {NextIcon} from "../Icons";

export default function Navbar() {
    return (
        <div className={'h-[3.75rem] px-8 flex items-center justify-between'}>
            <nav className={'flex gap-x-4'}>
                <button className={'w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full'}>
                    <PrevIcon/>
                </button>
                <button className={'w-8 h-8 bg-black bg-opacity-70 flex items-center justify-center rounded-full'}>
                    <NextIcon/>
                </button>
            </nav>
        </div>
    )
}

