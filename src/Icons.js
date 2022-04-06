const HomeIcon = ({size = 24,selected}) => {
    switch (selected) {
        case true:
            return (<svg role="img" height={size} width={size} fill={"currentColor"} viewBox="0 0 24 24">
                <path
                    d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
            </svg>)
        case false:
            return (
                <svg role="img" height={size} width={size} fill={"currentColor"} viewBox="0 0 24 24">
                    <path
                        d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
                </svg>
            )
        default:
            return (<svg role="img" height={size} width={size} fill={"currentColor"} viewBox="0 0 24 24">
                <path
                    d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
            </svg>)
    }
}

const SearchIcon = ({size = 24, selected}) => {
    return selected ? (
        <svg role="img" height={size} width={size} fill={"currentColor"} viewBox="0 0 24 24">
            <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path>
            <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
        </svg>
    ): (
        <svg role="img" height={size} width={size} fill={"currentColor"} viewBox="0 0 24 24">
            <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
        </svg>
    )
}

const LibraryIcon = ({size = 24, selected}) => {
    return selected ? (
        <svg role="img" height={size} width={size} fill={"currentColor"} viewBox="0 0 24 24">
            <path d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V6.464a1 1 0 00-.5-.866l-6-3.464zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"></path>
        </svg>
    ): (
        <svg role="img" height={size} width={size} fill={"currentColor"} viewBox="0 0 24 24">
            <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
        </svg>
    )
}
const PlusIcon = ({size = 24}) => {
    return (
        <svg role="img" height={size} width={size} fill={"black"} viewBox="0 0 16 16">
            <path
                d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
        </svg>
    )
}
const LikedSongsIcon = ({size = 24, color = 'white'}) => {
    return (
        <svg role="img" height={size} width={size} fill={color} viewBox="0 0 16 16">
            <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
        </svg>
    )
}
const DownloadIcon = ({size = 20}) => {
    return (
        <svg role="img" fill={'currentColor'} height={size} width={size} viewBox="0 0 24 24" >
            <path
                d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
            <path
                d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"></path>
        </svg>
    )
}
const PrevIcon = ({size = 20}) => {
    return (
        <svg role="img" height="24" width="24" fill={'currentColor'}
             viewBox="0 0 24 24">
            <path
                d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
        </svg>
    )
}

const NextIcon = ({size = 20}) => {
    return (
        <svg role="img" height="24" width="24" fill={'currentColor'}
             viewBox="0 0 24 24">
            <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
        </svg>
    )
}

const DownArr = ({size = 24, status}) => {
    return status ? (
        <svg role="img" height={size} width={size} fill={'currentColor'}
             className={'mt-2'}
             viewBox="0 0 24 24">
            <path d="M14 10L8 4l-6 6h12z"></path>

        </svg>
    ): (
        <svg role="img" height={size} width={size} fill={'currentColor'}
             className={'mt-2'}
             viewBox="0 0 24 24">
            <path d="M14 6l-6 6-6-6h12z"></path>
        </svg>
    )
}


const OpenProfileSettingsIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill={'currentColor'}>
            <path
                d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
            <path
                d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
        </svg>
    )
}

const PlayIcon = ({size = 20, play}) => {
    return !play ? (
        <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 hDgDGI">
            <path
                d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
        </svg>
    ):
        <svg role="img" height="24" width="24" viewBox="0 0 24 24" className="Svg-sc-1bi12j5-0 hDgDGI">
            <path d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z"></path>
        </svg>
}

const InputSearchIcon = ({size = 20}) => {
    return (
        <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fill-rule="evenodd"></path></svg>
    )
}


const BottomPlayIcon = ({size = 20, playing}) => {
    return playing ? (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path
                d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path>
        </svg>
    ): (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
            <path
                d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path>
        </svg>
    )
}

const PlayerPrevIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill={'currentColor'}>
            <path
                d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
        </svg>
    )
}

const PlayerNextIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI" fill={'currentColor'}>
            <path
                d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path>
        </svg>
    )
}

const ShuffleIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill={'currentColor'} fill={'currentColor'}>
            <path
                d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path>
            <path
                d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path>
        </svg>
    )
}

const LoopIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI" fill={'currentColor'}>
            <path
                d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path>
        </svg>

    )
}

const MicIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI" fill={'currentColor'}>
            <path
                d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
        </svg>
    )
}

const QueqeIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI" fill={'currentColor'}>
            <path
                d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
        </svg>
    )
}
const ChooseDeviceIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" className="Svg-sc-1bi12j5-0 hDgDGI" aria-label="Bir cihaza bağlan"
             viewBox="0 0 16 16" fill={'currentColor'}>
            <path
                d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
            <path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path>
        </svg>

    )
}

const FullScreenIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16"  fill={'currentColor'}>
            <path
                d="M6.53 9.47a.75.75 0 010 1.06l-2.72 2.72h1.018a.75.75 0 010 1.5H1.25v-3.579a.75.75 0 011.5 0v1.018l2.72-2.72a.75.75 0 011.06 0zm2.94-2.94a.75.75 0 010-1.06l2.72-2.72h-1.018a.75.75 0 110-1.5h3.578v3.579a.75.75 0 01-1.5 0V3.81l-2.72 2.72a.75.75 0 01-1.06 0z"></path>
        </svg>
    )
}

const HeartFilledIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill={'currentColor'}>
            <path
                d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
        </svg>
    )
}

const PictureInPictureIcon = ({size = 20}) => {
    return (
        <svg width="16" height="16" fill={'currentColor'} xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fillRule="evenodd"><path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fillRule="nonzero"></path><path d="M10 8h4v3h-4z"></path></g></svg>
    )
}

const VolumeMuteIcon = ({size = 20}) => {
    return (
        <svg role="presentation" height="16" width="16" fill={'currentColor'} aria-label="Ses kapalı" id="volume-icon" viewBox="0 0 16 16"
             className="Svg-sc-1bi12j5-0 hDgDGI">
            <path
                d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path>
            <path
                d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
        </svg>
    )
}

const VolumeLowIcon = ({size = 20}) => {
    return (
        <svg role="presentation" height="16" width="16" fill={'currentColor'} aria-label="Ses seviyesi düşük" id="volume-icon"
             viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
            <path
                d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
        </svg>
    )
}

const VolumeNormalIcon = ({size = 20}) => {
    return (
        <svg role="presentation" height="16" width="16" fill={'currentColor'} aria-label="Ses seviyesi orta" id="volume-icon"
             viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
            <path
                d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"></path>
        </svg>
    )
}

const VolumeHighIcon = ({size = 20}) => {
    return (
        <svg role="presentation" height="16" width="16" fill={'currentColor'} aria-label="Ses seviyesi yüksek" id="volume-icon"
             viewBox="0 0 16 16" className="Svg-sc-1bi12j5-0 hDgDGI">
            <path
                d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
            <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
        </svg>
    )
}

const ExpandIcon = ({size = 20}) => {
    return (
        <svg height="24" role="img" width="24" viewBox="0 0 24 24" className="uH6KoDltK5GfeMZjR0rO">
            <polygon points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 "></polygon>
        </svg>
    )
}

const InfoIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill={'currentColor'}>
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
            <path
                d="M7.25 12.026v-1.5h1.5v1.5h-1.5zm.884-7.096A1.125 1.125 0 007.06 6.39l-1.431.448a2.625 2.625 0 115.13-.784c0 .54-.156 1.015-.503 1.488-.3.408-.7.652-.973.818l-.112.068c-.185.116-.26.203-.302.283-.046.087-.097.245-.097.57h-1.5c0-.47.072-.898.274-1.277.206-.385.507-.645.827-.846l.147-.092c.285-.177.413-.257.526-.41.169-.23.213-.397.213-.602 0-.622-.503-1.125-1.125-1.125z"></path>
        </svg>
    )
}

