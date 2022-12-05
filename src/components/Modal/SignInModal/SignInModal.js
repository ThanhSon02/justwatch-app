import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './SignInModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUser, faAngleRight, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SignInModal() {
    return (
        <div className={cx('overlay')}>
            <div className={cx('modal')}>
                <div className={cx('title')}>
                    JustWatch Account
                    <span className={cx('icon-wrapper')}>
                        <FontAwesomeIcon icon={faXmark} className={cx('icon')} />
                    </span>
                </div>
                <div className={cx('buttons')}>
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faUser} />}
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                    >
                        Sign in
                    </Button>
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faUserPlus} />}
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                    >
                        Create an account
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignInModal;
