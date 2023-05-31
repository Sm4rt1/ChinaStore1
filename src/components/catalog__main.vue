<template>
    <div class='v-catalog'>
        <router-link :to="{name: 'cart'}">
            <div class="v-catalog-linked-cart">Cart: {{CART.length}}</div>
        </router-link>
        <h1>Catalog</h1>
        <div class="search-field">
            <input type="text" v-model="searchValue" class="search" name="username" placeholder="Type product you looking for">
            <button class="search-button" @click="search">
                <i class="material-icons">search</i>
            </button>
        </div>
        <div class='catalog-items'>
            <v-catalog-item
                v-for="product in getFilteredProds"
                :key="product.id"
                :product_data="product"
                @addCart="addCart"
            /> 
        </div>
        <div class="category-buttons">
            <button class="all-categories-button" @click="allCategories">All</button>
            <button v-for="category in CATEGORIES" :value="category" @click="filterByCategories">{{category}}</button>
        </div>
        <div class="sorting-buttons">
            <button @click="allCategories">No sort</button>
            <button @click="fromLowToHigh">Min => Max</button>
            <button @click="fromAToZ">A => Z</button>       
        </div>
    </div>
</template>

<script>
    import vCatalogItem from './catalog__item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },

        props: {
            product_data: {
                type: Object,
                default() {
                    return{}
                }
            }
        },
        
        data() {
            return {
                searchValue: '',
                filteredProds: [],
            }
        },

        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART',
                'CATEGORIES'
            ]),

            getFilteredProds() {
                if (!this.filteredProds.length) {
                    this.filteredProds = this.PRODUCTS.slice()
                } 
                return this.filteredProds
            }
        },

        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART',
                'GET_CATEGORIES_FROM_API'
            ]),

            addCart(data) {
                this.ADD_TO_CART(data)
            },

            search() {
                const tmp = this.searchValue;
                this.searchValue = '';
                if (tmp) {
                    this.filteredProds = this.filteredProds.filter((infoPart) => {
                        return infoPart.title.toLowerCase().includes(tmp.toLowerCase())
                    })
                } else {
                    this.filteredProds = this.PRODUCTS.slice()
                }
            },

            filterByCategories(event) {
                const categoryFromButton = event.target.value;
                this.filteredProds = this.PRODUCTS.filter((sortedProd) => {
                    return sortedProd.category == categoryFromButton;
                }) 
            },

            allCategories() {
                this.filteredProds = this.PRODUCTS.slice();
            },

            fromLowToHigh() {
                this.filteredProds = this.filteredProds.slice().sort((high, low) => {
                    return high.price - low.price;
                })
            },

            fromAToZ() {
                this.filteredProds = this.filteredProds.slice().sort((abc, xyz) => {
                    if (abc.title < xyz.title) {
                        return -1
                    } else if (abc.title > xyz.title) {
                        return 1
                    } else {
                        return 0
                    }
                })
            }
        },

        mounted() {
            this.GET_PRODUCTS_FROM_API(),
            this.GET_CATEGORIES_FROM_API()
        }
    }
</script>

<style>
    .v-catalog-linked-cart{
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
        border: 1mm ridge rgba(200, 200, 200, .7);
        border-radius: 5px;
        background: white;
        position: fixed;
    }
    
    .catalog-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .search-field{
        margin-left: 250px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 1000px;
    }
    
    .search-button{
        margin-bottom: 20px;
    }

    .search{
        height: 0px;
        width: 800px;
        padding: 16px;
        color: #black;
        background: white;
        margin-bottom: 20px;
        border-radius: 10px;
        display: block;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        background-clip: padding-box;
        border: 1px solid #bdbdbd;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .category-buttons{
        position: absolute;
        top: 15%;
        left: 0%;
        width: 200px;
        box-shadow: 0px 0px 5px 5px rgba(100, 100, 0, 0.5);
    }

    .sorting-buttons{
        position: absolute;
        top: 50%;
        left: 0%;
        width: 200px;
        box-shadow: 0px 0px 5px 5px rgba(100, 100, 0, 0.5);  
    }
    
    .category-buttons button, 
    .sorting-buttons button{
        width:200px;
        height: 60px;
        margin: auto;
        word-break: break-word;
        font-family: "Roboto",sans-serif;
        font-size: 1rem;
        line-height: 1.3rem;
        white-space: normal;
        border-radius: 0px; 
    }
</style>