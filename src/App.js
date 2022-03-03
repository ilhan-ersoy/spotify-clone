import BottomBar from "./components/BottomBar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import {
    BrowserRouter as Router, Route, useRouteMatch
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className={"wrapper bg-gradient"}>
                <Sidebar/>
                <Content/>
            </div>
            <BottomBar/>
        </Router>
  );
}

export default App;
