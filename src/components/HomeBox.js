import {NavLink} from "react-router-dom";
import {PlayIcon} from "../Icons";
import {useState} from "react";
import Section from "./Main/Section";

export default function HomeBox({title, more = false, items}){
    return (
        <section>
            <header className={'flex items-center justify-between mb-3'}>
                <h3 className={'text-3xl font-semibold tracking-tight cursor-pointer hover:underline'}>{title}</h3>
                {more &&
                    (<NavLink to={more} className={'uppercase text-xs text-[#b3b3b3] font-semibold hover:underline'}>HEPSİNİ GÖR</NavLink>)
                }
            </header>
            <div className={'grid grid-cols-3 gap-x-4 '}>
                {items.map((item) => <Section item={item}/> )}
            </div>
        </section>
    )
}