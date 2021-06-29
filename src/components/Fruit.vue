<template>
  <div class="items">
    <ul>
      <li>
        <div class="fruit-name">Orange</div>
        <div class="right">
          <span class="price"> $13.99</span>
          <button class="btn-buy">
            add
          </button>
        </div>
      </li>
      <li>
        <div class="fruit-name">Banana</div>
        <div class="right">
          <span class="price"> $13.99</span>
          <button class="btn-buy">
            add
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
        }
      }
    }
  }
}
</style>
