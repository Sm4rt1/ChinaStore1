<template>
    <div class='cart-main'>
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog-linked-cart">Back</div>
        </router-link> 
        <h1>Cart</h1>
        <div class="cart-total">
            <p class="total">Total: <b>CN¥ {{cartTotalCost}}</b></p>
        </div>
        <p v-if="!CART.length">|Products not added yet|</p>
        <v-cart-item 
            v-for="(item, index) in CART"
            :key="item.id"
            :cart_item_data="item"
            @deleteFromCart='deleteFromCart(index)'
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
    </div>
</template>

<script>
    import vCartItem from './cart__item.vue'
    import{mapActions, mapGetters} from 'vuex'

    export default {
        name: "cart-main",
        components: {
            vCartItem
        },

        props: {
            cart_data: {
                type: Array,    
                default() {
                    return []
                }
            }
        },

        data() {
            return {}
        },

        computed: {
            cartTotalCost(){
                let result = []
                
                if (this.CART.length) {
                    for (let item of this.CART){
                        result.push(item.price * item.amt);
                    }

                    result = result.reduce(function(sum, el){
                        return sum + el;
                    })
                    return result.toFixed(2);
                } else {
                    return 0
                }
            },

            ...mapGetters([
                'CART'
            ])
        },

        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'INCREMENT_ITEM',
                'DECREMENT_ITEM',
            ]),

            increment(index) {
                this.INCREMENT_ITEM(index)
            },
            decrement(index) {
                this.DECREMENT_ITEM(index)
            },
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        }
    }
</script>

<style>
</style>