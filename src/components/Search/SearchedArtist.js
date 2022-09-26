import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CloseX, PlayIcon } from "../../Icons";
import { useDispatch, useSelector } from "react-redux";
import { artistsPage, setArtistsPage } from "../../Redux/themeSlice";


export default function SearchedArtist({ name, type, img }) {

      const [play, setPlay] = useState(false);
      const [hide, setHide] = useState(false);
      const dispatch = useDispatch();
      return (
            <div className={`w-[206px] m-2 bg-[#181818] hover:bg-[#282828] transation duration-150 cursor-pointer h-[284px] rounded-md mt-3 shadow-2xl flex justify-center relative ${hide && 'hidden'}`}>
                  <NavLink onClick={() => dispatch(setArtistsPage(true))} to='/artist'>
                        <div className="flex flex-col group">
                              <img src={img} className="w-[174] h-[174px] mt-4 rounded-full shadow-4xl" width={174} alt="" />
                              <div className="mt-5 flex flex-col gap-y-1">
                                    <span>{name}</span>
                                    <span className="text-s opacity-70">
                                          {type}
                                    </span>
                              </div>
                              <button onClick={() => setHide(true)} className="absolute right-1 top-2 w-7 h-7 cursor-pointer transation duration-150 hover:scale-110 p-[6px] flex flex-col justify-center bg-black rounded-full">
                                    <CloseX size={24} />
                              </button>
                              <button
                                    onClick={() => setPlay(!play)}
                                    className={`mr-5 bg-[#1ed760] w-12 h-12 rounded-full shadow-xxl flex items-center 
                                        justify-around transition duration-200 ease-in-out absolute right-0 top-[49%] shadow-4xl hide group-hover:show`}>
                                    <PlayIcon play={play} />
                              </button>
                        </div>
                  </NavLink>
            </div>
      )

}