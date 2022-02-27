import {DownloadIcon} from "../Icons";

export default function DownloadApp() {
    return (
        <div className={'h-10 flex justify-evenly gap-x-1 font-semibold mt-2 text-link hover:text-white text-s py-2 cursor-pointer'}>
            <DownloadIcon/>
            <span className={'mr-10'}>Uygulamayı Yükle</span>
        </div>
    )
}

