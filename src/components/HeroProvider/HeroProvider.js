import classNames from 'classnames/bind';
import styles from './HeroProvider.module.scss';

const cx = classNames.bind(styles);

function HeroProvider() {
    const providers = [
        {
            image: 'ocaisih',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('provider-list')}>
                {/* render provider item */}
                <li className={cx('provider-item')}>
                    <img src="" alt="" />
                </li>
            </ul>
        </div>
    );
}

export default HeroProvider;
