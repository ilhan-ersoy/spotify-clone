import { DeviceIcon, InfoIcon, SpeakerIcon, PlayIcon, CloseX } from "../../Icons";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { setDevice } from "../../Redux/devicesSlice";
import SearchedArtist from "./SearchedArtist";

export default function RecentSearches() {

      return (
            <div>
                  <h1 className="text-2xl font-[600]">Recent searches</h1>
                  <div className="flex items-center gap-x-3">
                        <SearchedArtist name={'Travis Scott'} img={'https://i.scdn.co/image/ab6761610000f178e707b87e3f65997f6c09bfff'} type={'Artist'} />
                        <SearchedArtist name={'Eminem'} img={'https://i.scdn.co/image/ab6761610000f178a00b11c129b27a88fc72f36b'} type={'Artist'} />
                        <SearchedArtist name={'Doja Cat'} img={'https://i.scdn.co/image/ab6761610000f178727a2ac15afe659be999beba'} type={'Artist'} />
                        <SearchedArtist name={'Eminem'} img={'https://i.scdn.co/image/ab6761610000f178a00b11c129b27a88fc72f36b'} type={'Artist'} />
                  </div>
            </div>
      )
}