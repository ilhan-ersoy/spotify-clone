import Navbar from "./Navbar";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import Home from "../PageSections/Home";
import Search from "../PageSections/Search";
import Collection from "../PageSections/Collection";
import Loading from "./Utils/Loading";
import {useEffect, useState} from "react";
import Login from "./Auth/Login";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoginPage} from "../Redux/themeSlice";


export default function Content({setLogin}) {
    const [isLoading, setIsLoading] = useState(true);
    const isLoginPage = useSelector(state => state.theme.isLoginPage);
    const dispatch = useDispatch();

    const timeout = setTimeout(() => {
        setIsLoading(false);
    }, 500)



    const isLogin = useRouteMatch('/login');

   if(isLogin) {
       dispatch(setIsLoginPage(true))
   }else {
       dispatch(setIsLoginPage(false))
   }


    return (
        <main className={"flex-auto overflow-auto "}>
            {!isLoginPage && <Navbar/>}
            {!isLoading ? (<Switch>
                <nav className={'px-8 py-6'}>
                    <Route exact={'/'} path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/search'}>
                        <Search/>
                    </Route>
                    <Route path={'/collection'}>
                        <Collection/>
                    </Route>
                    <Route path={'/login'}>
                        <Login/>
                    </Route>
                </nav>
            </Switch>) : <Loading/>}

        </main>
    )
}

