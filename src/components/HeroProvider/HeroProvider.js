import classNames from 'classnames/bind';
import styles from './HeroProvider.module.scss';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function HeroProvider({ small = false }) {
    const [scrollPos, setScrollPos] = useState(0);
    const providerList = useRef();

    const providers = [
        {
            alt: 'amazoneprime',
            image: images.providers.amazoneprime,
        },
        {
            alt: 'appletv',
            image: images.providers.appletv,
        },
        {
            alt: 'hayu',
            image: images.providers.hayu,
        },
        {
            alt: 'hoichoi',
            image: images.providers.hoichoi,
        },
        {
            alt: 'hostar',
            image: images.providers.hostar,
        },
        {
            alt: 'netflix',
            image: images.providers.netflix,
        },
        {
            alt: 'sony',
            image: images.providers.sony,
        },
        {
            alt: 'voot',
            image: images.providers.voot,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'voot',
            image: images.providers.voot,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'voot',
            image: images.providers.voot,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'voot',
            image: images.providers.voot,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'voot',
            image: images.providers.voot,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },

        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },

        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },

        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },

        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },

        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },

        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },

        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },

        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },

        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },

        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },

        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },

        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },

        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'yupptv',
            image: images.providers.yupptv,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
        {
            alt: 'youtobe',
            image: images.providers.youtobe,
        },
    ];

    const handlePrev = () => {
        let scrollPos = providerList.current.scrollLeft;
        providerList.current.scroll({
            left: scrollPos - 740,
            behavior: 'smooth',
        });
    };

    const handleNext = () => {
        let scrollPos = providerList.current.scrollLeft;
        providerList.current.scroll({
            left: scrollPos + 740,
            behavior: 'smooth',
        });
    };

    let btnNext;
    if (scrollPos !== 0) {
        btnNext = (
            <div className={cx('btn-prev')}>
                <FontAwesomeIcon icon={faAngleLeft} onClick={handlePrev} />
            </div>
        );
    } else {
        btnNext = <></>;
    }

    return (
        <div className={cx('wrapper')}>
            <ul
                ref={providerList}
                className={cx('provider-list')}
                onScroll={(e) => {
                    setScrollPos(e.target.scrollLeft);
                }}
            >
                {providers.map((provider, index) => (
                    <li key={index} className={cx('provider-item', { small })}>
                        <img src={provider.image} alt={provider.alt} />
                    </li>
                ))}
                <li className={cx('provider-item', { small })}>
                    <img className={cx('plus-icon')} src={images.plusIcon} alt="plus icon" />
                </li>
            </ul>
            {providers.length > 33 ? (
                <>
                    {btnNext}
                    <div className={cx('btn-next')} onClick={handleNext}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default HeroProvider;
