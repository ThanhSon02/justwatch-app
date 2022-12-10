import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/themes/translucent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import HeroProvider from '~/components/HeroProvider';
import Category from '~/components/Category';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('hero-text')}>
                <h1 className={cx('title')}>
                    Movies and TV shows for you
                    <Tippy
                        duration={0}
                        offset={[0, -2]}
                        theme="translucent"
                        animation="scale-exteme"
                        placement="bottom"
                        content="Give me new recomendations"
                    >
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faArrowRotateRight} />
                        </div>
                    </Tippy>
                </h1>
            </div>
            <div className={cx('hero-provider')}>
                <HeroProvider small={true} />
            </div>
            <div className={cx('category-section')}>
                <Category />
            </div>
        </div>
    );
}

export default Home;
