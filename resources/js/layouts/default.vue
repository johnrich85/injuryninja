<template>
    <div class="main-layout">
        <div class="container mt-4">
            <transition name="page" mode="out-in">
                <slot>
                    <router-view />
                </slot>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainLayout',
        components: {}
    }
</script>
