<template>
  <div id="app">
    <div id="nav">
      <div class="left-link">
        <router-link to="/" tag="a" class="home">Home</router-link>
        <span class="space">|</span>
        <router-link to="/about" tag="a">About</router-link>
      </div>
      <div class="right-link">
        <div class="price">
          <p>$ 59.99</p>
        </div>
        <router-link to="/about" tag="a">
          <span class="material-icons-two-tone shopping" title="View Bag">
            shopping_bag
          </span>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "../src/assets/style/my-style.css";
body {
  background-color: #e2e8c15e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 2rem 5rem;
  width: 100%;
  background-color: #c1e8e8;
  box-shadow: 0 1px 5px rgba($color: #000000, $alpha: 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;

  span.space {
    font-size: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  a {
    color: #777;
    text-decoration: none;
    font-size: 2rem;

    &.router-link-exact-active {
      color: #000;
    }
  }

  .right-link {
    display: flex;
    align-items: center;

    p {
      font-size: 2rem;
      color: #000;
      font-weight: bold;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }

    .shopping {
      margin-left: 3rem;
      font-size: 3rem;
      transition: 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
