import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ButtonLink.module.scss';

const cx = classNames.bind(styles);

function Button({ to, title }) {
    return (
        <Link to={to} className={cx('button-link')}>
            <span>{title}</span>
        </Link>
    );
}

export default Button;
