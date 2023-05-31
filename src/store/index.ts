import axios from 'axios';
import { createStore } from 'vuex'
interface face{
  products: Object[],
  cart: any[],
  categories: any[]
}

export default createStore<face>({
  state: {
    products: [],
    cart: [],
    categories: []
  },

  getters: {
    PRODUCTS(state) {
      return state.products;
    },

    CART(state) {
      return state.cart;
    },

    CATEGORIES(state) {
      return state.categories;
    }
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },

    SET_CATEGORIES_TO_STATE: (state, categories) => {
      state.categories = categories;
    },

    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item){
          if (item.id === product.id){
          isProductExists = true;
            item.amt++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },

    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },

    INCREMENT: (state, index) => {
      state.cart[index].amt++
    },

    DECREMENT: (state, index) => {
      if (state.cart[index].amt > 1) {
        state.cart[index].amt--
      }
    },

    
  },

  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('https://fakestoreapi.com/products',{
        method: "GET"
      })

      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })

      .catch((error) => {
        console.log(error);
        return error;
      })
    },

    GET_CATEGORIES_FROM_API({commit}) {
      return axios('https://fakestoreapi.com/products/categories', {
        method: 'GET'
      })
      
      .then((categories) => {
        commit('SET_CATEGORIES_TO_STATE', categories.data);
        return categories
      })

      .catch((error) => {
        console.log(error);
        return error;
      })
    },

    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    },

    INCREMENT_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },

    DECREMENT_ITEM({commit}, index) {
      commit('DECREMENT', index)
    },

    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },

  modules: {}
})
