import { ArtistPageMore, HeartFilledIcon, PlayIcon, VerifiedIcon } from "../../Icons";

import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import React from "react";
import HomeBox from "../../components/HomeBox";

export default function Box({ title, content, img }) {


      return (
            <div className="flex flex-col gap-y-2 bg-[#181818] rounded-lg shadow-4xl cursor-pointer hover:bg-[#282828] transation duration-150 p-5 min-h-[258px] py-6 relative group">
                  <div className="flex">
                        <img width={150} src={img} alt="" />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-1">
                        <span className="font-[600] tracking-wider">
                              {title}
                        </span>
                        <span className="text-s opacity-70">
                              {content}   
                        </span>
                  </div>

                  <button
                        className={`mr-5 bg-[#1ed760] w-12 h-12 rounded-full shadow-xxl flex items-center
                                          hover:scale-110 absolute       
                                          justify-around transition duration-200 ease-in-out shadow-2xl 
                                          top-[7.125rem] left-[7rem] hide group-hover:show`}>
                        <PlayIcon play={false} size={23} />
                  </button>
            </div>
      )
}


