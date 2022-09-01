import HomeBox from "../components/HomeBox";

export default function Albums(){
    const items = [
        {
            id:1,
            title:'My Playlist #29',
            image:'\thttps://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd',
            mp3Src:'https://freesound.org/data/previews/623/623984_5674468-lq.mp3',
            color:'bg-gradient-to-b bg-[#65605b] to-black'
        },
        {
            id:2,
            title:'My Playlist #31',
            image:'https://i.scdn.co/image/ab6761610000e5ebee1b9ea8fbb0103bd276938a',
            mp3Src: 'https://freesound.org/data/previews/623/623980_1648170-lq.mp3',
            color:' bg-gradient-to-b bg-[#1f1a07] to-black'
        },
        {
            id:3,
            title:'My Playlist #30',
            image:'https://i.scdn.co/image/ab67706f00000002a9271efc7ac18a29d4c98ba2',
            mp3Src: 'https://freesound.org/data/previews/623/623977_1089955-lq.mp3',
            color:'bg-gradient-to-b bg-[#a64b85] to-black'
        },
        {
            id:4,
            title:'My Playlist #31',
            image:'https://i.scdn.co/image/ab6761610000f1789e46a78c5cd2f7a8e7669980',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color:'bg-gradient-to-b bg-[#6f5fec] to-black'
        },
        {
            id:5,
            title:'My Playlist #32',
            image:'https://misc.scdn.co/liked-songs/liked-songs-640.png',
            mp3Src: 'https://freesound.org/data/previews/623/623855_1391542-lq.mp3',
            color:'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id:6,
            title:'My Playlist #33',
            image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        },

        // {
        //     id:7,
        //     title:'22',
        //     image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
        //     mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
        //     color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        // },
        // {
        //     id:8,
        //     title:'22',
        //     image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
        //     mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
        //     color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        // }
    ]
    return (
        <div>
            <HomeBox
                title={'My Playlists'}
                items={items}
                type={'type5'}
            />
        </div>
    )
}