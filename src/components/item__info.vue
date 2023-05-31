<template>
    <div class="popup-wrapper" ref="popup-wrapper">
        <div class="v-popup">
            <div class="info-body">
                <slot></slot>
            </div>
            <div class="info-footer">
                <span>
                    <i class="material-icons" @click="closeInfo">
                    close
                    </i>
                </span>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "v-popup",
        props: {},
        data() {
            return{}
        },

        methods: {
            closeInfo() {
                this.$emit('closeInfo')
            }
        }
    }
</script>


<style>
    .material-icons{
        cursor: pointer;
    }

    .popup-wrapper {
        z-index: 50;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .v-popup {
        z-index: 100;
        position: absolute;
        top: 20%;
        left: 750px;
        display: flex;
        justify-content: space-between;
        padding: 16px;
        position: fixed;
        width: 400px;
        background: #ffffff;
        box-shadow: 0 0 10px 5px #000000;
    }
</style>