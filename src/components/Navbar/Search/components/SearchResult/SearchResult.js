import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SaerchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult({ title, highlight = false, mb15 = false, children }) {
    return (
        <div>
            <span className={cx('search-result-title', { highlight, mb15 })}>{title}</span>
            <div className={cx('result')}>{children}</div>
        </div>
    );
}

SearchResult.prototype = {
    title: PropTypes.string.isRequired,
    childen: PropTypes.node,
};

export default SearchResult;
