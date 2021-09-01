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

.content-form {
  width: 28%;
}
.form {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
  position: fixed;
  width: 332px;

 &__item {
   margin-bottom: 16px;
   display: flex;
   flex-direction: column;

   label {
     font-family: Source Sans Pro;
     font-style: normal;
     font-weight: normal;
     font-size: 10px;
     line-height: 13px;
     letter-spacing: -0.02em;
     color: #49485E;
     margin-bottom: 4px;
     display: inline-flex;
     position: relative;
   }

   input, textarea {
     padding: 10px 16px;
     border: none;
     background: #FFFEFB;
     box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
     border-radius: 4px;
     font-family: Source Sans Pro;
     font-style: normal;
     font-weight: normal;
     font-size: 12px;
     line-height: 15px;
     color: #3F3F3F;
     border: 1px solid #fff;

     &:focus-visible {
       outline: none;
     }
     &::placeholder {
       color: #b4b4b4;
       font-family: Source Sans Pro;
       font-style: normal;
       font-weight: 300;
       font-size: 12px;
       line-height: 15px;
     }
     &.danger {
       border: 1px solid #FF8484 !important;
     }
   }

   textarea {
     height: 108px;
   }
 }
}

.reqiured-text {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FF8484;
  visibility: hidden;

  &--visible {
    visibility: visible;
  }
}

.add-btn {
  background: #7BAE73;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  width: 100%;
  height: 36px;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  cursor: pointer;
  border: none;
  &.disabled {
    background: #EEEEEE;
    color: #B4B4B4;
    cursor: not-allowed;
  }
}

.red-circle {
  background: #FF8484;
  border-radius: 4px;
  width: 4px;
  height: 4px;
  margin-left: 2px;
}
.success-block{
  display: flex;
  justify-content: center;
  height: 50px;
  font-size: 18px;
  transition: 0.5s;
}
</style>



