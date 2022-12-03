import classNames from 'classnames/bind';
import styles from './SearchResultHasInput.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function SearchResultHasInput() {
    return (
        <div className={cx('suggest-result-list')}>
            <div className={cx('suggest-result-item')}>
                <span className={cx('suggest-result-title')}>MOVIES & TV SHOWS</span>
                <div className={cx('result-list')}>
                    <div className={cx('result-item')}>
                        <div className={cx('result-img')}>
                            <img src={images.movie} alt="" />
                        </div>
                        <div className={cx('details')}>
                            <h4 className={cx('name')}>The Greatest Showman</h4>
                            <p className={cx('info')}>movie, 2017</p>
                        </div>
                    </div>
                    <div className={cx('result-item')}>
                        <div className={cx('result-img')}>
                            <img src={images.movie} alt="" />
                        </div>
                        <div className={cx('details')}>
                            <h4 className={cx('name')}>The Greatest Showman</h4>
                            <p className={cx('info')}>movie, 2017</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('suggest-result-item')}>
                <span className={cx('suggest-result-title')}>PEOPLE</span>
                <div className={cx('suggest-result')}></div>
            </div>
        </div>
    );
}

export default SearchResultHasInput;
