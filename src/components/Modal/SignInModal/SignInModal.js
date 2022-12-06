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

function SignInModal({ showModal }) {
    const CreateAccountDetail = [
        {
            text: 'Sync with our TV app',
            icon: <FontAwesomeIcon icon={faCircleChevronRight} />,
        },
        {
            text: 'Your watchlist on all devices',
            icon: <FontAwesomeIcon icon={faCircleChevronRight} />,
        },
    ];

    const CountryDetail = [
        {
            text: 'India',
        },
    ];

    const LanguageDetail = [
        {
            text: 'English',
        },
    ];

    const StreamServicesDetail = [
        {
            text: 'Netflix',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')} onClick={showModal}></div>
            <div className={cx('modal')}>
                <div className={cx('title')}>
                    JustWatch Account
                    <span className={cx('close-icon')} onClick={showModal}>
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
                        details={CreateAccountDetail}
                    >
                        Create an account
                    </Button>
                    <div className={cx('splitted')}>
                        <Button
                            leftIcon={<FontAwesomeIcon icon={faEarthAmericas} />}
                            rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                            small={true}
                            nonActive={true}
                            details={CountryDetail}
                        >
                            Country
                        </Button>
                        <Button
                            leftIcon={<FontAwesomeIcon icon={faLanguage} />}
                            rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                            small={true}
                            nonActive={true}
                            details={LanguageDetail}
                        >
                            Language
                        </Button>
                    </div>
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faPlay} />}
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                        nonActive={true}
                        fontSmall={true}
                        details={StreamServicesDetail}
                    >
                        My streaming service
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignInModal;
