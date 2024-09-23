import "./file-preview.css"
import FileComponent from "./FileComponent.jsx";
import PropTypes from "prop-types";

export default function FilePreview({fileContent}) {
    return (
        <div className={"file-preview-box"}>
            <FileComponent data={fileContent} parentId={0}/>
        </div>
    );
}

FilePreview.propTypes = {
    fileContent: PropTypes.object
}