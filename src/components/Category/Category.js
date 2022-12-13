import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import images from '~/assets/img';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/svg-arrow.css';
import { SeenIcon } from '~/components/Icons';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faThumbsUp, faThumbsDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Category() {
    const categoryInfos = [
        {
            title: 'Mystery & Thriller',
            filmList: [
                {
                    filmImage: images.movieImages,
                    provideImage: images.providers.netflix,
                    imdb: 6.3,
                    isTvShow: true,
                    isSeen: true,
                },
            ],
        },
    ];

    const handlePrev = () => {
        let scrollPos = categoryList.current.scrollLeft;
        categoryList.current.scroll({
            left: scrollPos - 1295,
            behavior: 'smooth',
        });
    };

    const [scrollPos, setScrollPos] = useState(0);
    const categoryList = useRef();

    const handleNext = () => {
        let scrollPos = categoryList.current.scrollLeft;
        categoryList.current.scroll({
            left: scrollPos + 1295,
            behavior: 'smooth',
        });
    };

    let btnPrev;
    if (scrollPos !== 0) {
        btnPrev = (
            <div className={cx('btn-prev')}>
                <FontAwesomeIcon icon={faAngleLeft} onClick={handlePrev} />
            </div>
        );
    } else {
        btnPrev = <></>;
    }

    return (
        <>
            {categoryInfos.map((categoryInfo, index) => (
                <div key={index} className={cx('wrapper')}>
                    <div className={cx('title')}>{categoryInfo.title}</div>
                    <div style={{ positon: 'reletive' }}>
                        <ul
                            ref={categoryList}
                            className={cx('category-list')}
                            onScroll={(e) => {
                                setScrollPos(e.target.scrollLeft);
                                console.log(categoryList.current.scrollLeft);
                            }}
                        >
                            {categoryInfo.filmList.map((filmItem, index) => (
                                <li key={index} className={cx('category-item')}>
                                    <div className={cx('quick-action')}>
                                        <div className={cx('action-top')}>
                                            <HeadlessTippy
                                                delay={[100, 300]}
                                                placement="bottom-start"
                                                render={(attrs) => (
                                                    <div
                                                        className={cx('tippy-box', 'arrow-left')}
                                                        tabIndex="-1"
                                                        {...attrs}
                                                    >
                                                        Track show
                                                    </div>
                                                )}
                                            >
                                                <div className={cx('action-top__icon')}>
                                                    <FontAwesomeIcon icon={faBookmark} />
                                                </div>
                                            </HeadlessTippy>
                                            <HeadlessTippy
                                                placement="bottom"
                                                render={(attrs) => (
                                                    <div className={cx('tippy-box')} tabIndex="-1" {...attrs}>
                                                        Seen
                                                    </div>
                                                )}
                                            >
                                                {filmItem.isSeen ? (
                                                    <div className={cx('action-top__icon')}>
                                                        <SeenIcon />
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}
                                            </HeadlessTippy>
                                            <HeadlessTippy
                                                placement="bottom"
                                                render={(attrs) => (
                                                    <div className={cx('tippy-box')} tabIndex="-1" {...attrs}>
                                                        Like
                                                    </div>
                                                )}
                                            >
                                                <div className={cx('action-top__icon')}>
                                                    <FontAwesomeIcon icon={faThumbsUp} />
                                                </div>
                                            </HeadlessTippy>
                                            <HeadlessTippy
                                                placement="bottom-end"
                                                render={(attrs) => (
                                                    <div
                                                        className={cx('tippy-box', 'arrow-right')}
                                                        tabIndex="-1"
                                                        {...attrs}
                                                    >
                                                        Dislike
                                                    </div>
                                                )}
                                            >
                                                <div className={cx('action-top__icon')}>
                                                    <FontAwesomeIcon icon={faThumbsDown} />
                                                </div>
                                            </HeadlessTippy>
                                        </div>
                                        <div className={cx('action-bottom')}>
                                            <div className={cx('imdb-more')}>
                                                <div className={cx('imdb')}>
                                                    <img className={cx('imdb-icon')} src={images.imdbLogo} alt="" />
                                                    {filmItem.imdb}
                                                </div>
                                                <div className={cx('more-like-this')}>More like this..</div>
                                            </div>
                                            <button className={cx('watch-now')}>
                                                <img src={filmItem.provideImage} alt="" />
                                                Watch now
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('movie-img')}>
                                        <img src={filmItem.filmImage} alt="" />
                                    </div>
                                    <span className={cx('badge')}>TV</span>
                                </li>
                            ))}
                        </ul>
                        {categoryInfo.filmList.length > 7 ? (
                            <>
                                {btnPrev}
                                <div className={cx('btn-next')} onClick={handleNext}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Category;
