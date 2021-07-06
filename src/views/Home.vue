<template>
  <div class="home">
    <product-list @fruit-item="addList($event)" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "../components/ProductList.vue";
export default {
  name: "Home",
  components: { ProductList },
  data() {
    return {
      shoppingList: JSON.parse(JSON.stringify(this.$store.state.data)),
    };
  },
  methods: {
    addList(item) {
      const itemIndex = this.shoppingList.findIndex(
        (i) => i.name === item.name
      );
      if (itemIndex === -1) {
        const items = {
          name: item.name,
          piece: 1,
          price: item.price,
        };
        this.shoppingList.push(items);
      } else {
        this.shoppingList[itemIndex].piece += 1;
      }
      this.$store.dispatch("addData", this.shoppingList);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem;
}
</style>
