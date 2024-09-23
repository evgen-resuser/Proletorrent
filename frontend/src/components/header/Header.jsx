import "./header.css"
import NameLogo from "./NameLogo.jsx";
import PropTypes from "prop-types";
import settingsIcon from "/public/imgs/customize.svg"


export default function Header({settingsSetter}) {
    return (
        <header>
            <NameLogo/>
            <button className={"header-settings-button"} onClick={settingsSetter}>
                <img src={settingsIcon} alt={"settings"}/>
            </button>
        </header>
    )
}

Header.propTypes = {
    settingsSetter: PropTypes.func,
}