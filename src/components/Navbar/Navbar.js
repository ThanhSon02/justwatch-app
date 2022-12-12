import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import config from '~/config';
import ButtonLink from './ButtonLink';
import Search from './Search';
import NavExtra from './NavExtra';

const cx = classNames.bind(styles);

function Navbar({ onClickMenu, showModal }) {
    return (
        <nav className={cx('wrapper')}>
            <ButtonLink to={config.routes.home} title="Home" />
            <ButtonLink to={config.routes.new} title="New" />
            <ButtonLink to={config.routes.popular} title="Popular" />
            <ButtonLink to={config.routes.watchlist} title="Watchlist" />
            <Search />
            <NavExtra className={cx('nav-extra')} onClickMenu={onClickMenu} showModal={showModal} />
        </nav>
    );
}

export default Navbar;
