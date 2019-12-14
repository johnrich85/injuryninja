/**
 * Lazy loading for pages.
 *
 * @param path
 * @returns {function(): Promise<T | never>}
 */
function page (path) {
    return () => import(/* webpackChunkName: '' */ `../pages/${path}`).then(m => m.default || m)
}

export default [
    { path: '/', name: 'welcome', component: page('Welcome.vue') },
    { path: '/register', name: 'register', component: page('Register.vue') },

    { path: '*', component: page('errors/404.vue') }
]
