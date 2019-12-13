import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router);

const router = createRouter();

export default router

/**
 * Create a new router instance.
 *
 * @return {Router}
 */
function createRouter () {
    const router = new Router({
        mode: 'history',
        routes
    })

    return router
}
