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
    const browses = [
        {
            id:1,
            type:"Podcasts",
            image:'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
            bgColor:'bg-[#48866a]'
        },
        {
            id:2,
            type:'Made For You',
            image:'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:3,
            type:'Charts',
            image:'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:4,
            type:'Ruh Hali',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#e4535b]'
        },
        {
            id:5,
            type:'Rock',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:6,
            type:'Keşfet',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:7,
            type:'Dönem',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:8,
            type:'EQUAL',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#ba5d08]'
        },
        {
            id:9,
            type:"Podcasts",
            image:'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
            bgColor:'bg-[#48866a]'
        },
        {
            id:10,
            type:'Made For You',
            image:'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:11,
            type:'Charts',
            image:'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:12,
            type:'Ruh Hali',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#e4535b]'
        },
        {
            id:13,
            type:'Rock',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:14,
            type:'Keşfet',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:15,
            type:'Dönem',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:16,
            type:'EQUAL',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#ba5d08]'
        },
        {
            id:17,
            type:"Podcasts",
            image:'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
            bgColor:'bg-[#48866a]'
        },
        {
            id:18,
            type:'Made For You',
            image:'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:19,
            type:'Charts',
            image:'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:20,
            type:'Ruh Hali',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#e4535b]'
        },
        {
            id:21,
            type:'Rock',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:22,
            type:'Keşfet',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:23,
            type:'Dönem',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:24,
            type:'EQUAL',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#ba5d08]'
        },{
            id:25,
            type:"Podcasts",
            image:'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
            bgColor:'bg-[#48866a]'
        },
        {
            id:26,
            type:'Made For You',
            image:'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:27,
            type:'Charts',
            image:'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:28,
            type:'Ruh Hali',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#e4535b]'
        },
        {
            id:29,
            type:'Rock',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:30,
            type:'Keşfet',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:31,
            type:'Dönem',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:32,
            type:'EQUAL',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#ba5d08]'
        },{
            id:33,
            type:"Podcasts",
            image:'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5',
            bgColor:'bg-[#48866a]'
        },
        {
            id:34,
            type:'Made For You',
            image:'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:35,
            type:'Charts',
            image:'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:36,
            type:'Ruh Hali',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#e4535b]'
        },
        {
            id:37,
            type:'Rock',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:38,
            type:'Keşfet',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#1d3264]'
        },
        {
            id:39,
            type:'Dönem',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#8d68ab]'
        },
        {
            id:40,
            type:'EQUAL',
            image:'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730',
            bgColor: 'bg-[#ba5d08]'
        },
    ]
    return (
        <div className={'flex items-center gap-x-8 flex-col'}>
            <HomeBox
                title={'Your top genres'}
                items={favs}
                type={'type2'}
            />
            
            <HomeBox
                title={'Browse all'}
                items={browses}
                type={'type3'}
            />

        </div>
    )
}

