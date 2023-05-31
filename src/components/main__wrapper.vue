<template>
    <div class="store_name">
        <img class="store-img" src="@/assets/logo_m.jpg" alt="img">
        <img class="store_text" src="@/assets/China_store.jpg" alt="img">
    </div>
    <div class="main-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'main-wrapper',

        props: {},
        data() {
            return {
                title: 'Main wrapper'
            }
        },

        computed: {},
        methods: {},
        watch: {},
    }
</script>

<style>
    .store_text{
        height: 50px;
        position: absolute;
        left: 59.5px;
        top: 5px;
        border-radius: 0 5px 5px 0;
        box-shadow: 10px 0px 5px 1px rgba(100, 100, 0, 0.5);
    }

    .store-img{
        top: 5px;
        left: 11px;
        margin-bottom: 5px;
        object-fit: contain;
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 5px 0 0 5px;
        box-shadow: -10px 0px 5px 1px rgba(100, 100, 0, 0.5);
    }

    .main-wrapper {
        max-width: 1450px;
        margin: 0 auto;
    }
</style>