import classNames from 'classnames/bind';
import styles from './SearchResultNoInput.module.scss';
import ButtonSearchSuggest from '~/components/Navbar/Search/components/ButtonSearchSuggest';

const cx = classNames.bind(styles);

function SearchResultNoInput() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <span className={cx('search-result-title')}>No recent Searches</span>
            </div>
            <div>
                <span className={cx('search-result-title', 'highlight', 'mb15')}>Trending Searches</span>
                <div className={cx('result')}>
                    <ButtonSearchSuggest title={'Wednesday'} />
                </div>
            </div>
        </div>
    );
}

export default SearchResultNoInput;
