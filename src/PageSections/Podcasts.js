import {PodcastsIcon} from "../Icons";
import HomeBox from "../components/HomeBox";

export default function Podcasts(){
    const items = [
        {
            id:1,
            title:'Rihanna',
            image:'\thttps://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd',
            mp3Src:'https://freesound.org/data/previews/623/623984_5674468-lq.mp3',
            color:'bg-gradient-to-b bg-[#65605b] to-black'
        },
        {
            id:2,
            title:'Strange Fruits Music',
            image:'https://i.scdn.co/image/ab6761610000e5ebee1b9ea8fbb0103bd276938a',
            mp3Src: 'https://freesound.org/data/previews/623/623980_1648170-lq.mp3',
            color:' bg-gradient-to-b bg-[#1f1a07] to-black'
        },
        {
            id:3,
            title:'NKVT',
            image:'https://i.scdn.co/image/ab67706f00000002a9271efc7ac18a29d4c98ba2',
            mp3Src: 'https://freesound.org/data/previews/623/623977_1089955-lq.mp3',
            color:'bg-gradient-to-b bg-[#a64b85] to-black'
        },
        {
            id:4,
            title:'Drake',
            image:'https://i.scdn.co/image/ab6761610000f1789e46a78c5cd2f7a8e7669980',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color:'bg-gradient-to-b bg-[#6f5fec] to-black'
        },
        {
            id:5,
            title:'Liked Songs',
            image:'https://misc.scdn.co/liked-songs/liked-songs-640.png',
            mp3Src: 'https://freesound.org/data/previews/623/623855_1391542-lq.mp3',
            color:'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id:6,
            title:'22',
            image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id:7,
            title:'Liked Songs',
            image:'https://misc.scdn.co/liked-songs/liked-songs-640.png',
            mp3Src: 'https://freesound.org/data/previews/623/623855_1391542-lq.mp3',
            color:'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id:8    ,
            title:'22',
            image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        }
    ]

    return (
        <div className={'flex flex-col h-[43.37rem] justify-around overflow-hidden'}>
            <div className={'flex flex-col items-center gap-y-3'}>
                <div className={'flex flex-col items-center'}>
                    <PodcastsIcon size={64}/>
                </div>
                <div className={'mt-2'}>
                    <h1 className={'text-3xl font-semibold'}>Follow your first podcast</h1>
                </div>
                <div>
                    <p>Follow podcasts you like by tapping the follow button.</p>
                </div>
                <div>
                    <button className={'flex items-center justify-center px-7 py-2 ' +
                        'border font-semibold rounded-full hover:border-black max-h-[3rem] bg-white hover:scale-110 '}>
                        <p className={'tracking-widest uppercase text-s text-black text-underline '}>
                            Find podcasts
                        </p>
                    </button>
                </div>
            </div>

            <div>
                <HomeBox
                    title={''}
                    more={'/test'}
                    items={items}
                    type={'type1'}
                />
            </div>
        </div>
    )
}