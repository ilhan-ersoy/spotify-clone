import Navbar from "./Navbar";
import {Route, Switch} from "react-router-dom";
import Home from "../PageSections/Home";
import Search from "../PageSections/Search";
import Collection from "../PageSections/Collection";
import {useEffect, useState} from "react";
import Loading from "./Utils/Loading";
import Login from "./Auth/Login";

export default function Content() {
    const [isLoading, setIsLoading] = useState(true);

    const timeout = setTimeout(() => {
        setIsLoading(false);
    }, 3000)


    return (
        <main className={"flex-auto"}>
            <Navbar/>
            {!isLoading ? <Switch>
                <nav className={'px-8 py-6'}>
                    <Route exact='/' path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/search'}>
                        <Search/>
                    </Route>
                    <Route path={'/collection'}>
                        <Collection/>
                    </Route>


                </nav>
            </Switch>:
                <Loading/>}
        </main>
    )
}