const DeviceIcon = ({size = 20}) => {
    return (
        <svg role="img" height="32" width="32" fill={'currentColor'} data-testid="device-icon"
             viewBox="0 0 24 24">
            <path
                d="M0 21a1 1 0 011-1h22a1 1 0 110 2H1a1 1 0 01-1-1zM3 5a3 3 0 013-3h12a3 3 0 013 3v9a3 3 0 01-3 3H6a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1H6z"></path>
        </svg>
    )
}

const SpeakerIcon = ({size = 20}) => {
    return (
        <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" fill={'currentColor'}>
            <path
                d="M14.5 8a6.468 6.468 0 00-1.3-3.9l1.2-.9C15.405 4.537 16 6.2 16 8c0 1.8-.595 3.463-1.6 4.8l-1.2-.9A6.468 6.468 0 0014.5 8zM8 1.5a6.5 6.5 0 103.25 12.13.75.75 0 11.75 1.3 8 8 0 110-13.86.75.75 0 11-.75 1.298A6.467 6.467 0 008 1.5z"></path>
            <path
                d="M11.259 8c0-.676-.228-1.296-.611-1.791l1.187-.918c.579.749.924 1.69.924 2.709a4.41 4.41 0 01-.925 2.709l-1.186-.918c.383-.495.61-1.115.61-1.791zM8.75 4.115l-4.139 2.39a1.727 1.727 0 000 2.99l4.139 2.39v-7.77z"></path>
        </svg>
    )
}

const NoMusic = ({size = 20}) => {
    return (
        <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg" fill={'currentColor'}>
            <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
    )
}

const SelectedDeviceIcon = ({size = 20}) => {
    return (
        <svg role="img" height="16" width="16" fill={'#1db954'} aria-label="Bir cihaza bağlan"
             viewBox="0 0 16 16">
            <path
                d="M2 3.75C2 2.784 2.784 2 3.75 2h8.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0112.25 12h-8.5A1.75 1.75 0 012 10.25v-6.5zm1.75-.25a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-6.5a.25.25 0 00-.25-.25h-8.5zM.25 15.25A.75.75 0 011 14.5h14a.75.75 0 010 1.5H1a.75.75 0 01-.75-.75z"></path>
        </svg>

    )
}

const MusicIcon = ({size = 20}) => {
    return (
        <svg height="32" role="img" width="32" viewBox="-20 -25 100 100" fill={'currentColor'} className={'w-full h-full font-semibold text-[#b3b3b3]'}
             aria-hidden="true" data-testid="card-image-fallback">
            <path
                d="M16 7.494v28.362A8.986 8.986 0 0 0 9 32.5c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9V9.113l30-6.378v27.031a8.983 8.983 0 0 0-7-3.356c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9s9-4.037 9-9V.266L16 7.494zM9 48.5c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 3.859-3.141 7-7 7zm32-6.09c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.861-3.141 7-7 7z"
                fill="currentColor" fill-rule="evenodd"></path>
        </svg>
    )
}

