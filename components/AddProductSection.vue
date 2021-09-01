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
  @import "../assets/components/add-product";
</style>

