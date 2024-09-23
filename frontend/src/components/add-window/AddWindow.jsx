import "./add-window.css"
import PropTypes from "prop-types";
import CloseButton from "../misc/CloseButton.jsx";
import FilePreview from "./FilePreview.jsx";
import {useState} from "react";
import server_url from "../../links.js";

export default function AddWindow({isHidden, setHidden}) {

    const [data, setData] = useState(null);

    function handleUpload(file) {
        const formData = new FormData();
        formData.append('torrent', file);

        fetch(server_url.concat("/file_preview"), {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }

    function handleStart() {
        setData(null);
        setHidden();
    }

    return (
        <div className={"add-window".concat(isHidden? " hidden" : "")}>
            <CloseButton action={setHidden}/>
            <h2>Добавить файл</h2>
            <FilePreview fileContent={data} />
            <div className={"controls-container"}>
                <input type={"file"} onChange={(e) => handleUpload(e.target.files[0])}/>
                <button className={"start-button"} onClick={handleStart} disabled={!data}>Запустить</button>
            </div>
        </div>
    );
}

AddWindow.propTypes = {
    isHidden: PropTypes.any,
    setHidden: PropTypes.func
}