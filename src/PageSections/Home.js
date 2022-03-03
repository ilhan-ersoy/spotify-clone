import HomeBox from "../components/HomeBox";
import {useState} from "react";

export default function Home() {

    const items = [
        {
            id:1,
            title:'Rihanna',
            image:'\thttps://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd'
        },
        {
            id:2,
            title:'Strange Fruits Music',
            image:'https://i.scdn.co/image/ab6761610000e5ebee1b9ea8fbb0103bd276938a'
        },
        {
            id:3,
            title:'NKVT',
            image:'https://i.scdn.co/image/ab67706f00000002a9271efc7ac18a29d4c98ba2'
        },
        {
            id:4,
            title:'Drake',
            image:'https://i.scdn.co/image/ab6761610000f1789e46a78c5cd2f7a8e7669980'
        },
        {
            id:5,
            title:'Beğenilen Şarkılar',
            image:'https://misc.scdn.co/liked-songs/liked-songs-640.png'
        },
        {
            id:6,
            title:'22',
            image:'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc'
        }
    ]

    const items2 = [
        {
            id:1,
            title:'Rihanna',
            image:'\thttps://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd'
        },
         { id:2, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' }, { id:3, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' }, { id:4, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' }, { id:5, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' }, { id:6, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' }, { id:7, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' }, { id:8, title:'The Weeknd', image:'https://i.scdn.co/image/ab676161000051742f71b65ef483ed75a8b40437' }

    ]



    return (
        <div className={' grid grid-rows-3 gap-10'}>
            <HomeBox
                title={'İyi günler'}
                more={'/test'}
                items={items}
                type={'welcome'}
            />

            <HomeBox
                title={'Popüler sanatçılar'}
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

