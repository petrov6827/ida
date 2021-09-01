import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex'

// export const Store = axios.create({
//   baseURL: 'https://frontend-test.idaproject.com/api',
//   headers: {
//     ContentType: 'application/json',
//   },
// })

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {
        "id":190,
        "name":"РЮКЗАК OUTDOOR",
        "price":242000,
        "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        "rating":2,
        "link":"/upload/product/backpack2-4755.e0agsd.jpg",
        "category":1
      },
      {
        "id":184,
        "name":"РЮКЗАК CHRISTOPHER PM",
        "price":203000,
        "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        "rating":4,
        "link":"/upload/product/backpack0-6b2b.pa1mgx.jpg",
        "category":1
      },
      {
        "id":219,
        "name":"СУМКА DISCOVERY PPM",
        "price":143000,
        "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        "rating":2,
        "link":"/upload/product/bagMessenger13-3927.12sfpj.jpg",
        "category":2
      },
      {
        "id":232,
        "name":"ПОРТФЕЛЬ PRESIDENT CLASSEUR",
        "price":815000,
        "description": "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        "rating":1,
        "link":"/upload/product/businessBag17-5dc4.486zln.jpg",
        "category":3
      },
    ]
  },
  mutations: {
    setProduct(state, payload) {
      state.products = state.products.push(payload)
    },
  },
})


