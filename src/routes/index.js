import Home from '~/pages/Home';
import New from '~/pages/New';
import Popular from '~/pages/Popular';
import WatchList from '~/pages/WatchList';
import YourTV from '~/pages/YourTV';
import Apps from '~/pages/Apps';
import AboutUs from '~/pages/AboutUs';
import Talent from '~/pages/Talent';
import Press from '~/pages/Press';
import FAQ from '~/pages/FAQ';
import API from '~/pages/API';
import Imprint from '~/pages/Imprint';
import PrivacyPolicy from '~/pages/PrivacyPolicy';
import TermOfUse from '~/pages/TermOfUse';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/new',
        component: New,
    },
    {
        path: '/popular',
        component: Popular,
    },
    {
        path: '/watch-list',
        component: WatchList,
    },
    {
        path: '/your-tv',
        component: YourTV,
    },
    {
        path: '/apps',
        component: Apps,
    },
    {
        path: '/about-us',
        component: AboutUs,
    },
    {
        path: '/talent',
        component: Talent,
    },
    {
        path: '/press',
        component: Press,
    },
    {
        path: '/faq',
        component: FAQ,
    },
    {
        path: '/api',
        component: API,
    },
    {
        path: '/imprint',
        component: Imprint,
    },
    {
        path: '/privacy-policy',
        component: PrivacyPolicy,
    },
    {
        path: '/term-of-use',
        component: TermOfUse,
    },
];

export default publicRoutes;