const SpotifyLoginLogo = ({size = 20}) => {
    return (
        <svg role="img" viewBox="0 0 78 24" height="100%" fill={'#00000'}>
            <path
                d="M18.616 10.639c-3.77-2.297-9.99-2.509-13.59-1.388a1.077 1.077 0 0 1-1.164-.363 1.14 1.14 0 0 1-.119-1.237c.136-.262.37-.46.648-.548 4.132-1.287 11-1.038 15.342 1.605a1.138 1.138 0 0 1 .099 1.863 1.081 1.081 0 0 1-.813.213c-.142-.02-.28-.07-.403-.145Zm-.124 3.402a.915.915 0 0 1-.563.42.894.894 0 0 1-.69-.112c-3.144-1.983-7.937-2.557-11.657-1.398a.898.898 0 0 1-.971-.303.952.952 0 0 1-.098-1.03.929.929 0 0 1 .54-.458c4.248-1.323 9.53-.682 13.14 1.595a.95.95 0 0 1 .3 1.286Zm-1.43 3.267a.73.73 0 0 1-.45.338.712.712 0 0 1-.553-.089c-2.748-1.722-6.204-2.111-10.276-1.156a.718.718 0 0 1-.758-.298.745.745 0 0 1-.115-.265.757.757 0 0 1 .092-.563.737.737 0 0 1 .457-.333c4.455-1.045 8.277-.595 11.361 1.338a.762.762 0 0 1 .241 1.028ZM11.696 0C5.237 0 0 5.373 0 12c0 6.628 5.236 12 11.697 12 6.46 0 11.698-5.372 11.698-12 0-6.627-5.238-12-11.699-12h.001Zm20.126 11.078c-2.019-.494-2.379-.84-2.379-1.57 0-.688.633-1.151 1.572-1.151.91 0 1.814.352 2.76 1.076a.131.131 0 0 0 .187-.03l.987-1.426a.139.139 0 0 0-.025-.185c-1.127-.928-2.396-1.378-3.88-1.378-2.18 0-3.703 1.342-3.703 3.263 0 2.06 1.315 2.788 3.585 3.352 1.932.457 2.258.84 2.258 1.524 0 .757-.659 1.229-1.72 1.229-1.18 0-2.141-.408-3.216-1.364a.13.13 0 0 0-.188.016l-1.106 1.35a.137.137 0 0 0 .013.188c1.252 1.147 2.79 1.752 4.451 1.752 2.35 0 3.869-1.317 3.869-3.356 0-1.723-1.003-2.676-3.465-3.29Zm10.487 2.31c0 1.454-.874 2.47-2.125 2.47-1.235 0-2.169-1.061-2.169-2.47 0-1.41.933-2.47 2.17-2.47 1.23 0 2.124 1.038 2.124 2.47Zm-1.706-4.354c-1.018 0-1.854.412-2.543 1.256v-.95a.136.136 0 0 0-.038-.095.132.132 0 0 0-.093-.04h-1.81a.131.131 0 0 0-.093.04.136.136 0 0 0-.039.096v10.546c0 .076.06.137.133.137h1.809a.132.132 0 0 0 .093-.041.136.136 0 0 0 .038-.096v-3.329c.69.794 1.525 1.18 2.543 1.18 1.893 0 3.808-1.494 3.808-4.35 0-2.858-1.915-4.354-3.808-4.354Zm8.72 6.839c-1.297 0-2.274-1.068-2.274-2.486 0-1.422.943-2.455 2.244-2.455 1.305 0 2.288 1.069 2.288 2.487 0 1.422-.949 2.454-2.258 2.454Zm0-6.838c-2.438 0-4.347 1.926-4.347 4.383 0 2.432 1.896 4.338 4.317 4.338 2.445 0 4.36-1.92 4.36-4.369 0-2.44-1.901-4.353-4.33-4.353Zm9.535.17h-1.99V7.117a.136.136 0 0 0-.08-.126.13.13 0 0 0-.052-.01h-1.809a.133.133 0 0 0-.093.04.136.136 0 0 0-.038.095v2.087h-.87a.131.131 0 0 0-.122.085.139.139 0 0 0-.01.052v1.595c0 .074.06.135.132.135h.87v4.126c0 1.667.809 2.513 2.404 2.513.648 0 1.186-.138 1.694-.434a.135.135 0 0 0 .067-.117V15.64a.137.137 0 0 0-.063-.115.13.13 0 0 0-.129-.006c-.349.18-.685.263-1.061.263-.58 0-.84-.271-.84-.876V11.07h1.99a.13.13 0 0 0 .094-.04.136.136 0 0 0 .039-.096V9.339a.137.137 0 0 0-.039-.096.132.132 0 0 0-.094-.04v.001Zm6.934.007v-.255c0-.755.281-1.092.914-1.092.376 0 .68.077 1.019.194a.13.13 0 0 0 .118-.02.135.135 0 0 0 .056-.11V6.365a.137.137 0 0 0-.026-.081.133.133 0 0 0-.068-.05 4.852 4.852 0 0 0-1.502-.22c-1.67 0-2.554.965-2.554 2.788v.393h-.87a.132.132 0 0 0-.093.04.136.136 0 0 0-.038.096v1.603c0 .075.059.136.132.136h.87v6.364c0 .075.058.135.131.135h1.809c.072 0 .131-.06.131-.135V11.07h1.69l2.586 6.362c-.294.669-.583.802-.977.802-.319 0-.654-.098-.998-.29a.133.133 0 0 0-.105-.01.135.135 0 0 0-.078.072l-.612 1.38a.137.137 0 0 0 .056.175 3.733 3.733 0 0 0 1.932.508c1.334 0 2.073-.638 2.724-2.355l3.137-8.317a.14.14 0 0 0-.014-.126.131.131 0 0 0-.108-.06h-1.883a.132.132 0 0 0-.126.092l-1.928 5.651L69.006 9.3a.133.133 0 0 0-.124-.088h-3.09v.001Zm-4.02-.008h-1.809a.132.132 0 0 0-.093.041.136.136 0 0 0-.038.096v8.094c0 .075.06.135.132.135h1.809c.072 0 .131-.06.131-.135V9.34a.136.136 0 0 0-.038-.096.133.133 0 0 0-.094-.04Zm-.896-3.685a1.295 1.295 0 0 0-.919.393c-.243.25-.379.586-.377.937a1.342 1.342 0 0 0 .377.938 1.304 1.304 0 0 0 .92.393c.346-.002.677-.143.92-.393s.379-.587.377-.938c0-.735-.581-1.33-1.296-1.33h-.002Zm15.918 4.49h-.331v.434h.331c.165 0 .264-.083.264-.216 0-.142-.099-.217-.264-.217Zm.215.619.36.517h-.304l-.323-.474h-.279v.474h-.254v-1.37h.595c.31 0 .515.163.515.436a.412.412 0 0 1-.31.417Zm-.282-1.31c-.652 0-1.146.532-1.146 1.183 0 .65.49 1.175 1.139 1.175.652 0 1.147-.532 1.147-1.183 0-.65-.492-1.174-1.14-1.174Zm-.007 2.488a1.259 1.259 0 0 1-.904-.384 1.296 1.296 0 0 1-.368-.92c0-.717.563-1.314 1.279-1.314a1.259 1.259 0 0 1 .903.384 1.295 1.295 0 0 1 .369.921c0 .717-.563 1.314-1.279 1.314Z"></path>
        </svg>
    )
}

