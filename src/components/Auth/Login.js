import {Facebook, SpotifyLoginLogo} from "../../Icons";
import Button from "./Login/Button";

export default function Login(){
    return (
        <div className={'bg-dark flex flex-col text-black items-center gap-y-5'} >
            <div className={'w-full flex justify-center border-b border-gray-200'} style={{padding:'25px 0px 10px'}}>
                <div className={'h-[3.5rem] mb-3 mr-1'} >
                    <SpotifyLoginLogo/>
                </div>
            </div>
            <div className={'flex flex-col gap-y-3 items-center'}>
                <p className={'font-semibold text-center text-s'}>
                    To continue, log in to Spotify.
                </p>
                <div className={'button-class'}>
                    <button className={'flex items-center justify-center gap-x-3 w-[28.125rem] bg-[#3b5997] p-[0.85rem] py-1' +
                        'border text-white font-semibold rounded-full text-white hover:border-black max-h-[3rem] '}>

                        <Facebook/>
                        <p className={'tracking-widest uppercase text-sm'}>
                            Continue with Facebook
                        </p>
                    </button>
                </div>

                <button className={'flex items-center justify-center gap-x-3 w-[28.125rem] bg-[#000] p-[0.85rem] py-1' +
                    'border text-white font-semibold rounded-full text-white hover:border-black max-h-[3rem]'}>

                    <img src="https://accounts.scdn.co/sso/images/apple-icon.36286be565c1ca3ac9b60243f8e0a78b.svg" alt=""/>
                    <p className={'tracking-widest uppercase text-sm'}>
                        Continue with Apple
                    </p>
                </button>

                <button className={'flex items-center justify-center gap-x-3 w-[28.125rem]  p-[0.85rem] ' +
                    'border text-white font-semibold rounded-full text-white hover:border-black max-h-[3rem]'}>

                    <img src="https://accounts.scdn.co/sso/images/google-icon.1cdc8fce9609d07f0e9d8d0bc4b61f8f.svg" alt=""/>
                    <p className={'tracking-widest uppercase text-sm text-gray-500'}>
                        Continue with Google
                    </p>
                </button>
            </div>
            <div className={'flex items-center text-m text-black font-semibold'}>
                OR
            </div>
            <div className={'flex flex-col gap-y-2'}>
                <div className={'flex flex-col'}>
                    <label htmlFor="" className={'text-black font-semibold text-sm'}>Email address or username</label>
                    <input type="text" className={'w-[28.12rem] mt-2 border border-black p-3 rounded login-input'} placeholder={'Email address or username'}/>
                </div>
                <div className={'flex flex-col'}>
                    <label htmlFor="" className={'text-black font-semibold text-sm'}>Password</label>
                    <input type="password" className={'w-[28.12rem] mt-2 border border-black p-3 rounded login-input'} placeholder={'Password'}/>
                </div>
                <div className={'text-black hover:underline font-semibold'}>
                    <a href="#">Forgot your password?</a>
                </div>
                <div className={'flex items-center justify-between'}>
                    <div className={'flex items-center gap-2'}>
                        <input className={'checked:'} type="checkbox"/>
                        <label className={'text-s font-semibold'}>Remember me</label>
                    </div>
                    <button className={'bg-[#80da60] hover:scale-105 font-semibold tracking-widest uppercase rounded-full align-center text-sm'} style={{padding: '12px 28px'}}>
                        Log in
                    </button>
                </div>
                <div className={'flex flex-col items-center gap-y-2 border-1 border-t border-[#d9dadd] mt-3'}>

                    <h1 className={'text-center text-xl font-semibold mt-6'}>Don't have an account?</h1>

                    <button className={'flex items-center justify-center gap-x-3 w-[28.125rem]  p-[0.85rem] ' +
                        'border text-white font-semibold rounded-full text-white hover:border-black max-h-[3rem] font-semibold'}>

                        {/*<img src="https://accounts.scdn.co/sso/images/google-icon.1cdc8fce9609d07f0e9d8d0bc4b61f8f.svg" alt=""/>*/}
                        <p className={'tracking-widest uppercase text-sm text-gray-500'}>
                            Sign up for Spotify
                        </p>
                    </button>
                </div>
            </div>

        </div>
    )
}