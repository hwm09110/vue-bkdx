<template>
    <div id="app">
        <router-view></router-view>
        <nav-tab></nav-tab>
    </div>
</template>

<script>
    import '@/assets/lib/flexible.js'
    import '@/assets/style/reset.css'
    import Navtab from '@/components/Navtab'

    export default {
        name: 'App',
        components:{
            'nav-tab': Navtab
        }
    }
</script>

<style>
    #app {
        margin-bottom: 1.527778rem;
    }
</style>
