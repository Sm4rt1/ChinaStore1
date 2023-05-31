<template>
    <div class='v-catalog-item'>
        <v-popup v-if="isInfoVisible" @closeInfo="closeInfoPopup">
            <img class="v-catalog-item-img" :src="product_data.image" alt="img">
            <div class="catalog-popup-item-info">
                <p class="v-catalog-item-title">{{product_data.title}}</p>
                <p class="v-catalog-item-price">Price: <b>CN¥ {{product_data.price}}</b></p>
                <p class="v-catalog-description"><b>Description:</b> {{product_data.description}}</p>
            </div>
        </v-popup>
        <img class="v-catalog-item-img" :src="product_data.image" alt="img">
        <p class="v-catalog-item-title">{{product_data.title}}</p>
        <p class="v-catalog-item-price">Price: <b>CN¥ {{product_data.price}}</b></p>
        <p class="v-catalog-item-rate">Rating:<b>{{product_data.rating.rate}}</b> Reviews:<b>{{product_data.rating.count}}</b></p>
        <div class="buttons">
            <button class="catalog-show-info" @click="showInfo">Information</button>
            <button class="v-catalog-item-add-button" @click="addCart">Add to cart</button>
        </div>
    </div>
</template>

<script >
    import vPopup from './item__info.vue'

    export default {
        name: "v-catalog-item",
        components: {
            vPopup
        },

        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },

        data() {
            return {
                isInfoVisible: false
            }
        },

        computed: {},
        methods: {
            showInfo() {
                this.isInfoVisible = true;
            },

            closeInfoPopup() {
                this.isInfoVisible = false;
            },

            addCart() {
                this.$emit('addCart', this.product_data)
            } 
        }
    }
</script>

<style>
    .v-catalog-item {
        background: white;
        padding: 15px;
        width: 300px;
        border-radius: 10px;
        box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
        margin-bottom: 50px;   
    }

    .v-catalog-item-img{
        margin-bottom: 5px;
        object-fit: contain;
        width: 150px;
        height: 150px;
    }
    
    .v-catalog-item-title{
        width:250px;
        height: 72px;
        margin: auto;
        word-break: break-word;
        font-family: "Roboto",sans-serif;
        font-size: 1rem;
        line-height: 1.3rem;
        font-weight: 600;
        white-space: normal;
    }

    .catalog-show-info{
        height:30px;
        width: 120px;
        border: 1px solid #e7e7e7;
        border-radius: 5px 0 0 5px;
    }

    .v-catalog-item-add-button{
        margin-top: 10px;
        height:30px;
        width: 120px;
        border: 1px solid #e7e7e7;
        border-radius: 0 5px 5px 0;
    }

    .v-catalog-description{
        margin-top: 30px;
        font-family: "Roboto","Arial",sans-serif;
        font-size: 1.0rem;
        line-height: 1.3rem;
        font-weight: 400;
    }

</style>