import classNames from 'classnames/bind';
import styles from './Saerch.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchResult from '~/components/Navbar/Search/components/SearchResult';
import ButtonSearchSuggest from '~/components/Navbar/Search/components/ButtonSearchSuggest';

const cx = classNames.bind(styles);

function Search({ placeholder = 'Search for movies or TV shows' }) {
    const [searchValue, setSearchValue] = useState('');
    const [recentSearchValue, setRecentSearchValue] = useState('No recent searches');
    const [trendingSearchvalue, setTrendingSearchValue] = useState([]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                <input
                    value={searchValue}
                    placeholder={placeholder}
                    className={cx('search-input')}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className={cx('search-suggest')}>
                    <div className={cx('search-suggest__container')}>
                        <SearchResult title={'No recent Searches'}></SearchResult>
                        <SearchResult title={'Trending Searches'} highlight={true} mb15={true}>
                            <ButtonSearchSuggest title={'Wednesday'} />
                        </SearchResult>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
