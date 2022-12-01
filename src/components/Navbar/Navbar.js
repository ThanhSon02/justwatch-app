import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Button from './ButtonLink/ButtonLink';
import config from '~/config';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx('wrapper')}>
            <Button to={config.routes.home} title="Home" />
            <Button to={config.routes.new} title="New" />
            <Button to={config.routes.popular} title="Popular" />
            <Button to={config.routes.watchlist} title="Watchlist" />
        </nav>
    );
}

export default Navbar;
