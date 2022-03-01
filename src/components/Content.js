import Navbar from "./Navbar";
import {Route, Switch} from "react-router-dom";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Collection from "../Pages/Collection";

export default function Content() {
    return (
        <main className={"flex-auto"}>
            <Navbar/>
            <Switch>
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
            </Switch>
        </main>
    )
}

