import './App.css'
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Aside from "./components/aside/Aside.jsx";
import {useState} from "react";
import SettingWindow from "./components/SettingsWindow.jsx";
import AddWindow from "./components/add-window/AddWindow.jsx";

function App() {
    const [isSettingsShown, setSettingsShow] = useState(false);
    const [isAddHidden, setAddHidden] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0)

    function handleSettingsShow() {
        setSettingsShow(!isSettingsShown)
    }

    function handleAddShow() {
        setAddHidden(!isAddHidden)
    }

    return (
        <>
            <Header settingsSetter={handleSettingsShow}/>
            <Aside selected={selectedTab} setSelected={setSelectedTab} setAddHidden={handleAddShow}/>
            <Main selected={selectedTab}/>
            <SettingWindow isHidden={isSettingsShown} closeWindow={handleSettingsShow}/>
            <AddWindow isHidden={isAddHidden} setHidden={handleAddShow}/>
        </>
    )
}

export default App
