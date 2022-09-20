import { ArtistPageMore, HeartFilledIcon, PlayIcon, VerifiedIcon } from "../../Icons";

import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import React from "react";
import HomeBox from "../../components/HomeBox";
import Box from "./Box";

export default function Discography() {

      const [select, setSelect] = useState(1)

      const items = [
            {
                  id: 1,
                  title: 'Rihanna',
                  image: '\thttps://i.scdn.co/image/ab6761610000f178019d6873a01987cbe35888cd',
                  mp3Src: 'https://freesound.org/data/previews/623/623984_5674468-lq.mp3',
                  color: 'bg-gradient-to-b bg-[#65605b] to-black'
            },
            {
                  id: 2,
                  title: 'Strange Fruits Music',
                  image: 'https://i.scdn.co/image/ab6761610000e5ebee1b9ea8fbb0103bd276938a',
                  mp3Src: 'https://freesound.org/data/previews/623/623980_1648170-lq.mp3',
                  color: ' bg-gradient-to-b bg-[#1f1a07] to-black'
            },
            {
                  id: 3,
                  title: 'NKVT',
                  image: 'https://i.scdn.co/image/ab67706f00000002a9271efc7ac18a29d4c98ba2',
                  mp3Src: 'https://freesound.org/data/previews/623/623977_1089955-lq.mp3',
                  color: 'bg-gradient-to-b bg-[#a64b85] to-black'
            },
            {
                  id: 4,
                  title: 'Drake',
                  image: 'https://i.scdn.co/image/ab6761610000f1789e46a78c5cd2f7a8e7669980',
                  mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
                  color: 'bg-gradient-to-b bg-[#6f5fec] to-black'
            },
            {
                  id: 5,
                  title: 'Liked Songs',
                  image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
                  mp3Src: 'https://freesound.org/data/previews/623/623855_1391542-lq.mp3',
                  color: 'bg-gradient-to-b bg-[#ac3919] to-black'
            },
            {
                  id: 6,
                  title: '22',
                  image: 'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
                  mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
                  color: 'bg-gradient-to-b bg-[#ac3919] to-black'
            },
            {
                  id: 7,
                  title: 'Liked Songs',
                  image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
                  mp3Src: 'https://freesound.org/data/previews/623/623855_1391542-lq.mp3',
                  color: 'bg-gradient-to-b bg-[#ac3919] to-black'
            },
            {
                  id: 8,
                  title: '22',
                  image: 'https://i.scdn.co/image/ab67616d0000b273c59447f268b6dfb4c433e8cc',
                  mp3Src: 'https://freesound.org/data/previews/623/623878_2282212-lq.mp3',
                  color: 'bg-gradient-to-b bg-[#ac3919] to-black'
            }
      ]

      return (
            <div className="flex flex-col w-full mt-5 text-m justify-start">
                  <h2 className="font-[600] text-xl hover:underline cursor-pointer p-1">
                        Discography
                  </h2>
                  <div className="w-full flex px-3 mt-3 gap-x-2">
                        <div onClick={() => setSelect(1)} className={`text-s  px-3 py-2 rounded-full transation duration-150 cursor-pointer ${select == 1 ? ('bg-[#fff] text-black') : ('bg-[#ffffff1a] opacity-80')}`}>
                              Popular releases
                        </div>
                        <div onClick={() => setSelect(2)} className={`text-s  px-3 py-2 rounded-full transation duration-150 cursor-pointer ${select == 2 ? ('bg-[#fff] text-black') : ('bg-[#ffffff1a] opacity-80')}`}>
                              Albums
                        </div>
                        <div onClick={() => setSelect(3)} className={`text-s  px-3 py-2 rounded-full transation duration-150 cursor-pointer ${select == 3 ? ('bg-[#fff] text-black') : ('bg-[#ffffff1a] opacity-80')}`}>
                              Singles and Eps
                        </div>
                  </div>

                  <div className="w-[150%] realtive">
                        <div className="w-full flex mt-6 gap-x-2">
                              {select === 3 &&
                                    <>
                                          <Box title={"Hold That(f.."} content={"Latest Release"} img={"https://i.scdn.co/image/ab67616d00001e024f410ee7ae9379cc30d07c50"} />
                                          <Box title={"HIGHEST IN THE..."} content={"2019 single"} img={"https://i.scdn.co/image/ab67616d00001e02e42b5fea4ac4c3d6328b622b"} />
                                          <Box title={"Goosebumps"} content={"2021 Single"} img={"https://i.scdn.co/image/ab67616d00001e029109b0425fb5b36284a24891"} />
                                          <Box title={"ASTROWORLD"} content={"2018 ALBUM"} img={"https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3"} />
                                    </>
                              }
                              {select === 2 &&
                                    <>
                                          <Box title={"Birds In The Trap..."} content={"2016 Album"} img={"https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce"} />
                                          <Box title={"Goosebumps"} content={"2021 Single"} img={"https://i.scdn.co/image/ab67616d00001e029109b0425fb5b36284a24891"} />
                                          <Box title={"ASTROWORLD"} content={"2018 ALBUM"} img={"https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3"} />
                                          <Box title={"Hold That(f.."} content={"Latest Release"} img={"https://i.scdn.co/image/ab67616d00001e024f410ee7ae9379cc30d07c50"} />
                                    </>
                              }
                              {select === 1 &&
                                    <>
                                          <Box title={"Birds In The Trap..."} content={"2016 Album"} img={"https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce"} />
                                          <Box title={"Goosebumps"} content={"2021 Single"} img={"https://i.scdn.co/image/ab67616d00001e029109b0425fb5b36284a24891"} />
                                          <Box title={"Hold That(f.."} content={"Latest Release"} img={"https://i.scdn.co/image/ab67616d00001e024f410ee7ae9379cc30d07c50"} />
                                          <Box title={"Birds In The Trap..."} content={"2016 Album"} img={"https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce"} />
                                          <Box title={"ASTROWORLD"} content={"2018 ALBUM"} img={"https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3"} />
                                          <Box title={"ASTROWORLD"} content={"2018 ALBUM"} img={"https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3"} />
                                          <Box title={"Goosebumps"} content={"2021 Single"} img={"https://i.scdn.co/image/ab67616d00001e029109b0425fb5b36284a24891"} />
                                          <Box title={"Hold That(f.."} content={"Latest Release"} img={"https://i.scdn.co/image/ab67616d00001e024f410ee7ae9379cc30d07c50"} />
                                    </>
                              }

                        </div>
                  </div>
            </div>

      )
}


