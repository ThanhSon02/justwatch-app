import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import config from '~/config';
import images from '~/assets/img';
import Navbar from '~/components/Navbar';
import Menu from '~/components/Menu';
import { useState } from 'react';
import SignInModal from '../Modal/SignInModal';

const cx = classNames.bind(styles);

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleShowMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };

    const handleShowModal = () => {
        if (showModal) {
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </Link>
                <Navbar onClickMenu={handleShowMenu} showModal={handleShowModal} />
                {showMenu ? <Menu className={cx('menu')} handleMenu={handleShowMenu} /> : <></>}
                {showModal ? <SignInModal className={cx('signin-modal')} showModal={handleShowModal} /> : <></>}
            </div>
        </header>
    );
}

export default Header;
