import classNames from 'classnames/bind';
import styles from './Saerch.module.scss';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchResultNoInput from '~/components/Navbar/Search/components/SearchResult';
import SearchResultHasInput from './components/SearchResult/SearchResultHasInput/SearchResultHasInput';
import ClearButton from './components/ClearButton';

const cx = classNames.bind(styles);

function Search({ placeholder = 'Search for movies or TV shows' }) {
    const [searchValue, setSearchValue] = useState('');
    const [showSearchSuggest, setShowSearchSuggest] = useState(false);
    const [showClearIcon, setShowClearIcon] = useState(false);

    const inputRef = useRef();

    const handleFocusInput = () => {
        setShowSearchSuggest(true);
    };

    const handleClear = () => {
        if (searchValue) {
            setShowClearIcon(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder={placeholder}
                    className={cx('search-input')}
                    onFocus={handleFocusInput}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        searchValue ? setShowClearIcon(true) : setShowClearIcon(false);
                    }}
                />
                {searchValue ? <ClearButton className={cx('clear')} /> : <></>}
            </div>

            {showSearchSuggest ? (
                <div className={cx('search-suggest')} onClick={() => setShowClearIcon(false)}>
                    <div className={cx('search-suggest__container')}>
                        {searchValue ? <SearchResultHasInput /> : <SearchResultNoInput onClick={handleClear} />}
                    </div>
                    <div className={cx('search-overlay')} onClick={() => setShowSearchSuggest(false)}></div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Search;
