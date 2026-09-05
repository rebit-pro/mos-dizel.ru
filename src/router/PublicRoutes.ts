import { pageContent } from '@/data/pages';

/** Маршруты внутренних страниц — из контент-реестра (пути канонически со слэшем, роутер матчит оба варианта). */
const innerRoutes = Object.keys(pageContent).map((path) => ({
  name: path,
  path: path.replace(/\/$/, ''),
  component: () => import('@/views/mos-dizel/InnerPage.vue')
}));

const PublicRoutes = {
  path: '/',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/views/mos-dizel/HomePage.vue')
    },
    ...innerRoutes,
    {
      name: 'Contacts',
      path: '/contacts',
      component: () => import('@/views/mos-dizel/ContactsPage.vue')
    },
    {
      name: 'Policy',
      path: '/politika-konfidencialnosti',
      component: () => import('@/views/mos-dizel/PolicyPage.vue')
    }
  ]
};

export default PublicRoutes;
