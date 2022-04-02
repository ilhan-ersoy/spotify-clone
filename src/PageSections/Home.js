import HomeBox from "../components/HomeBox";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setCurrent} from "../Redux/playerSlice";

export default function Home() {

    const items = [
        {
            id:1,
            title:'Rihanna',
            image:'https://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd',
            coverImage: 'https://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd',
            mp3Src:'https://freesound.org/data/previews/623/623984_5674468-lq.mp3',
            color:'bg-gradient-to-b bg-[#65605b] to-black'
        },
        {
            id:2,
            title:'Strange Fruits Music',
            image:'https://i.scdn.co/image/ab6761610000e5ebee1b9ea8fbb0103bd276938a',
            coverImage: 'https://i.scdn.co/image/ab6761610000e5ebee1b9ea8fbb0103bd276938a',
            mp3Src: 'https://freesound.org/data/previews/623/623980_1648170-lq.mp3',
            color:' bg-gradient-to-b bg-[#1f1a07] to-black'
        },
        {
            id:3,
            title:'NKVT',
            image:'https://i.scdn.co/image/ab67706f00000002a9271efc7ac18a29d4c98ba2',
            coverImage: 'https://i.scdn.co/image/ab67706f00000002a9271efc7ac18a29d4c98ba2',
            mp3Src: 'https://freesound.org/data/previews/623/623977_1089955-lq.mp3',
            color:'bg-gradient-to-b bg-[#a64b85] to-black'
        },
        {
            id:4,
            title:'Drake',
            image:'https://i.scdn.co/image/ab6761610000f1789e46a78c5cd2f7a8e7669980',
            coverImage:'https://i.scdn.co/image/ab67616d00001e029416ed64daf84936d89e671c',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color:'bg-gradient-to-b bg-[#6f5fec] to-black'
        },
        {
            id:5,
            title:'Beğenilen Şarkılar',
            image:'https://misc.scdn.co/liked-songs/liked-songs-640.png',
            coverImage: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
            mp3Src: 'https://freesound.org/data/previews/623/623855_1391542-lq.mp3',
            color:'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id:6,
            title:'22',
            image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
            coverImage: 'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
            mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
            color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        }
    ]

    const dispatch = useDispatch();



    const items2 = [
        {
            id:1,
            title:'Rihanna',
            image:'\thttps://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd'
        },
        { id:2, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id:3, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id:4, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id:5, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id:6, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id:7, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id:8, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' }

    ]
    return (
        <div className={'grid grid-rows-3 gap-10'}>
            <HomeBox
                title={'İyi günler'}
                more={'/test'}
                items={items}
                type={'welcome'}
            />
            <HomeBox
                title={'Populer Artists'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
            <HomeBox
                title={'Yakında Çalılanlar'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
            <HomeBox
                title={'İlhan Ersoy için derlendi'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
            <HomeBox
                title={'İlhan Ersoy için derlendi'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
            <HomeBox
                title={'İlhan Ersoy için derlendi'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
            <HomeBox
                title={'İlhan Ersoy için derlendi'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
        </div>
    )
}

