<template>
  <div class="history-container">
    <h1>
      History
      <span class="material-icons-outlined">
        history
      </span>
    </h1>
    <h3 v-if="myHistory.length < 1">No shopping history</h3>
    <ul v-for="(item, index) in getHistory" :key="index">
      <li @click="getDetail(index)">
        {{ item.date }} <span>${{ item.total }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myHistory: [],
    };
  },
  computed: {
    getHistory() {
      this.myHistory = JSON.parse(
        JSON.stringify(this.$store.state.historyData)
      );
      return this.myHistory;
    },
  },

  methods: {
    getDetail(index) {
      this.$router.push("/history/detail/" + index);
    },
  },
};
</script>

<style lang="scss" scoped>
.history-container {
  width: 100%;
  max-width: 50rem;
  margin: 10rem auto;
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem 3rem;
  box-shadow: 0 1rem 0.5rem rgba($color: #000000, $alpha: 0.1);
  font-size: 2rem;
  text-shadow: 0 1px 1px rgba($color: #000000, $alpha: 0.2);

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 300;
    border-bottom: 2px solid rgba($color: #000000, $alpha: 0.3);
    padding-bottom: 1rem;

    span {
      font-size: 4rem;
      margin-left: 2rem;
    }
  }

  ul {
    padding: 2rem;
    li {
      padding: 2rem 0 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px dotted rgba($color: #000000, $alpha: 0.3);

      &:hover {
        cursor: pointer;
        background-color: rgba($color: #000000, $alpha: 0.1);
      }
    }
  }
}
</style>
