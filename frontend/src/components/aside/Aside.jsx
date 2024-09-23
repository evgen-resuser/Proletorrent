import AsideTab from "./AsideTab.jsx";
import './aside.css'
import allIcon from '/imgs/tab_icons/all.svg'
import downIcon from '/imgs/tab_icons/down.svg'
import pausedIcon from '/imgs/tab_icons/paused.svg'
import shareIcon from '/imgs/tab_icons/share.svg'
import bigLogo from '/imgs/logo512q.svg'
import addIcon from '/imgs/plus_icon.svg'
import PropTypes from "prop-types";

export default function Aside({selected, setSelected, setAddHidden}) {
    
    return (
        <aside>
            <button className={"add-button"} onClick={setAddHidden}>
                <img src={addIcon} alt={"+"}/>
                <span>добавить</span>
            </button>
            <div>
                <ul>
                    <AsideTab name={"all"}
                              isSelected={selected === 0}
                              icon={allIcon}
                              onClick={() => setSelected(0)}
                    />
                    <AsideTab name={"downloading"}
                              isSelected={selected === 1}
                              icon={downIcon}
                              onClick={() => setSelected(1)}
                    />
                    <AsideTab name={"seeding"}
                              isSelected={selected === 2}
                              icon={shareIcon}
                              onClick={() => setSelected(2)}
                    />
                    <AsideTab name={"stalled"}
                              isSelected={selected === 3}
                              icon={pausedIcon}
                              onClick={() => setSelected(3)}
                    />
                </ul>
            </div>
            <div className={"big-logo"}>
                <img src={bigLogo} alt={""}/>
            </div>
            <button className={"add-button-float"}>
                <img src={addIcon} alt={"+"}/>
            </button>
        </aside>
    );
}

Aside.propTypes = {
    selected: PropTypes.number,
    setSelected: PropTypes.func,
    setAddHidden: PropTypes.func
}