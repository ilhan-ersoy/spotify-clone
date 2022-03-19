import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import {
    BrowserRouter as Router, Route, useRouteMatch
} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";


function App() {

    const background = useSelector(state => state.theme.background)



    return (
        <Router>
            <div className={`wrapper transition duration-700 ease-in-out ${background}`}>
                <Sidebar/>
                <Content/>
            </div>
            <Player/>
            {/*<DeviceBar/>*/}
        </Router>
  );
}

export default App;
