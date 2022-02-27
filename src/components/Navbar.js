import {PrevIcon} from "../Icons";
import {NextIcon} from "../Icons";

export default function Navbar() {
    return (
        <div className={'h-[3.75rem] px-8 flex items-center justify-between'}>
            <a href='#' className='bg-prevs'>
                <PrevIcon/>
            </a>
        </div>
    )
}

