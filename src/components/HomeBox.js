import {NavLink} from "react-router-dom";
import {PlayIcon} from "../Icons";
import {useState} from "react";
import Welcome from "./Main/Welcome";
import SectionMain from "./Main/SectionMain";
import SectionFavories from "./Main/SectionFavories";

export default function HomeBox({title, more = false, items, type}){

    const getTitle = (type) => {
        switch (type){
            case 'welcome':
                return (
                    <h3 className={'text-3xl font-semibold tracking-tight cursor-pointer hover:underline'}>{title}</h3>
                )

            case 'type1':
                return(
                    <h3 className={'text-2xl font-semibold tracking-tight cursor-pointer hover:underline'}>{title}</h3>
                )

            default:
                return(
                    <div>
                        Selam
                    </div>
                )
        }
    }

    const getContent = (type) => {
        switch (type){
            case 'welcome':
                return (
                    <div className={'grid grid-cols-3 gap-x-4'}>
                        {items.map((item) => <Welcome item={item}/> )}
                    </div>
                )

            case 'type1':
                return(
                    <div className={'grid grid-cols-8 gap-x-4'}>
                        {items.map((item) => <SectionMain item={item} type={type}/> )}
                    </div>
                )

            case 'type2':
                return (
                    <div className={'w-full flex items-center gap-x-6'}>
                        {items.map((fav) => <SectionFavories fav={fav}/> )}
                    </div>
                )
            default:
                return(
                    <div>
                        <a href="#" className={'rounded-lg h-[13.75rem bg-[#ba5d08]'}>

                        </a>
                    </div>
                )
        }
    }

    return (
        <section >
            <header className={'flex items-center justify-between mb-3'}>
                {getTitle(type)}
                {more &&
                    (<NavLink to={more} className={'uppercase text-xs text-[#b3b3b3] font-semibold hover:underline'}>HEPSİNİ GÖR</NavLink>)
                }
            </header>

            {getContent(type)}

        </section>
    )
}