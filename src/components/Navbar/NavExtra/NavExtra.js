import classNames from 'classnames/bind';
import styles from './NavExtra.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserGear } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NavExtra({ className, isLogin = true, onClickMenu, showModal }) {
    return (
        <div className={className}>
            {isLogin ? (
                <div className={cx('user')}>
                    <button className={cx('user-btn')} onClick={showModal}>
                        <FontAwesomeIcon icon={faUserGear} className={cx('user-icon')} />
                    </button>
                </div>
            ) : (
                <div className={cx('sign-in')}>
                    <div>
                        <button className={cx('sign-in__btn')} onClick={showModal}>
                            <span>Sign In</span>
                        </button>
                    </div>
                </div>
            )}
            <div className={cx('memu')}>
                <button className={cx('menu-btn')} onClick={onClickMenu}>
                    <FontAwesomeIcon icon={faBars} className={cx('menu-icon')} />
                </button>
            </div>
        </div>
    );
}

export default NavExtra;
