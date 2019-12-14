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
    });

    router.beforeEach(beforeEach)
    router.afterEach(afterEach)

    return router
}


async function beforeEach (to, from, next) {
    let components = []

    try {
        // Get the matched components and resolve them.
        components = await resolveComponents(
            router.getMatchedComponents({ ...to })
        )

    } catch (error) {
        if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
            window.location.reload(true)
            return
        }
    }

    if (components.length === 0) {
        return next()
    }

    // Start the loading bar.
    if (components[components.length - 1].loading !== false) {
        router.app.$nextTick(() => router.app.$refs.loading.start())
    }

    next();
}

/**
 * Global after hook.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function afterEach (to, from, next) {
    await router.app.$nextTick()

    router.app.$refs.loading.finish()
}

/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */
function resolveComponents (components) {
    return Promise.all(components.map(component => {
        return typeof component === 'function' ? component() : component
    }))
}
