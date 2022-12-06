import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    leftIcon,
    rightIcon,
    detailIcon,
    detail,
    small = false,
    large = false,
    nonActive = false,
    children,
}) {
    const classes = cx('wrapper', {
        small,
        large,
        nonActive,
    });
    return (
        <button className={classes}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            <span className={cx('title')}>
                {children}
                {detail ? (
                    <span className={cx('detail')}>
                        <ul className={cx('detail-list')}>
                            <li className={cx('detail-item')}>
                                <span className={cx('detail-icon')}>{detailIcon}</span>
                                Sync with our TV app
                            </li>
                            <li className={cx('detail-item')}>
                                <span className={cx('detail-icon')}>{detailIcon}</span>
                                Your watchlist on all devices
                            </li>
                        </ul>
                    </span>
                ) : (
                    <></>
                )}
            </span>
            {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
        </button>
    );
}

export default Button;
