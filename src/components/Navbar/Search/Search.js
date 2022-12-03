import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Saerch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search({ placeholder = 'Search for movies or TV shows' }) {
    return (
        <div className={cx('wrapper')}>
            <HeadlessTippy
                visible={true}
                interactive={true}
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        My tippy box
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                    <input placeholder={placeholder} className={cx('search-input')} />
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
