<template>
  <div class="items">
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">
        <div class="fruit-name">{{ fruit.name }}</div>
        <div class="right">
          <span class="price"> ${{ fruit.price }}</span>
          <button class="btn-buy" @click="$emit('fruit-item', fruit)">
            add
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      fruits: "getFruits",
    }),
  },
  emits: ["fruit-item"],
};
</script>

<style lang="scss" scoped>
.items {
  width: 100%;
  max-width: 90rem;
  margin: 5rem auto;
  padding: 1rem;

  ul {
    display: block;

    li {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 5rem;
      font-size: 2rem;
      margin: 3rem 0;
      border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);

      .fruit-name {
        flex: 1;
        text-align: left;
      }

      .right {
        display: flex;
        align-items: center;

        .btn {
          width: 2.5rem;
          height: 2.5rem;
          background-color: transparent;
          outline: none;
          border: none;
          &:hover {
            cursor: pointer;
          }
        }

        span.price {
          font-size: 1.8rem;
        }

        .btn-buy {
          padding: 0.5rem 2rem;
          margin-left: 3rem;
          border-radius: 5px;
          outline: none;
          border: 1px solid rgba($color: #000000, $alpha: 0.2);
          background-color: rgba($color: lightcoral, $alpha: 0.8);
          color: #fff;
          text-shadow: 0px 2px 3px #333;

          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }

          &:active {
            transform: scale(0.95);
          }
        }
      }
    }
  }
}
</style>
