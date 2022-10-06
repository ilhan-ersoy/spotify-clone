import HomeBox from "../components/HomeBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrent } from "../Redux/playerSlice";

export default function Home() {
    const dispatch = useDispatch();

    const items = [
        {
            id: 1,
            title: 'Rihanna',
            image: 'https://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd',
            coverImage: 'https://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd',
            // add song 
            mp3Src: 'https://cdn.freesound.org/previews/650/650383_13866597-lq.mp3',
            color: '#65605b',
            songName: 'Bitch Better Have My Money'
        },
        {
            id: 2,
            // add song 
            title: 'Kyle Dixon & Michael Stein',
            image: 'https://i.scdn.co/image/ab67616d00001e02e1936cf3e879a47f0deaece2',
            coverImage: 'https://i.scdn.co/image/ab67616d00001e02e1936cf3e879a47f0deaece2',
            mp3Src: 'https://freesound.org/data/previews/626/626892_13866597-lq.mp3',
            color: ' bg-gradient-to-b bg-[#1f1a07] to-black',
            songName:'Stranger Things'
        },
        {
            id: 3,
            title: 'Eminem',
            image: 'https://i.scdn.co/image/ab6761610000f178a00b11c129b27a88fc72f36b',
            coverImage: 'https://i.scdn.co/image/ab67616d00004851dbb3dd82da45b7d7f31b1b42',
            mp3Src: 'https://cdn.freesound.org/previews/650/650384_13866597-lq.mp3',
            color: 'bg-gradient-to-b bg-[#a64b85] to-black',
            songName:'The Real Slim Shady'
        },
        {
            id: 4,
            title: 'Drake',
            image: 'https://i.scdn.co/image/ab6761610000f1789e46a78c5cd2f7a8e7669980',
            coverImage: 'https://i.scdn.co/image/ab67616d00001e029416ed64daf84936d89e671c',
            mp3Src: 'https://freesound.org/data/previews/626/626722_13866597-lq.mp3',
            color: 'bg-gradient-to-b bg-[#6f5fec] to-black'
        },
        {
            id: 5,
            title: 'Liked Songs',
            image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
            coverImage: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
            mp3Src: 'https://freesound.org/data/previews/623/623855_1391542-lq.mp3',
            color: 'bg-gradient-to-b bg-[#ac3919] to-black'
        },
        {
            id: 6,
            title: 'Travis Scott',
            image: 'https://i.scdn.co/image/ab6761610000f178e707b87e3f65997f6c09bfff',
            coverImage: 'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
            mp3Src: 'https://cdn.freesound.org/previews/650/650386_13866597-lq.mp3',
            color: 'bg-gradient-to-b bg-[#ac3919] to-black',
            songName:'goosebumps'
        }
    ]

    const items2 = [
        {
            id: 1,
            title: 'Rihanna',
            image: '\thttps://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd'
        },
        { id: 2, title: 'The Weeknd', image: 'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id: 3, title: 'The Weeknd', image: 'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id: 4, title: 'The Weeknd', image: 'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id: 5, title: 'The Weeknd', image: 'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id: 6, title: 'The Weeknd', image: 'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id: 7, title: 'The Weeknd', image: 'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' },
        { id: 8, title: 'The Weeknd', image: 'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' }

    ]
    return (
        <div className={'grid grid-rows-3 gap-10'}>
            <HomeBox
                title={'Good evening'}
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
                title={'Recently played'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
            <HomeBox
                title={'Made for ilhan ersoy'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
            <HomeBox
                title={'Made for ilhan ersoy'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
            <HomeBox
                title={'Made for ilhan ersoy'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
            <HomeBox
                title={'Made for ilhan ersoy'}
                more={'/populer'}
                items={items2}
                type={'type1'}
            />
        </div>
    )
}

