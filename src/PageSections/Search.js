import HomeBox from "../components/HomeBox";

export default function Search() {

    const favs = [
        {
            id:1,
            type:'Hip-Hop',
            image:'https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c',
            bgColor:'bg-favTypeOne'
        },
        {
            id:2,
            type:'Pop',
            image:'https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3',
            bgColor: 'bg-favTypeTwo'
        },
        {
            id:3,
            type:'Dans ve Elektronik',
            image:'https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff',
            bgColor: 'bg-favTypeThree'
        },
        {
            id:4,
            type:'Rock',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-favTypeFour'
        },
    ]

    return (
        <div className={'flex items-center gap-x-8'}>
            <HomeBox
                title={'En çok dinlediğin türler'}
                items={favs}
                type={'type2'}
            />
        </div>
    )
}

