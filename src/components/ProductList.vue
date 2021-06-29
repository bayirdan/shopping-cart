<template>
  <div class="container">
    <div class="title">
      <h1><span>Fruit</span> Shop</h1>
      <img :src="require('@/assets/img/fruits.svg')" alt="" />
    </div>
    <div class="items">
      <fruit />
    </div>
  </div>
</template>

<script>
import Fruit from "./Fruit.vue";
export default {
  components: { Fruit },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1080px;
  margin: 5rem auto;
  padding: 1rem 5rem;
  background-color: rgba($color: #fff, $alpha: 0.3);
  box-shadow: 0 1rem 0.5rem rgba($color: #000000, $alpha: 0.1);
  border-radius: 1rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-bottom: 2px solid rgba($color: #000, $alpha: 0.1);
    h1 {
      font-size: 4rem;
      font-weight: 300;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      text-shadow: 2px 2px 2px rgba($color: #000, $alpha: 0.2);
      transform: rotate(-5deg);

      span {
        font-weight: bold;
        font-size: 5rem;
      }
    }

    img {
      width: 10rem;
      margin-left: 3rem;
      opacity: 0.8;
    }
  }
}
</style>
