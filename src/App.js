import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import {
    BrowserRouter as Router, Route, Switch, useRouteMatch
} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";
import DeviceBar from "./components/DeviceBar";


function App() {

    const background = useSelector(state => state.theme.background)
    const device = useSelector(state => state.devices.device);
    const [isLoading, setIsLoading] = useState(true);
    const isLoginPage = useSelector(state => state.theme.isLoginPage);

    const timeout = setTimeout(() => {
        setIsLoading(false);
    }, 500)

    const [isLogin, setIsLogin] = useState(null);

    const [showLogin, setShowLogin] = useState(true);
    
    return (
        <>
            <Router>
                    <div className={`wrapper  ${!isLoginPage ? ('bg-[#121212]') : ('bg-white')}`}>
                        {!isLoginPage && <Sidebar/>}
                        <Content/>
                    </div>
                    <Player/>
                    
                    {device && <DeviceBar/>}
            </Router>
        </>
  );
}

export default App;
