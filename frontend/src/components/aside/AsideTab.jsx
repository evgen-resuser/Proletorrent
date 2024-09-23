import "./aside-tab.css"
import PropTypes from "prop-types";

export default function AsideTab({name, isSelected, icon, onClick}) {
    return (
        <li onClick={onClick} tabIndex="0">
            <div className={"tab-container".concat(isSelected ? " selected" : "")}>
                <div className={"white-tab"}></div>
                <span className={"tab-content"}>
                    <img src={icon} alt={""}/>
                    <span>{name}</span>
                </span>

            </div>
        </li>
    );
}

AsideTab.propTypes = {
    name: PropTypes.string,
    isSelected: PropTypes.bool,
    icon: PropTypes.any,
    onClick: PropTypes.func,
}