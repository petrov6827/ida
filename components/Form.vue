<template>
  <div class="content-form">
    <form @submit.stop.prevent="checkForm"  class="form">

      <div class="form__item">
        <label for="name">Наименование товара<span class="red-circle"></span></label>

        <input
          placeholder="Введите наименование товара"
          id="name"
          v-model="name"
          type="text"
          name="name"
          v-bind:class="{'danger' : isDangerName}"
        >
        <div class="reqiured-text" v-bind:class="{'reqiured-text--visible' : isDangerName}">Поле является обязательным</div>
      </div>

      <div class="form__item">
        <label for="description">Описание товара</label>
        <textarea
          placeholder="Введите описание товара"
          id="description"
          v-model="description"
          type="text"
          name="description"
        ></textarea>
      </div>

      <div class="form__item">
        <label for="link">Ссылка на изображение товара<span class="red-circle"></span></label>
        <input
          placeholder="Введите ссылку"
          id="link"
          v-model="link"
          type="text"
          name="link"
          v-bind:class="{'danger' : isDangerLink}"
        />
        <div class="reqiured-text" v-bind:class="{'reqiured-text--visible' : isDangerLink}">Поле является обязательным</div>
      </div>

      <div class="form__item">
        <label for="price">Цена товара<span class="red-circle"></span></label>
        <input
          placeholder="Введите цену"
          id="price"
          v-model="price"
          name="price"
          v-bind:class="{'danger' : isDangerPrice}"
        >
        <div class="reqiured-text" v-bind:class="{'reqiured-text--visible' : isDangerPrice}">Поле является обязательным</div>
      </div>

      <div v-if="isValid" class="success-block">Товар успешно добавлен!</div>

        <input class="add-btn" v-bind:class="{ 'disabled': !isValid }"
          type="submit" value="Добавить товар"
        />

    </form>
  </div>
</template>

<script>

import { mapMutations } from "vuex";
import { store } from "../store/store"

export default {
  name: 'Form',
  data() {
    return {
      errors: [],
      name: '',
      description: null,
      price: null,
      link: null,
      isValid: 0,
      isDangerName: 0,
      isDangerLink: 0,
      isDangerPrice: 0
    }
  },

  methods: {
    checkForm: function (e) {

      if (this.name && this.link && this.price) {
        this.isValid = 1
        this.submitClick()
      }

      if (!this.name) {
        this.isDangerName = 1
      } else {
        this.isDangerName = 0
      }

      if (!this.link) {
        this.isDangerLink = 1
      } else {
        this.isDangerLink = 0
      }

      if (!this.price) {
        this.isDangerPrice = 1
      } else {
        this.isDangerPrice = 0;
      }

    },

    ...mapMutations([
      "setProduct"
    ]),

    submitClick() {
      const newProduct = {
        // "id": this.products[products.length - 1].id + 1,
        "id": 1,
        "name": this.name,
        "price": this.price,
        "description": this.description,
        "rating":1,
        "link": this.link,
        "category":3,
      };
      store.commit('setProduct', newProduct);
    },
  },
}

</script>

<style lang="scss" scoped>

@import "../assets/main.scss";
@import "../assets/components/form.scss";

</style>



