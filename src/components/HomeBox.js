import { NavLink } from "react-router-dom";
import SectionHome from "./Sections/SectionHome";
import SectionMain from "./Sections/SectionMain";
import SectionFavories from "./Sections/SectionFavories";
import SectionSeeAll from "./Sections/SectionSeeAll";
import SectionCollection from "./Sections/SectionCollection";
import LikedSongsSec from "./Collection/LikedSongsSec";

export default function HomeBox({ title, more = false, items, type }) {

    const getTitle = (type) => {
        switch (type) {
            case 'welcome':
                return (
                    <h3 className={'text-3xl font-semibold tracking-tight cursor-pointer hover:underline'}>{title}</h3>
                )

            case 'type1':
                return (
                    <h3 className={'text-2xl font-semibold tracking-tight cursor-pointer hover:underline'}>{title}</h3>
                )
            case 'type2':
                return (
                    <h3 className={'text-2xl font-semibold tracking-tight cursor-pointer hover:underline'}>{title}</h3>
                )

            case 'type3':
                return (
                    <h3 className={'text-2xl font-semibold tracking-tight cursor-pointer hover:underline mt-8'}>{title}</h3>
                )
            case 'type4':
                return (
                    <h3 className={'text-2xl font-semibold tracking-tight cursor-pointer hover:underline mt-8'}>{title}</h3>
                )
        }
    }

    const getContent = (type) => {
        switch (type) {
            case 'welcome':
                return (
                    <div className={'grid grid-cols-3 gap-x-4'}>
                        {items.map((item) => <SectionHome item={item} key={item?.id} />)}
                    </div>
                )

            case 'type1':
                return (
                    <div className={'grid grid-cols-8 gap-x-4'}>
                        {items.map((item) => <SectionMain item={item} type={type} key={item?.id} />)}
                    </div>
                )

            case 'type2':
                return (
                    <div className={'w-full flex items-center gap-x-6'}>
                        {items.map((fav) => <SectionFavories fav={fav} key={fav?.id} />)}
                    </div>
                )
            case 'type3':
                return (
                    <div className={'w-full grid grid-cols-8 gap-x-4 gap-y-6  '}>
                        {items.map((fav) => <SectionSeeAll fav={fav} key={fav?.id} />)}
                    </div>
                )
            case 'type4':
                return (
                    <div className={'flex justify-between'}>
                        <LikedSongsSec />
                        <div className={'grid grid-cols-6 gap-x-5'}>
                            {items.map((item) => <SectionCollection item={item} type={type} key={item?.id} />)}
                        </div>
                    </div>
                )
            case 'type5':
                return (
                    <div className={'flex justify-between'}>
                        <div className={'grid grid-cols-6 gap-x-5'}>
                            {items.map((item) => <SectionCollection item={item} type={type} key={item?.id} />)}
                        </div>
                    </div>
                )
        }
    }

    return (
        <section>
            <header className={'flex items-center justify-between mb-4'}>
                {getTitle(type)}
                {more &&
                    (<NavLink to={more} className={'uppercase text-xs text-[#b3b3b3] font-semibold hover:underline'}>SEE ALL</NavLink>)
                }
            </header>

            {getContent(type)}

        </section>
    )
}