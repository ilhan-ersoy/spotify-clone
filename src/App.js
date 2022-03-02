import BottomBar from "./components/BottomBar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import {
    BrowserRouter as Router, Route, useRouteMatch
} from "react-router-dom";

import Login from "./components/Auth/Login";

function App() {



    return (
        <Router>
            <div className={"wrapper bg-backdrop"}>
                <Sidebar/>
                <Content/>
            </div>
            <BottomBar/>
        </Router>
  );
}

export default App;
