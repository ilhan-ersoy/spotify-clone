import Navbar from "./Navbar";
import {Route, Switch} from "react-router-dom";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Collection from "../Pages/Collection";
import {useEffect, useState} from "react";
import Loading from "./Utils/Loading";

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

