import { ArtistPageMore, HeartFilledIcon, PlayIcon, VerifiedIcon } from "../../Icons";

import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import React from "react";
import Discography from "./Discography";
import About from "./About";
export default function Artist() {

      const [follow, setFollow] = useState(false)
      const [seeMore, setSeeMore] = useState(false)
      const [message, setMessage] = useState(false)

      const handleFollow = () => {
            setFollow(!follow)
            setMessage(true)
            setTimeout(() => setMessage(false), 1200)
      }

      return (
            <div className="flex flex-col min-h-[2200px]">
                  {message &&
                        <div className="px-6 py-4 flex flex-col justify-center h-[50px] bg-[#2c70c5] shadow-4xl rounded-lg absolute z-50 bottom-36 left-[45%]">
                              <div className={"text-center text-sm"}>
                                    <span className={'text-sm tracking-wider'}>
                                          {follow ? 'Saved to Your Library' : 'Removed from your library'}
                                    </span>
                              </div>
                        </div>
                  }
                  <div className="h-[450px] flex flex-col justify-between bg-artist-page px-6 py-7 border-b border-[#000] ">
                        <Navbar />
                        <div className="flex flex-col justify-center gap-y-1 mt-4">
                              <div className="flex items-center">
                                    <div className="CmR9tHJ5ta6oWJlKBm3k">
                                          <div className="b0NcxAbHvRbqgs2S8QDg bn2UNQDs5GLY5rjp5Ljh" />
                                          <VerifiedIcon size={24} />
                                    </div>
                                    <span className="text-sm">
                                          Verified Artist
                                    </span>
                              </div>
                              <span className="text-8xl text-white font-bold my-3">
                                    Travis Scott
                              </span>
                              <div className="mt-2">
                                    <span className="text-[15.5]">
                                          36,647,587 monthly listeners
                                    </span>
                              </div>
                        </div>
                  </div>
                  <div className="relative">
                        <div className="bg-[#30a050] h-[230px] w-full absolute top-0 bg-gradient-artist">
                              <div id="playbanner" className="flex gap-x-8 items-center px-8 py-6">
                                    <button
                                          className={`mr-5 bg-[#1ed760] w-14 h-14 rounded-full shadow-xxl flex items-center 
                                          hover:scale-110                        
                                          justify-around transition duration-200 ease-in-out shadow-2xl 
                                          top-[6.625rem] left-[6.75rem] show`}>
                                          <PlayIcon play={false} size={27} />
                                    </button>

                                    <div>
                                          <button onClick={() => handleFollow()} className={`border cursor-pointer flex items-center border-[#ffffff4d] px-4 py-1 rounded-md hover:border-[#fff] ${follow && ('border-[#fff]')}`}>
                                                <span className="text-s leading-5 font-[400] tracking-wide">
                                                      {!follow ? 'FOLLOW' : 'FOLLOWING'}
                                                </span>
                                          </button>
                                    </div>

                                    <div className={"#ffffff99 relative"}>
                                          <ArtistPageMore size={32} />

                                          {false && <div className={"w-[161px] h-12 absolute flex flex-col left-6 top-9 bg-[#282828] shadow-8xl rounded-md p-1"}>
                                                <span>
                                                      Follow
                                                </span>
                                          </div>}
                                    </div>
                              </div>
                        </div>


                        <div className="w-full absolute top-[110px] px-[32px]">
                              <h2 className="font-[600] text-2xl">Popular</h2>
                              <div className={"flex flex-col gap-y-1 px-9 mt-8 max-h-[56px] "}>
                                    <div className={"flex w-full justify-between"}>
                                          <div className={"flex flex-col gap-y-1 items-center w-[70%] max-h-[56px] rounded-md"}>
                                                <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                      <div className={"w-[60%] flex items-center justify-between"}>
                                                            <div className="flex gap-x-5 items-center">
                                                                  <span className="font-[400] opacity-90">
                                                                        1
                                                                  </span>
                                                                  <div className="flex items-center gap-x-3">
                                                                        <img src="https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce" width={'40px'} alt="" />
                                                                        <div className="flex flex-col">
                                                                              <span className="text-sm opacity-90">
                                                                                    goosebumps
                                                                              </span>
                                                                              <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                    <span className="text-[10px] text-black text-center">
                                                                                          E
                                                                                    </span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex">
                                                                  <span className="opacity-70 text-[14px] tracking-wide">
                                                                        1,512,123,322
                                                                  </span>
                                                            </div>
                                                      </div>
                                                      <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                            <span className={"text-[#1ed760]"}>
                                                                  <HeartFilledIcon size={23} />
                                                            </span>
                                                            <span className={"text-sm opacity-60"}>
                                                                  4:03
                                                            </span>
                                                            <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                  <ArtistPageMore size={24} />
                                                            </span>
                                                      </div>
                                                </div>
                                                <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                      <div className={"w-[60%] flex items-center justify-between"}>
                                                            <div className="flex gap-x-5 items-center">
                                                                  <span className="font-[400] opacity-90">
                                                                        2
                                                                  </span>
                                                                  <div className="flex items-center gap-x-3">
                                                                        <img src="https://i.scdn.co/image/ab67616d00001e02cd945b4e3de57edd28481a3f" width={'40px'} alt="" />
                                                                        <div className="flex flex-col">
                                                                              <span className="text-sm opacity-90">
                                                                                    Fair Trade (with Travis Scott)
                                                                              </span>
                                                                              <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                    <span className="text-[10px] text-black text-center">
                                                                                          E
                                                                                    </span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex">
                                                                  <span className="opacity-70 text-[14px] tracking-wide">
                                                                        512,123,322
                                                                  </span>
                                                            </div>
                                                      </div>
                                                      <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                            <span className={"text-[#1ed760]"}>
                                                                  <HeartFilledIcon size={23} />
                                                            </span>
                                                            <span className={"text-sm opacity-60"}>
                                                                  3:43
                                                            </span>
                                                            <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                  <ArtistPageMore size={24} />
                                                            </span>
                                                      </div>
                                                </div>
                                                <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                      <div className={"w-[60%] flex items-center justify-between"}>
                                                            <div className="flex gap-x-5 items-center">
                                                                  <span className="font-[400] opacity-90">
                                                                        3
                                                                  </span>
                                                                  <div className="flex items-center gap-x-3">
                                                                        <img src="https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3" width={'40px'} alt="" />
                                                                        <div className="flex flex-col">
                                                                              <span className="text-sm opacity-90">
                                                                                    SICKO MODE
                                                                              </span>
                                                                              <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                    <span className="text-[10px] text-black text-center">
                                                                                          E
                                                                                    </span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex">
                                                                  <span className="opacity-70 text-[14px] tracking-wide">
                                                                        1,812,523,322
                                                                  </span>
                                                            </div>
                                                      </div>
                                                      <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                            <span className={"text-[#1ed760]"}>
                                                                  <HeartFilledIcon size={23} />
                                                            </span>
                                                            <span className={"text-sm opacity-60"}>
                                                                  3:43
                                                            </span>
                                                            <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                  <ArtistPageMore size={24} />
                                                            </span>
                                                      </div>
                                                </div>
                                                <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                      <div className={"w-[60%] flex items-center justify-between"}>
                                                            <div className="flex gap-x-5 items-center">
                                                                  <span className="font-[400] opacity-90">
                                                                        1
                                                                  </span>
                                                                  <div className="flex items-center gap-x-3">
                                                                        <img src="https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce" width={'40px'} alt="" />
                                                                        <div className="flex flex-col">
                                                                              <span className="text-sm opacity-90">
                                                                                    goosebumps
                                                                              </span>
                                                                              <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                    <span className="text-[10px] text-black text-center">
                                                                                          E
                                                                                    </span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex">
                                                                  <span className="opacity-70 text-[14px] tracking-wide">
                                                                        1,512,123,322
                                                                  </span>
                                                            </div>
                                                      </div>
                                                      <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                            <span className={"text-[#1ed760]"}>
                                                                  <HeartFilledIcon size={23} />
                                                            </span>
                                                            <span className={"text-sm opacity-60"}>
                                                                  4:03
                                                            </span>
                                                            <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                  <ArtistPageMore size={24} />
                                                            </span>
                                                      </div>
                                                </div>
                                                <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                      <div className={"w-[60%] flex items-center justify-between"}>
                                                            <div className="flex gap-x-5 items-center">
                                                                  <span className="font-[400] opacity-90">
                                                                        3
                                                                  </span>
                                                                  <div className="flex items-center gap-x-3">
                                                                        <img src="https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3" width={'40px'} alt="" />
                                                                        <div className="flex flex-col">
                                                                              <span className="text-sm opacity-90">
                                                                                    SICKO MODE
                                                                              </span>
                                                                              <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                    <span className="text-[10px] text-black text-center">
                                                                                          E
                                                                                    </span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex">
                                                                  <span className="opacity-70 text-[14px] tracking-wide">
                                                                        1,812,523,322
                                                                  </span>
                                                            </div>
                                                      </div>
                                                      <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                            <span className={"text-[#1ed760]"}>
                                                                  <HeartFilledIcon size={23} />
                                                            </span>
                                                            <span className={"text-sm opacity-60"}>
                                                                  3:43
                                                            </span>
                                                            <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                  <ArtistPageMore size={24} />
                                                            </span>
                                                      </div>
                                                </div>
                                                {!seeMore &&
                                                      <button onClick={() => setSeeMore(true)} className="flex justify-start w-full mt-2 uppercase text-sm font-900 opacity-70 hover:opacity-100 cursor-pointer">
                                                            See More
                                                      </button>}
                                                {seeMore &&
                                                      <>
                                                            <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                                  <div className={"w-[60%] flex items-center justify-between"}>
                                                                        <div className="flex gap-x-5 items-center">
                                                                              <span className="font-[400] opacity-90">
                                                                                    1
                                                                              </span>
                                                                              <div className="flex items-center gap-x-3">
                                                                                    <img src="https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce" width={'40px'} alt="" />
                                                                                    <div className="flex flex-col">
                                                                                          <span className="text-sm opacity-90">
                                                                                                goosebumps
                                                                                          </span>
                                                                                          <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                                <span className="text-[10px] text-black text-center">
                                                                                                      E
                                                                                                </span>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div className="flex">
                                                                              <span className="opacity-70 text-[14px] tracking-wide">
                                                                                    1,512,123,322
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                                  <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                                        <span className={"text-[#1ed760]"}>
                                                                              <HeartFilledIcon size={23} />
                                                                        </span>
                                                                        <span className={"text-sm opacity-60"}>
                                                                              4:03
                                                                        </span>
                                                                        <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                              <ArtistPageMore size={24} />
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                            <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                                  <div className={"w-[60%] flex items-center justify-between"}>
                                                                        <div className="flex gap-x-5 items-center">
                                                                              <span className="font-[400] opacity-90">
                                                                                    2
                                                                              </span>
                                                                              <div className="flex items-center gap-x-3">
                                                                                    <img src="https://i.scdn.co/image/ab67616d00001e02cd945b4e3de57edd28481a3f" width={'40px'} alt="" />
                                                                                    <div className="flex flex-col">
                                                                                          <span className="text-sm opacity-90">
                                                                                                Fair Trade (with Travis Scott)
                                                                                          </span>
                                                                                          <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                                <span className="text-[10px] text-black text-center">
                                                                                                      E
                                                                                                </span>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div className="flex">
                                                                              <span className="opacity-70 text-[14px] tracking-wide">
                                                                                    512,123,322
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                                  <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                                        <span className={"text-[#1ed760]"}>
                                                                              <HeartFilledIcon size={23} />
                                                                        </span>
                                                                        <span className={"text-sm opacity-60"}>
                                                                              3:43
                                                                        </span>
                                                                        <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                              <ArtistPageMore size={24} />
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                            <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                                  <div className={"w-[60%] flex items-center justify-between"}>
                                                                        <div className="flex gap-x-5 items-center">
                                                                              <span className="font-[400] opacity-90">
                                                                                    3
                                                                              </span>
                                                                              <div className="flex items-center gap-x-3">
                                                                                    <img src="https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3" width={'40px'} alt="" />
                                                                                    <div className="flex flex-col">
                                                                                          <span className="text-sm opacity-90">
                                                                                                SICKO MODE
                                                                                          </span>
                                                                                          <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                                <span className="text-[10px] text-black text-center">
                                                                                                      E
                                                                                                </span>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div className="flex">
                                                                              <span className="opacity-70 text-[14px] tracking-wide">
                                                                                    1,812,523,322
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                                  <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                                        <span className={"text-[#1ed760]"}>
                                                                              <HeartFilledIcon size={23} />
                                                                        </span>
                                                                        <span className={"text-sm opacity-60"}>
                                                                              3:43
                                                                        </span>
                                                                        <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                              <ArtistPageMore size={24} />
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                            <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                                  <div className={"w-[60%] flex items-center justify-between"}>
                                                                        <div className="flex gap-x-5 items-center">
                                                                              <span className="font-[400] opacity-90">
                                                                                    1
                                                                              </span>
                                                                              <div className="flex items-center gap-x-3">
                                                                                    <img src="https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce" width={'40px'} alt="" />
                                                                                    <div className="flex flex-col">
                                                                                          <span className="text-sm opacity-90">
                                                                                                goosebumps
                                                                                          </span>
                                                                                          <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                                <span className="text-[10px] text-black text-center">
                                                                                                      E
                                                                                                </span>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div className="flex">
                                                                              <span className="opacity-70 text-[14px] tracking-wide">
                                                                                    1,512,123,322
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                                  <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                                        <span className={"text-[#1ed760]"}>
                                                                              <HeartFilledIcon size={23} />
                                                                        </span>
                                                                        <span className={"text-sm opacity-60"}>
                                                                              4:03
                                                                        </span>
                                                                        <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                              <ArtistPageMore size={24} />
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                            <div className={"w-full flex group hover:bg-[#ffffff1a] rounded-md px-4 py-2"}>
                                                                  <div className={"w-[60%] flex items-center justify-between"}>
                                                                        <div className="flex gap-x-5 items-center">
                                                                              <span className="font-[400] opacity-90">
                                                                                    3
                                                                              </span>
                                                                              <div className="flex items-center gap-x-3">
                                                                                    <img src="https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3" width={'40px'} alt="" />
                                                                                    <div className="flex flex-col">
                                                                                          <span className="text-sm opacity-90">
                                                                                                SICKO MODE
                                                                                          </span>
                                                                                          <div className="bg-[#ffffff99] mt-1 rounded-sm w-4 h-4 flex justify-center">
                                                                                                <span className="text-[10px] text-black text-center">
                                                                                                      E
                                                                                                </span>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div className="flex">
                                                                              <span className="opacity-70 text-[14px] tracking-wide">
                                                                                    1,812,523,322
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                                  <div className="w-[40%] flex justify-end items-center gap-x-6">
                                                                        <span className={"text-[#1ed760]"}>
                                                                              <HeartFilledIcon size={23} />
                                                                        </span>
                                                                        <span className={"text-sm opacity-60"}>
                                                                              3:43
                                                                        </span>
                                                                        <span className={"text-white opacity-0 group-hover:opacity-100"}>
                                                                              <ArtistPageMore size={24} />
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                            {seeMore &&
                                                                  <button onClick={() => setSeeMore(false)} className="flex justify-start w-full mt-2 uppercase text-sm font-900 opacity-70 hover:opacity-100 cursor-pointer">
                                                                        show less
                                                                  </button>}

                                                      </>

                                                }

                                                <Discography />

                                                <About />

                                          </div>

                                          <div className={"flex flex-col ml-2 w-[30%] px-3"}>
                                                <h2 className={"font-[600] text-2xl"}>Artist Pick</h2>
                                                <div className={"mt-6 flex"}>
                                                      <img width={76} src="https://mosaic.scdn.co/640/ab67616d00001e02ab738b25b86bf02f0346c53dab67616d00001e02ca49b04e75d5d9e3d1bd3617ab67616d00001e02eba68473429f9f4eaf1943d0ab67616d00001e02f8d415dab5ed7e3747bd38dd" alt="" />
                                                      <div className={"ml-4"}>
                                                            <div className={"flex flex-col gap-y-2"}>
                                                                  <div className={"flex items-center"}>
                                                                        <img width={24} className={"rounded-full"} src="https://i.scdn.co/image/ab6761610000f178e707b87e3f65997f6c09bfff" alt="" />
                                                                        <span className={"text-s ml-2 opacity-70"}>
                                                                              Posted By Travis Scott
                                                                        </span>
                                                                  </div>
                                                                  <div>
                                                                        <span className={"text-m font-[550]"}>
                                                                              CACTUS JACK OFFICIAL PLAYLIST
                                                                        </span>
                                                                  </div>
                                                                  <span className={"text-s font-[500] opacity-50"}>
                                                                        Playlist
                                                                  </span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>

            </div>
      )
}


