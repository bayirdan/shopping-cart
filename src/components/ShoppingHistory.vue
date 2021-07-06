<template>
  <div class="history-container">
    <h1>Date: {{ product.date }}</h1>
    <ul>
      <li v-for="(item, index) in product.items" :key="index">
        <p>
          <span>{{ item.piece }} |</span>{{ item.name }}
        </p>
        <div class="price">${{ (item.piece * item.price).toFixed(2) }}</div>
      </li>
    </ul>
    <div class="total-price">Total Price: ${{ product.total }}</div>
    <div class="back" @click="$router.push('/history')">
      <span class="material-icons-outlined"> chevron_left </span>back
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: this.$route.params.index,
    };
  },
  computed: {
    product() {
      return this.$store.state.historyData[this.index];
    },
  },
};
</script>

<style lang="scss" scoped>
.history-container {
  width: 100%;
  max-width: 60rem;
  margin: 10rem auto;
  background-color: #fff;
  font-size: 1.7rem;
  border-radius: 1rem;
  box-shadow: 0 1rem 0.5rem rgba($color: #000000, $alpha: 0.1);
  text-shadow: 0 1px 1px #999;

  h1 {
    background-color: #444;
    color: #fff;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-family: monospace;
    text-shadow: none;
    font-weight: 300;
  }

  ul {
    padding: 2rem;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem;
      padding: 0.5rem;
      border-bottom: 2px dotted rgba($color: #000000, $alpha: 0.2);

      span {
        margin-right: 1rem;
      }
    }
  }
  .total-price {
    font-size: 2rem;
    margin: 2rem;
  }
  .back {
    color: #ccc;
    font-size: 1.6rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    span {
      font-size: 1.8rem;
    }

    &:hover {
      cursor: pointer;
      color: #333;
    }
  }
}
</style>
