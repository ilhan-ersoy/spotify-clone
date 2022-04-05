export default function LikedSong(){
    return (
        <div className={'flex gap-x-5 items-center'}>
            <span className={'text-gray-400'}>1</span>
            <div className={'flex gap-x-3'}>
                <img style={{width:'40px'}} src="https://i.scdn.co/image/ab67616d00004851072e9faef2ef7b6db63834a3" alt=""/>
                <div>
                    <h4>SICKO MODE</h4>
                    <div className={'flex items-center gap-x-2'}>
                        <span className={'text-black bg-[#a1a1a3] w-[0.93rem] text-center'} style={{fontSize:'11px'}}>E</span>
                        <p className={'text-s text-gray-400'}>
                            Travis Scott
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}