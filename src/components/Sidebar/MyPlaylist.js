import DownloadApp from "../DownloadApp";

export default function MyPlaylist() {
    return (
        <div className={'text-s overflow-auto flex-auto mx-6 mt-2 border-t border-gray-700 py-2'}>
            <ul>
                {new Array(40).fill(<li>
                    <a href="#" className={'flex h-8 items-center text-link hover:text-white hover:opacity-100'}>13. Çalma Listem</a>
                </li>)}
            </ul>

        </div>
    )
}

