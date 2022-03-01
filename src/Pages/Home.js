import MenuBox from "../components/MenuBox";

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


    return (
        <div>
            <MenuBox
                title={'İyi akşamlar'}
                more={'/test'}
                items={items}
            />
        </div>
    )
}

