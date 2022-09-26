import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import {
    BrowserRouter as Router, Route, Switch, useRouteMatch
} from "react-router-dom";
import { useState, useEffect } from "react";
import DeviceBar from "./components/DeviceBar";
import { useDispatch, useSelector } from "react-redux";
import { aboutComp, setAboutComp, setShowContent } from "./Redux/themeSlice";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
import { CloseComp } from "./Icons";


function App() {

    const background = useSelector(state => state.theme.background)
    const device = useSelector(state => state.devices.device);
    const [isLoading, setIsLoading] = useState(true);
    const isLoginPage = useSelector(state => state.theme.isLoginPage);
    const dispatch = useDispatch();
    const showAboutComp = useSelector(state => state.theme.aboutComp)

    const timeout = setTimeout(() => {
        setIsLoading(false);
    }, 500)

    const [isLogin, setIsLogin] = useState(null)
    const [showLogin, setShowLogin] = useState(true)

    const [showContent, setShowContent] = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        if (showAboutComp) {
            setTimeout(() => setShowContent(true), 150)
        }
    }, [showAboutComp])

    console.log('show content', showContent)
    console.log('showAboutComp ', showAboutComp)

    return (
        <>
            <Router>
                <div className={`wrapper  ${!isLoginPage ? ('bg-[#121212]') : ('bg-white')}`}>
                    {!isLoginPage && <Sidebar />}
                    <Content />
                </div>
                <Player />

                {device && <DeviceBar />}
            </Router>

            {showAboutComp &&
                <div className="w-full h-full absolute bg-[rgba(0,0,0,0.5)]">
                    {showContent &&
                        <div className="flex justify-center h-full">
                            <div className="flex flex-col w-full justify-center bg">
                                <div className="mx-auto bg-black max-w-[768px] overflow-y-auto overflow-x-hidden" style={{ maxWidth: '768px' }}>
                                    <div className="relative">
                                        <button
                                            onClick={() => {
                                                dispatch(setShowContent(false))
                                                dispatch(setAboutComp(false))
                                            }} className="text-[#b3b3b3] z-99 sticky hover:bg-[rgba(0,0,0,.7)] cursor-pointer transation duration-150"
                                            style={{
                                                left: '100%',
                                                top: '10px',
                                                zIndex: '99',
                                                margin: '15px'
                                            }}>
                                            <CloseComp size={22} />
                                        </button>
                                        <Slider {...settings}>
                                            <div>
                                                <img src="https://i.scdn.co/image/8b158c6e3f99141b60c53bac6525df3ea330d705" alt="" />
                                            </div>
                                            <div>
                                                <img src="https://i.scdn.co/image/f405323bc7e9c2530146c8db70a1b912773e8aac" alt="" />
                                            </div>
                                            <div>
                                                <img src="https://i.scdn.co/image/85525935dd640682ff7403c24621195c59ffbaea" alt="" />
                                            </div>
                                        </Slider>

                                        <div className="bg-[#121212] w-full h-auto artist-popup-banner flex shadow-4xl rounded p-[50px] z-[98]">
                                            <div className="w-[210px] text-black flex flex-col gap-y-4">
                                                <div className="w-[80px] bg-[#0d72ea] shadow-4xl right-10 top-10 min-h-[80px] flex justify-center #0d72ea rounded-full">
                                                    <div className="flex flex-col justify-center items-center">
                                                        <span className="text-2xl text-white font-[500]">
                                                            #55
                                                        </span>
                                                        <span className="text-[10px] text-white">
                                                            in the world
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-y-2 mt-9">
                                                    <span className="text-3xl font-semibold text-white">
                                                        21,014,019
                                                    </span>
                                                    <span className="opacity-80 text-[#a6a6a6] text-s">
                                                        Followers
                                                    </span>
                                                </div>

                                                <div className="flex flex-col gap-y-2 mt-9">
                                                    <span className="text-3xl font-semibold text-white">
                                                        36,393,332
                                                    </span>
                                                    <span className="opacity-80 text-[#a6a6a6] text-s">
                                                        Monthly Listeners
                                                    </span>
                                                </div>

                                                <div className="flex flex-col mt-4">
                                                    {new Array(5).fill(
                                                        <div className="flex flex-col gap-y-2 mt-1">
                                                            <span className="text-m text-white">
                                                                London, GB
                                                            </span>
                                                            <span className="opacity-80 text-[#a6a6a6] text-s">
                                                                791,374 listeners
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-y-5">
                                                <div className="max-w-[477px]">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic, dolores ab consequatur mollitia ipsa quia nihil voluptates quo error! Est, praesentium ducimus. Voluptates non voluptatibus quis sed suscipit perferendis quod quia nesciunt in tempore alias sequi ipsa sit veniam libero necessitatibus, sunt corporis molestias rerum est aperiam pariatur. Quo, natus excepturi commodi voluptatem recusandae quibusdam eligendi labore incidunt iusto repellat consequatur blanditiis, modi voluptatum sed repellendus voluptate consequuntur sunt minima. Eum assumenda voluptatum temporibus aliquid laboriosam! Temporibus similique in illum vitae eligendi incidunt porro tempore, ipsa, aliquid ex excepturi?
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic, dolores ab consequatur mollitia ipsa quia nihil voluptates quo error! Est, praesentium ducimus. Voluptates non voluptatibus quis sed suscipit perferendis quod quia nesciunt in tempore alias sequi ipsa sit veniam libero necessitatibus, sunt corporis molestias rerum est aperiam pariatur. Quo, natus excepturi commodi voluptatem recusandae quibusdam eligendi labore incidunt iusto repellat consequatur blanditiis, modi voluptatum sed repellendus voluptate consequuntur sunt minima. Eum assumenda voluptatum temporibus aliquid laboriosam! Temporibus similique in illum vitae eligendi incidunt porro tempore, ipsa, aliquid ex excepturi?
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic, dolores ab consequatur mollitia ipsa quia nihil voluptates quo error! Est, praesentium ducimus. Voluptates non voluptatibus quis sed suscipit perferendis quod quia nesciunt in tempore alias sequi ipsa sit veniam libero necessitatibus, sunt corporis molestias rerum est aperiam pariatur. Quo, natus excepturi commodi voluptatem recusandae quibusdam eligendi labore incidunt iusto repellat consequatur blanditiis, modi voluptatum sed repellendus voluptate consequuntur sunt minima. Eum assumenda voluptatum temporibus aliquid laboriosam! Temporibus similique in illum vitae eligendi incidunt porro tempore, ipsa, aliquid ex excepturi?
                                                </div>
                                                <div className="flex items-center gap-x-4">
                                                    <img style={{ width: 32 }} className="rounded-full shadow-4xl" src="https://i.scdn.co/image/ab6761610000f178e707b87e3f65997f6c09bfff" alt="" />
                                                    <span className="text-s opacity-80">
                                                        Posted By Travis Scott
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>}

        </>
    );
}

export default App;