const Facebook = ({size = 20}) => {
    return (
        <svg role="img" focusable="false" height="20" width="20" viewBox="0 0 24 24"
             fill={'currentColor'}>
            <path data-name="White"
                  d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.62v-7h-2.35v-2.69h2.35v-2a3.27 3.27 0 013.49-3.59 19.25 19.25 0 012.1.11v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.69L17.76 14h-2.34v7H20a1 1 0 001-1V4a1 1 0 00-1-1z"
                  ></path>
        </svg>
    )
}

const PodcastsIcon = ({size = 20}) => {
    return (
        <svg width={size} height={size}  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill={'#fffff'} >

            <path d="M319.261 652.453q23.15 27.685 55.388 48.318l-27.685 32.22q-34.233-22.651-59.907-52.853-52.355-60.926-66.459-138.693t12.086-152.28 87.092-126.364q11.587-10.069 27.187-20.137l27.685 32.22q-16.122 10.584-27.187 20.137-52.355 44.804-74.759 108.476t-10.321 130.147 56.89 118.808zM865.98 185.789q60.422 70.994 88.843 158.315t20.904 179.986q-5.034 61.924-25.172 119.312t-54.621 107.725-81.809 90.629q-11.587 9.565-26.688 20.652l-27.685-32.22q15.103-10.584 27.187-20.652 63.923-55.388 101.944-129.632t44.804-158.83-19.119-164.116-80.812-143.979q-31.722-36.756-74.003-67.456l27.685-32.22q44.804 32.719 78.522 72.489zM190.382 762.714q31.722 36.756 74.003 67.456l-27.685 32.22q-44.3-32.719-78.522-72.489-60.422-70.994-88.843-158.315t-21.156-180.238 49.072-174.689 112.758-142.711q11.587-9.565 26.688-20.652l27.685 32.22q-15.103 10.584-27.187 20.652-64.942 55.892-102.691 132.145t-44.037 156.317 18.867 161.351 81.062 146.748zM512.061 360.97q52.355 0 89.61 37.254t37.254 89.61q0 46.823-30.206 82.058t-75.525 42.786v298.026h-42.288v-298.026q-29.702-5.034-53.854-22.651t-38.001-44.552-13.832-57.638q0-52.355 37.254-89.61t89.61-37.254zM512.061 572.408q35.241 0 59.907-24.92t24.668-59.655-24.92-59.655-59.655-24.92-59.655 24.92-24.92 59.655q0 23.15 11.338 42.537t30.721 30.721 42.537 11.338zM737.104 295.533q52.355 60.926 66.459 138.693t-12.086 152.28-87.092 126.364q-11.587 10.069-27.187 20.652l-27.685-32.719q16.122-10.584 27.187-20.137 52.355-44.3 74.759-108.224t10.321-130.399-56.89-118.808q-23.15-27.685-55.388-48.318l27.685-32.22q33.718 22.651 59.907 52.853z" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
    )
}

