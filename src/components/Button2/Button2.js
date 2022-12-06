import classNames from 'classnames/bind';
import styles from './Button2.module.scss';

const cx = classNames.bind(styles);

function Button2() {
    return (
        <button className={cx('wrapper')}>
            <span className={cx('inner')}>Join JustWatch</span>
        </button>
    );
}

export default Button2;
