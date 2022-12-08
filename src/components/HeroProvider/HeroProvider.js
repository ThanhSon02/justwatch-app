import classNames from 'classnames/bind';
import styles from './HeroProvider.module.scss';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeroProvider() {
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
    ];
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('provider-list')}>
                {providers.map((provider, index) => (
                    <li key={index} className={cx('provider-item')}>
                        <img src={provider.image} alt={provider.alt} />
                    </li>
                ))}
                <li className={cx('provider-item')}>
                    <img className={cx('plus-icon')} src={images.plusIcon} alt="plus icon" />
                </li>
            </ul>
            <div className={cx('btn-next')}>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
    );
}

export default HeroProvider;
