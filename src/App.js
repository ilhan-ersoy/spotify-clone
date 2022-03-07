import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import {
    BrowserRouter as Router, Route, useRouteMatch
} from "react-router-dom";
import {SpeakerIcon} from "./Icons";
import DeviceBar from "./components/DeviceBar";

function App() {
    return (
        <Router>
            <div className={"wrapper bg-gradient"}>
                <Sidebar/>
                <Content/>
            </div>
            <Player/>
            {/*<DeviceBar/>*/}
        </Router>
  );
}

export default App;
