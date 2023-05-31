<template>
    <div class='cart-item'>
        <img class="cart-item-img" :src="cart_item_data.image" alt="img">
        <div class="cart-item_info">
            <p class="item-name">{{cart_item_data.title}}</p>
            <p>CN¥ {{cart_item_data.price}}</p>
        </div>
        <div class="cart-item_amt">
            <p>Amount:</p>
            <div class="amount-info">
                <button class="decrement-button" @click="decrementItem">-</button>
                <span class="amount-num">{{cart_item_data.amt}}</span>
                <button class="increment-button" @click="incrementItem">+</button>
            </div>
        </div>
        <button class="delete-button" @click="deleteFromCart"><b>Delete</b></button>
    </div>
</template>

<script>
    export default {
        name: "cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return{}
                }
            }
        },
        
        data() {
            return {}
        },

        computed: {},
        methods: {
            decrementItem() {
                this.$emit('decrement')
            },

            incrementItem() {
                this.$emit('increment')
            },

            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },

        mounted() {
            const cartItemData = this.cart_item_data;
            cartItemData.amt = 1
        }
    }
</script>

<style>
    .decrement-button{
        width:25px;
        margin-right: 10px;
    }

    .increment-button{
        margin-left: 10px;
        width:25px;
    }

    .item-name{
        width: 300px;
        margin-left: 22px;
        width:250px;
        height: 90px;
        margin: auto;
        word-break: break-word;
        font-family: "Roboto",sans-serif;
        font-size: 1rem;
        line-height: 1.3rem;
        font-weight: 600;
        white-space: normal;
    }

    .cart-item_info{
        width: 350px;
        height: 110px;
        margin-left: 10px;
        margin-top: 25px;
    }

    .cart-item_amt{
        margin-top: 45px;
    }
    
    .amount-info{
        width: 100px;
    }

    .amount-num{
        width: 100%;
        height: 20px;
    }

    .cart-item-img{
        margin-bottom: 5px;
        object-fit: contain;
        width: 150px;
        height: 150px;
    }

    .cart-item{
        display: flex;
        flex-wrap: wrap;
        padding: 15px;
        background: white;
        width: 800px;
        border-radius: 20px;
        box-shadow: 0px 0px 5px 5px rgba(100, 100, 0, 0.5);
        margin-bottom: 50px;
        margin-left: 350px; 
    }

    .delete-button{
        height: 50px;
        width: 150px;
        margin-left: 30px;
        margin-top: 50px;
        border:none;
        border-radius: 5px
    }
</style>