const ToggleIcon = ({size = 20}) => {
    return (
        <svg height={size} role="img" width={size} viewBox="0 0 24 24" fill={'#ffff'} className={'transform-90'}>
            <polygon points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 "></polygon>
        </svg>
    )
}
const DurationIcon = ({size = 20, color = 'white'}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16" fill={color}>
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
            <path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path>
        </svg>

    )
}
const LsPlayIcon = ({size = 20, color = 'white'}) => {
    return (
        <svg height={size} role="img" width={size} viewBox="0 0 24 24" >
            <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
        </svg>
    )
}

const LsPlayMoreIcon = ({size = 20, color = 'white'}) => {
    return (
        <svg role="img" height={size} width={size} viewBox="0 0 16 16" fill={color}>
            <path
                d="M3 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
        </svg>
    )
}


export {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusIcon,
    LikedSongsIcon,
    DownloadIcon,
    PrevIcon,
    NextIcon,
    DownArr,
    OpenProfileSettingsIcon,
    PlayIcon,
    InputSearchIcon,
    BottomPlayIcon,
    PlayerPrevIcon,
    PlayerNextIcon,
    LoopIcon,
    MicIcon,
    QueqeIcon,
    ChooseDeviceIcon,
    FullScreenIcon,
    HeartFilledIcon,
    PictureInPictureIcon,
    VolumeMuteIcon,
    VolumeLowIcon,
    VolumeNormalIcon,
    VolumeHighIcon,
    ShuffleIcon,
    ExpandIcon,
    InfoIcon,
    DeviceIcon,
    SpeakerIcon,
    NoMusic,
    SelectedDeviceIcon,
    MusicIcon,
    SpotifyLoginLogo,
    Facebook,
    PodcastsIcon,
    ToggleIcon,
    DurationIcon,
    LsPlayIcon,
    LsPlayMoreIcon
}
