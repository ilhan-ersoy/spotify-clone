import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { aboutComp, setAboutComp } from "../../Redux/themeSlice";

export default function About() {

      const showAboutComp = useSelector(state => state.theme.aboutComp)
      const dispatch = useDispatch()


      return (
            <div className="w-full flex flex-col justify-start mt-8">
                  <div className="flex">
                        <h2 className="font-[600] text-xl hover:underline cursor-pointer p-1">
                              About
                        </h2>

                        <h2 className="font-[600] text-xl hover:underline cursor-pointer p-1 ml-[764px] ">
                              tour
                        </h2>

                        <h2 className="font-[600] text-xl hover:underline cursor-pointer p-1 ml-[350px]">
                              Merch
                        </h2>
                  </div>

                  <div className="flex justify-between w-[155%] mt-8">
                        <div onClick={() => dispatch(setAboutComp(true))} className="w-[48%] flex flex-col cursor-pointer justify-end h-[650px] artist-about-bg rounded-xl relative  hover:scale-[1.02] transation duration-300">
                              <div className="w-[80px] bg-[#0d72ea] shadow-4xl right-10 top-10 h-[80px] flex justify-center #0d72ea rounded-full absolute">
                                    <div className="flex flex-col justify-center items-center">
                                          <span className="text-2xl font-[500]">
                                                #55
                                          </span>
                                          <span className="text-[10px]">
                                                in the world
                                          </span>
                                    </div>
                              </div>
                              <div className="p-[60px]">
                                    <div>
                                          36,524,937 monthly listeners
                                    </div>
                                    <div className="text-sm mt-2">
                                          London, GB
                                          797,255 listeners
                                          Los Angeles, US
                                          680,386 listeners
                                          Chicago, US
                                          580,076 listeners
                                          Dallas, US
                                          491,127 listeners
                                          Sydney, AU
                                          474,856 listeners

                                          A Houston-born hip-hop artist and producer affiliated with
                                          's GOOD Music and 's , Travis Scott became known during the early 2010s for his heavily Auto-Tuned half-sung/half-rapped vocal style. Within seven years...
                                    </div>
                              </div>
                        </div>
                        <div className="w-[26%] flex flex-col gap-y-3 h-[250px] px-8">
                              <div className="flex items-center gap-x-3 group cursor-pointer">
                                    <div className="bg-[#2a2a2a] flex flex-col gap-y-1 justify-center text-center rounded-md shadow-6xl w-[73px] h-[75px]">
                                          <span className="text-m group-hover:underline">OCT</span>
                                          <span className="text-xl font-[600] group-hover:underline">15</span>
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                          <span className="text-sm group-hover:underline">Travis Scott</span>
                                          <span className="text-s opacity-80 group-hover:underline">Sat 10:00 PM • Zouk Nightclub, Las Vegas</span>
                                    </div>
                              </div>
                              <div className="flex items-center gap-x-3 group cursor-pointer">
                                    <div className="bg-[#2a2a2a] flex flex-col gap-y-1 justify-center text-center rounded-md shadow-6xl w-[73px] h-[75px]">
                                          <span className="text-m group-hover:underline">OCT</span>
                                          <span className="text-xl font-[600] group-hover:underline">15</span>
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                          <span className="text-sm group-hover:underline">Travis Scott</span>
                                          <span className="text-s opacity-80 group-hover:underline">Sat 10:00 PM • Zouk Nightclub, Las Vegas</span>
                                    </div>
                              </div>
                              <div className="flex items-center gap-x-3 group cursor-pointer">
                                    <div className="bg-[#2a2a2a] flex flex-col gap-y-1 justify-center text-center rounded-md shadow-6xl w-[73px] h-[75px]">
                                          <span className="text-m group-hover:underline">OCT</span>
                                          <span className="text-xl font-[600] group-hover:underline">15</span>
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                          <span className="text-sm group-hover:underline">Travis Scott</span>
                                          <span className="text-s opacity-80 group-hover:underline">Sat 10:00 PM • Zouk Nightclub, Las Vegas</span>
                                    </div>
                              </div>
                              <div className="flex items-center gap-x-3 group cursor-pointer">
                                    <div className="bg-[#2a2a2a] flex flex-col gap-y-1 justify-center text-center rounded-md shadow-6xl w-[73px] h-[75px]">
                                          <span className="text-m group-hover:underline">OCT</span>
                                          <span className="text-xl font-[600] group-hover:underline">15</span>
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                          <span className="text-sm group-hover:underline">Travis Scott</span>
                                          <span className="text-s opacity-80 group-hover:underline">Sat 10:00 PM • Zouk Nightclub, Las Vegas</span>
                                    </div>
                              </div>
                     
                        </div>
                        <div className="w-[26%] flex flex-col gap-y-3 h-[250px] ">
                              <div>
                                    <div>
                                          <img width={72} src="https://merch-img.scdn.co/https%3A%2F%2Fmerchbar.imgix.net%2Fproduct%2F61%2F3507%2F6982510772396%2FPqYnTWUYBirds-In-The-Trap-Sing-Mcknight.png%3Fdpr%3D2%26w%3D640%26h%3D640?h=300&w=300&s=813c8aec08ec50de1c5c94a74b8be675" alt="" />
                                    </div>
                                    <div>
                                          <span className="text-2xl">
                                                Lorem, ipsum.
                                          </span>
                                    </div>
                              </div>
                        </div>
                  </div>
                  
            </div>
      )


}


