

import MapPage from './pages/map.jsx';
import NotFoundPage from './pages/404.jsx';

var routes = [
  {
    path: '/',
    component: MapPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
