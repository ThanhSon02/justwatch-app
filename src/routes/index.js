import Home from '~/pages/Home';
import New from '~/pages/New';
import Popular from '~/pages/Popular';
import WatchList from '~/pages/WatchList';

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
];

export default publicRoutes;
