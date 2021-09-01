<!-- Please remove this file from your project -->
<template>

<div class="add-product">
  <div class="add-product__header">
    <div class="header__section-title  section-title">Добавление товара</div>
    <div class="header__section-filter">
      <div class="sort-dropdown">
        <div
          v-bind:class="{ isActive: dropdownActive }"
          class="sort-dropdown__title"
          @click.prevent="openDropdown"
          onmousedown="return false"
        >
          {{ dropdownTitle }}
        </div>
        <div class="sort-dropdown__list" v-if="dropdownActive">
          <div
            v-for="item in dropdownVariants"
            v-bind:class="{ isActive: item.active }"
            class="sort-dropdown__list-item"
            @click="changeSort(item)"
          >{{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="add-product__content">
    <Form />

    <div class="content-products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        :price="product.price"
      />

    </div>
  </div>
</div>
</template>

<script>

import { store } from "../store/store";

export default {

  data() {
    return {
      products: store.state.products,
      dropdownTitle:  'По умолчанию',
      dropdownActive: 0,
      dropdownVariants: [
        {
          text: 'По цене min',
          method: 'min',
        },
        {
          text: 'По цене max',
          method: 'max',
        },
        {
          text: 'По наименованию',
          method: 'name',
        },
      ],
    }
  },

  methods: {
    changeSort(item) {
      this.dropdownTitle = item.text
      this.dropdownActive = !this.dropdownActive

      if (item.method == 'min') {
        this.products = Object.values(this.products).sort((a, b) => a.price - b.price);
      } else if (item.method == 'max') {
        this.products = Object.values(this.products).sort((a, b) => b.price - a.price);
      } else if (item.method == 'name') {
        this.products = Object.values(this.products).sort((a, b) => (a.name > b.name ? 1 : -1))
      }
    },
    openDropdown() {
      this.dropdownActive = !this.dropdownActive
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownActive = false
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },
}

</script>



<style lang="scss" scoped>
  @import "../assets/main.scss";
  @import "../assets/components/header-section.scss";

  .add-product__content {
    display: flex;
    justify-content: center;
  }
  .content {
    &-form {
      width: 25%;

    }
    &-products {
      width: 74%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }

  //filter
  .sort-dropdown {
    width: auto;
    position: relative;
  }
  .sort-dropdown:hover {
    cursor: pointer;
  }

  .sort-dropdown__list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    position: absolute;
    z-index: 13;
    background: #fff;
    overflow: hidden;
    box-shadow: 0px 2px 5px rgb(0 0 0 / 10%);
    border-radius: 4px;
    right: 0px;
  }

  .sort-dropdown__list-item {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    color: black;
    transition: height 0.3s, opacity 0.4s;
    position: relative;
    background: #FFFEFB;
    padding-right: 26px;
    width: 145px;
  }

  .sort-dropdown__title {
    display: inline-flex;
    align-items: center;
    position: relative;
    border-radius: 2px;
    padding: 10px 16px;
    padding-right: 26px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    width: 145px;
  }

  .sort-dropdown__list-item:hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }

  .sort-dropdown__title:after {
    position: absolute;
    top: 53%;
    right: 15px;
    transform: translate(0, -50%);
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264' stroke='%23B4B4B4'/%3E%3C/svg%3E%0A");
    display: inline-block;
    content: ' ';
    width: 8px;
    height: 8px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 8px 8px;
    transition: all 0.3s;
  }

  .sort-dropdown__title.isActive:after {
    transform: rotate(-180deg);
    top: 40%;
  }

  .top-filter-dropdown {
    justify-content: flex-end;
    margin-bottom: 30px;
  }

  .sort-dropdown__list-item.isActive {
    font-weight: 700;
  }
  .sort-dropdown__list-item.isActive:after {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);
    background-image: url("data:image/svg+xml,%3Csvg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.99348 0L3.05647 5.002L0.942302 2.85644L0 3.81326L3.0567 6.9079L8.93463 0.952352L7.99348 0Z' fill='%23091A2F'/%3E%3C/svg%3E%0A");
    display: inline-block;
    content: ' ';
    width: 11px;
    height: 9px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 11px 9px;
    transition: all 0.3s;
  }
</style>

