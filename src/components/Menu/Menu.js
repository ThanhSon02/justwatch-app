import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import config from '~/config';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('overlay')}>
            <div className={cx('menu-box')}>
                <div className={cx('menu-list')}>
                    <MenuItem to={config.routes.yourtv} data={'Connect your TV'} />
                    <MenuItem to={config.routes.apps} data={'Apps'} />
                    <MenuItem to={config.routes.aboutus} data={'About us'} />
                    <MenuItem to={config.routes.talent} data={'Talent'} />
                    <MenuItem to={config.routes.press} data={'Press'} />
                    <MenuItem to={config.routes.faq} data={'FAQ'} />
                    <MenuItem to={config.routes.api} data={'API'} />
                    <MenuItem to={config.routes.imprint} data={'Imprint'} />
                    <MenuItem to={config.routes.policy} data={'Privacy Policy'} />
                    <MenuItem to={config.routes.termofuse} data={'Term Of Use'} />
                </div>
            </div>
        </div>
    );
}

export default Menu;
