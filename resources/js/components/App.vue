<template>
    <div id="app">
        <loading ref="loading" />

        <router-link :to="{ name: 'register' }">
            Welcome
        </router-link>

        <transition name="page" mode="out-in">
            <component :is="layout" v-if="layout" />
        </transition>
    </div>
</template>

<script>
    import Loading from './Loading'

    const requireContext = require.context('../layouts', false, /.*\.vue$/)

    const layouts = requireContext.keys()
        .map(file =>
            [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
        )
        .reduce((components, [name, component]) => {
            components[name] = component.default || component
            return components
        }, {});

    export default {
        el: '#app',

        components: {
            Loading
        },

        data: () => ({
            layout: null,
            defaultLayout: 'default'
        }),

        methods: {
            /**
             * Set the application layout. Just
             * loads default for now
             *
             * @param {String} layout
             */
            setLayout (layout) {
                if (!layout || !layouts[layout]) {
                    layout = this.defaultLayout
                }

                this.layout = layouts[layout]
            }
        },

        beforeMount() {
            this.setLayout();
        }
    }
</script>
