import PropTypes from "prop-types";
import './close-button.css'

export default function CloseButton({action}) {
    return (
        <button className={"close-button"} onClick={action}>&times;</button>
    );
}

CloseButton.propTypes = {
    action: PropTypes.func
}