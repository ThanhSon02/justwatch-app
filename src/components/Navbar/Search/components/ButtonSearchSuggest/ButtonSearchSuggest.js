import classNames from 'classnames/bind';
import styles from './ButtonSearchSuggest.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ButtonSearchSuggest({ title }) {
    return (
        <button className={cx('wrapper')}>
            <div className={cx('inner')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
                <span className={cx('title')}>{title}</span>
            </div>
        </button>
    );
}

export default ButtonSearchSuggest;
