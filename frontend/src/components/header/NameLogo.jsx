import logo from "/public/imgs/logo_small.svg"
import "./name-logo.css"

export default function NameLogo() {
    return (
        <div className={"logo-name-quote"}>
            <img src={logo} alt={"logo"} className={"header-logo"}/>
            <div className={"name-quote"}>
                <div className={"name-container"}>
                    <span className={"prole-span"}>PROLE</span>
                    <span className={"torrent-span"}>TORRENT</span>
                </div>
                <span className={"quote"}>Пролетарии всех стран, раздавайте!</span>
            </div>
        </div>
    );
}