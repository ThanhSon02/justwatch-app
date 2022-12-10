import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import images from '~/assets/img';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Mystery & Thriller</div>
            <ul className={cx('category-list')}>
                <li className={cx('category-item')}>
                    <div className={cx('quick-action')}>
                        <div className={cx('action-top')}>
                            <div className={cx('action-top__icon')}>
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                            <div className={cx('action-top__icon')}>
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </div>
                            <div className={cx('action-top__icon')}>
                                <FontAwesomeIcon icon={faThumbsDown} />
                            </div>
                        </div>
                        <div className={cx('action-bottom')}>
                            <div className={cx('imdb-more')}>
                                <div className={cx('imdb')}>
                                    <img className={cx('imdb-icon')} src={images.imdbLogo} alt="" />
                                    6.3
                                </div>
                                <div className={cx('more-like-this')}>More like this..</div>
                            </div>
                            <button className={cx('watch-now')}>
                                <img src={images.watchNowLogo} alt="" />
                                Watch now
                            </button>
                        </div>
                    </div>
                    <div className={cx('movie-img')}>
                        <img src={images.movieImages} alt="" />
                    </div>
                    <span className={cx('badge')}>TV</span>
                </li>
            </ul>
        </div>
    );
}

export default Category;
