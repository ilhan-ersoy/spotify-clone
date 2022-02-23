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
                <Route exact='/' path={'/'}>
                    <Home/>
                </Route>
                <Route path={'/search'}>
                    <Search/>
                </Route>
                <Route path={'/collection'}>
                    <Collection/>
                </Route>
            </Switch>
        </main>
    )
}

