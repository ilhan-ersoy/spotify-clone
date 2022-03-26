import {Facebook} from "../../../Icons";

export default function Button({service, logo}){
    return (
        <>
            <button className={'flex items-center justify-center gap-x-3 w-[28.125rem] bg-[#3b5997] p-[0.85rem] border text-white font-semibold rounded-full text-white hover:border-black'}>
                <Facebook/>
                <p className={'tracking-widest uppercase text-sm'}>
                    Continue with Facebook
                </p>
            </button>
        </>
    )
}