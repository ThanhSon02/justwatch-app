import classNames from 'classnames/bind';
import styles from './SignInModal.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faUser,
    faAngleRight,
    faUserPlus,
    faCircleChevronRight,
    faEarthAmericas,
    faLanguage,
    faPlay,
} from '@fortawesome/free-solid-svg-icons';
import Button2 from '~/components/Button2';

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
                        rightIcon={<Button2 />}
                        detailIcon={<FontAwesomeIcon icon={faCircleChevronRight} />}
                        detail
                    >
                        Create an account
                    </Button>
                    <div className={cx('splitted')}>
                        <Button
                            leftIcon={<FontAwesomeIcon icon={faEarthAmericas} />}
                            rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                            small={true}
                            nonActive={true}
                        >
                            Country
                        </Button>
                        <Button
                            leftIcon={<FontAwesomeIcon icon={faLanguage} />}
                            rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                            small={true}
                            nonActive={true}
                        >
                            Country
                        </Button>
                    </div>
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faPlay} />}
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                        nonActive={true}
                        detail
                    >
                        My streaming service
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignInModal;
