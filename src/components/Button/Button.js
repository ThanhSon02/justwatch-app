import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    leftIcon,
    rightIcon,
    details = [],
    fontSmall = false,
    small = false,
    large = false,
    nonActive = false,
    children,
}) {
    const classes = cx('wrapper', {
        small,
        large,
        nonActive,
        fontSmall,
    });
    return (
        <button className={classes}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            <span className={cx('title')}>
                {children}
                {details ? (
                    <span className={cx('detail')}>
                        <ul className={cx('detail-list')}>
                            {details.map((detail, index) => (
                                <li key={index} className={cx('detail-item')}>
                                    {detail.icon ? <span className={cx('detail-icon')}>{detail.icon}</span> : <></>}
                                    {detail.text}
                                </li>
                            ))}
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
