import { ArtistPageMore, HeartFilledIcon, PlayIcon, VerifiedIcon } from "../../Icons";

import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import React from "react";
import Discography from "./Discography";
export default function About() {

      return (
            <div className="w-full flex flex-col justify-start mt-8">
                  <h2 className="font-[600] text-xl hover:underline cursor-pointer p-1">
                        About
                  </h2>

                  <div className="flex justify-between w-[155%] mt-8">
                        <div onClick={() => alert('hi')} className="w-[48%] flex flex-col justify-end h-[650px] artist-about-bg rounded-xl relative  hover:scale-[1.02] transation duration-300">
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
                        <div className="w-[26%] h-[250px]">

                        </div>
                        <div className="w-[26%] h-[350px] bg-gray-600">

                        </div>
                  </div>
            </div>
      )


}


