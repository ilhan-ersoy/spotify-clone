import HomeBox from "../components/HomeBox";

export default function Collection() {
    const items = [
        {
            id:1,
            title:'32. Çalma Listem',
            image:'\thttps://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd',
            mp3Src:'https://freesound.org/data/previews/623/623984_5674468-lq.mp3',
            color:'bg-gradient-to-b bg-[#65605b] to-black'
        },
        {
            id:2,
            title:'31. Çalma Listem',
            image:'https://i.scdn.co/image/ab6761610000e5ebee1b9ea8fbb0103bd276938a',
            mp3Src: 'https://freesound.org/data/previews/623/623980_1648170-lq.mp3',
            color:' bg-gradient-to-b bg-[#1f1a07] to-black'
        },
        {
            id:3,
            title:'30. Çalma Listem',
            image:'https://i.scdn.co/image/ab67706f00000002a9271efc7ac18a29d4c98ba2',
            mp3Src: 'https://freesound.org/data/previews/623/623977_1089955-lq.mp3',
            color:'bg-gradient-to-b bg-[#a64b85] to-black'
        },
        {
            id:4,
            title:'29. Çalma Listem',
            image:'https://i.scdn.co/image/ab6761610000f1789e46a78c5cd2f7a8e7669980',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color:'bg-gradient-to-b bg-[#6f5fec] to-black'
        },
        {
            id:5,
            title:'28. Çalma Listem',
            image:'https://misc.scdn.co/liked-songs/liked-songs-640.png',
            mp3Src: 'https://freesound.org/data/previews/623/623855_1391542-lq.mp3',
            color:'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id:6,
            title:'27. Çalma Listem',
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
    const items2 = [
        {
            id:1,
            title:'29.Çalma Listem',
            image:'\thttps://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd',
            mp3Src:'https://freesound.org/data/previews/623/623984_5674468-lq.mp3',
            color:'bg-gradient-to-b bg-[#65605b] to-black'
        },
        {
            id:2,
            title:'28.Çalma Liste',
            image:'https://i.scdn.co/image/ab6761610000e5ebee1b9ea8fbb0103bd276938a',
            mp3Src: 'https://freesound.org/data/previews/623/623980_1648170-lq.mp3',
            color:' bg-gradient-to-b bg-[#1f1a07] to-black'
        },
        {
            id:3,
            title:'27.Çalma Listem',
            image:'https://i.scdn.co/image/ab67706f00000002a9271efc7ac18a29d4c98ba2',
            mp3Src: 'https://freesound.org/data/previews/623/623977_1089955-lq.mp3',
            color:'bg-gradient-to-b bg-[#a64b85] to-black'
        },
        {
            id:4,
            title:'26.Çalma Listem',
            image:'https://i.scdn.co/image/ab6761610000f1789e46a78c5cd2f7a8e7669980',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color:'bg-gradient-to-b bg-[#6f5fec] to-black'
        },
        {
            id:5,
            title:'25.Çalma Listem',
            image:'https://misc.scdn.co/liked-songs/liked-songs-640.png',
            mp3Src: 'https://freesound.org/data/previews/623/623855_1391542-lq.mp3',
            color:'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id:6,
            title:'27.Çalma Listem',
            image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id:6,
            title:'28.Çalma Listem',
            image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id:6,
            title:'29.Çalma Listem',
            image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        },
    ]
    return (
        <div className={''}>
            <HomeBox
                title={'Çalma Listeleri'}
                items={items}
                type={'type4'}
            />
            <HomeBox
                items={items2}
                type={'type1'}
            />
            <HomeBox
                items={items2}
                type={'type1'}
            />
            <HomeBox
                items={items2}
                type={'type1'}
            />
            <HomeBox
                items={items2}
                type={'type1'}
            />
        </div>
    )
}

