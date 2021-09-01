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

.product__item {
  position: relative;
  margin-left: 16px;
  margin-bottom: 16px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  max-width: 332px;
  transition: 0.3s;
  cursor: pointer;



  &:hover {
    .product__item-remove {
      transition: 0.3s;
      visibility: visible;
    }

    box-shadow: 0px 20px 30px rgb(0 0 0 / 30%), 0px 6px 10px rgb(5 3 3 / 10%);
  }

  &-img {
    display: flex;
    width: 332px;
    height: 200px;
    justify-content: center;

    img {
      height: 100%;
      width: auto;
    }
  }

  &-info {
    padding: 16px;
    padding-bottom: 24px;
  }



  &-remove {
    width: 32px;
    height: 32px;
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 10px;
    background: #FF8484;
    position: absolute;
    top: -9px;
    right: -9px;
    transition: 0.3s;
    visibility: hidden;

    &:hover {
      background: red;
    }

    &-cart {
      display: flex;
      width: 16px;
      height: 16px;
      align-self: center;
      justify-self: center;
    }
  }
}

.product__info {
  &-title {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
  }

  &-desc {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 32px;
  }

  &-price {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}

</style>
