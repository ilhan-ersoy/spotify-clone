import {NavLink} from "react-router-dom";
import {PlayIcon} from "../Icons";
import {useState} from "react";
import Welcome from "./Main/Welcome";
import Section from "./Main/Section";

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
                        {items.map((item) => <Section item={item} type={type}/> )}
                    </div>
                )

            default:
                return(
                    <div>
                        test
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