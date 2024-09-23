import "./main.css"
import PropTypes from "prop-types";
import Tab from "../tab/Tab.jsx";
import {useEffect, useState} from "react";
import server_url from "../../links.js";


const REFRESH_DELAY = 200000;

export default function Main({selected}) {

    const [data, setData] = useState(null);

    async function getDownloads() {
        fetch(`${server_url}/downloads`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(e => setData([{error: true}]));
    }

    useEffect(() => {
        setData(null);
        getDownloads().then();
        let intId = setInterval(getDownloads, REFRESH_DELAY);

        return () => {
            clearInterval(intId);
        }
    }, []);

    function renderSelected() {
        if (data == null) return <div className={"loading"}>загрузка...</div>;
        if (data[0].error) return <div className={"error"}>Ошибка подключения к серверу,<br/>попробуйте позже.</div>;
        switch (selected) {
            case 0:
                return <Tab filter={"all"} data={data}/>;
            case 1:
                return <Tab filter={"download"} data={data}/>;
            case 2:
                return <Tab filter={"seeding"} data={data}/>;
            case 3:
                return <Tab filter={"stalled"} data={data}/>;
            default:
                throw new Error("unknown tab type!")
        }
    }

    return (
        <main>
            <div className={"main-container"}>
            {renderSelected()}
            </div>
        </main>
    );
}

Main.propTypes = {
    selected: PropTypes.number
}