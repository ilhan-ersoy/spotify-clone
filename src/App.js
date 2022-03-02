import BottomBar from "./components/BottomBar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import {
    BrowserRouter as Router
} from "react-router-dom";
import {useState} from "react";


function App() {

    return (

    <Router>

        <div className={"wrapper"}>
            <Sidebar/>
            <Content/>
        </div>
        <BottomBar/>
    </Router>
  );
}

export default App;
