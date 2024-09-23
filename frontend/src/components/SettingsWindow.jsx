import PropTypes from "prop-types";
import "./settings-window.css"
import CloseButton from "./misc/CloseButton.jsx";

export default function SettingWindow({isHidden, closeWindow}) {
    return (
        <div className={"settings-container".concat(!isHidden ? " hidden" : "")}>
            <CloseButton action={closeWindow}/>
            <h2>Настройки</h2>
        </div>
    );
}

SettingWindow.propTypes = {
    isHidden: PropTypes.any,
    closeWindow: PropTypes.func,
}