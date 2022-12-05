import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, data }) {
    return (
        <Link to={to} className={cx('menu-item')}>
            <span>{data}</span>
        </Link>
    );
}

export default MenuItem;
