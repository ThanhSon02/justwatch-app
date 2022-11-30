import PropTypes from 'prop-types';
import './GlobalStyle.module.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.prototype = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
