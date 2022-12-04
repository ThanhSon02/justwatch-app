import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ClearButton({ className, onClick }) {
    return (
        <div className={className} onClick={onClick}>
            <FontAwesomeIcon icon={faXmark} />
        </div>
    );
}

ClearButton.prototype = {
    className: PropTypes.string,
};

export default ClearButton;
