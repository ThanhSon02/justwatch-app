import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ButtonLink.module.scss';

const cx = classNames.bind(styles);

function ButtonLink({ to, title }) {
    return (
        <NavLink to={to} className={(nav) => cx('button-link', { active: nav.isActive })}>
            <span>{title}</span>
        </NavLink>
    );
}

export default ButtonLink;
