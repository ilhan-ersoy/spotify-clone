import {PlayIcon} from "../Icons";
import {useState} from "react";

export default function LikedSongs(){
    const user = {
        name:'İlhan Ersoy',
        avatar:'https://scontent.flux1-1.fna.fbcdn.net/v/t31.18172-1/13522778_1709692472613362_3310462657506682521_o.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=37DOzEaTVLgAX-CSaOv&_nc_ht=scontent.flux1-1.fna&edm=AP4hL3IEAAAA&oh=00_AT-1Y4uXeh0GDkUIBLW4nKceUUiL3qsYkBvDZPgfEhLdUg&oe=626E38F4'
    }

    const [play, setPlay] = useState(false);
    const [cursor, setCursor] = useState(true);
    return (
        <div className={'flex flex-col'}>
            <div className={'flex flex-col p-10 bg-ls'}>
                <div className={'flex items-center gap-x-5'}>
                    <img className={'likedSongsImg'} style={{width:'232px'}} src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt=""/>
                    <div className={'flex flex-col gap-y-3 mt-10'}>
                        <h4 className={'text-s font-semibold'}>PLAYLIST</h4>
                        <h1 className={'text-8xl font-semibold tracking-tight'}>Liked Songs</h1>
                        <div className={'flex items-center gap-x-1 text-s'}>
                            <img
                                className={'rounded-full'} style={{width:'24px'}}
                                src={user.avatar} alt=""/>
                            <span className={'font-semibold'}>{user.name}</span>
                            <span>123 songs</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'px-6 py-6'}>
                <button
                    onClick={()=>setPlay(!play)}
                    className={`mr-5 bg-[#1ed760] w-14 h-14 rounded-full shadow-xxl flex items-center 
                                hover:scale-110                        
                                justify-around transition duration-200 ease-in-out shadow-2xl 
                                top-[6.625rem] left-[6.75rem] ${cursor ? 'show' : 'hide '}`}>
                    <PlayIcon play={play} size={'25'} />
                </button>
            </div>
        </div>

    )
}