import PropTypes from "prop-types";
import {useState} from "react";

import "./file-content.css"

export default function FileComponent({data, parentId}) {

    const [isExpanded, setExpand] = useState(false);

    function formatBytes(bytes, decimals) {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    function generateChildren() {
        return data?.children.map((c, index) => <FileComponent data={c} key={index+parentId+1} parentId={index+parentId+1}/> )
    }

    function generateBlock() {
        if (data == null) return <div className={"no-file"}>Добавьте файл для предосмотра</div>;
        return (
            <div className={"block"}>
                <div className={"name-size"}>
                    <span style={{fontWeight: "bold"}}>{data?.name}</span><br/>
                    <span>{!data?.children.length > 0 ? formatBytes(data?.size, 3) : ""}</span>
                </div>
                {data?.children.length > 0 ?
                    <button className={"expand-button"} onClick={() => setExpand(!isExpanded)}>{isExpanded ? "▲" : '▼'}</button> : null}
                {isExpanded ? <span className={"children"}>{generateChildren()}</span> : null}
            </div>
        );
    }

    return (
        <>
            {generateBlock()}
        </>
    );
}

FileComponent.propTypes = {
    data: PropTypes.object,
    parentId: PropTypes.number
}