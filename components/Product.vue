<template>
    <a class="product__item">
      <div @click="removeProduct(product)" class="product__item-remove">
        <div class="product__item-remove-cart">
          <img src="../assets/img/cart.svg">
        </div>
      </div>
      <div class="product__item-img">
        <img :src="require(`@/assets/img/${product.image || 'polaroid.png'}`)" alt="">
<!--        <img :src="'https://frontend-test.idaproject.com' + `${product.photo}`" alt=""/>-->
      </div>
      <div class="product__item-info">
        <div class="product__info-title">{{ product.name }} </div>
        <div class="product__info-desc">{{ product.description }}</div>
        <div class="product__info-price">{{ product.price.toLocaleString() }} руб.</div>
      </div>
    </a>
</template>

<script>

import { store } from "../store/store"

export default {
  name: 'Product',
  props: ['product'],

  methods: {
    removeProduct: (product) => {
      store.state.products.splice(store.state.products.indexOf(product), 1);
    }
  }
}

</script>

<style lang="scss" scoped>
  @import "../assets/components/product.scss";
</style>
