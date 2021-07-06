<template>
  <div class="bag-container">
    <h1 v-if="items.length > 0">
      Shopping Cart
      <span class="material-icons-two-tone">
        shopping_cart
      </span>
    </h1>

    <ul>
      <h2 v-if="items.length < 1">! Shopping cart is empty</h2>
      <li v-for="(item, index) in getMyBag" :key="index">
        <div class="name">
          <span>{{ item.piece }} |</span>
          {{ item.name }}
        </div>
        <div class="price">
          <p>${{ (item.piece * item.price).toFixed(2) }}</p>
          <span @click="deleteItem(index)" class="material-icons-outlined">
            delete_outline
          </span>
        </div>
      </li>
    </ul>
    <div v-if="items.length > 0" class="total">
      <p><span>Total Price: </span>$ {{ getTotalPrice }}</p>
    </div>
    <div class="buttons">
      <button class="btn-shopping btn" @click="$router.push('/')">
        <span class="material-icons-two-tone">
          chevron_left
        </span>
        Keep Shopping
      </button>
      <button
        class="btn-confirm btn"
        @click="confirm"
        :disabled="items.length < 1"
      >
        Confirm Order
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      totalPrice: 0.0,
    };
  },
  computed: {
    getMyBag() {
      this.items = JSON.parse(JSON.stringify(this.$store.state.data));
      return this.items;
    },
    getTotalPrice() {
      const myData = JSON.parse(JSON.stringify(this.$store.state.data));
      this.totalPrice = myData
        .reduce((total, item) => {
          return total + item.piece * item.price;
        }, 0)
        .toFixed(2);
      return this.totalPrice;
    },
  },
  methods: {
    deleteItem(index) {
      this.$store.dispatch("deleteData", index);
    },
    confirm() {
      const date = new Date();
      const history = {
        items: { ...this.items },
        total: this.totalPrice,
        date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`,
      };
      this.$store.dispatch("addHistory", history);
      alert("Order Successful");
      this.$store.dispatch("deleteShopping");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.bag-container {
  width: 100%;
  max-width: 55rem;
  margin: 10rem auto;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1rem 0.5rem rgba($color: #000000, $alpha: 0.2);

  h1 {
    font-size: 3rem;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px dotted rgba($color: #000000, $alpha: 0.5);
    text-shadow: 0 1px 1px #555;

    span {
      font-size: 4rem;
      margin-left: 2rem;
    }
  }

  ul {
    padding: 4rem;

    h2 {
      font-size: 2rem;
      opacity: 0.8;
      color: indianred;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      border-bottom: 2px dotted rgba($color: #000000, $alpha: 0.2);

      &:not(:last-child) {
        margin-bottom: 2rem;
      }

      .name {
        font-size: 1.8rem;
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-size: 1.8rem;
          margin-right: 3rem;
        }

        span {
          color: lightsalmon;
          transition: all 0.3s;

          &:hover {
            cursor: pointer;
            user-select: none;
            color: indianred;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .total {
    font-size: 2rem;
    padding: 2rem;

    span {
      margin-right: 2rem;
      color: #000;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    border-top: 2px dotted rgba($color: #000000, $alpha: 0.5);
    padding: 3rem;

    .btn {
      width: 30%;
      margin: 0 2rem;
      height: 4rem;
      font-size: 1.5rem;
      text-shadow: 0 1px 1px #555;
    }

    .btn-confirm {
      flex: 1;
      background-color: lightgreen;
      border: none;
      outline: none;
      border-radius: 1rem;
      box-shadow: 0 2px 3px rgba($color: #000000, $alpha: 0.2);

      &:hover {
        opacity: 0.9;
        cursor: pointer;
      }

      &:disabled {
        cursor: no-drop;

        &:hover {
          opacity: 1;
        }
      }
    }

    .btn-shopping {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      outline: none;

      span {
        transition: all 0.2s;
      }

      &:hover {
        cursor: pointer;

        span {
          transform: translateX(-5px);
        }
      }
    }
  }
}
</style>
