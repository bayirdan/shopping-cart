const state = {
  fruits: {
    apple: {
      name: "Apple",
      price: 1.35,
    },
    avocado: {
      name: "Avocado",
      price: 5.15,
    },
    banana: {
      name: "Banana",
      price: 1.45,
    },
    cherry: {
      name: "Cherry",
      price: 4.45,
    },
    coconut: {
      name: "Coconut",
      price: 9.95,
    },
    grape: {
      name: "Grape",
      price: 2.95,
    },
    orange: {
      name: "Orange",
      price: 1.15,
    },
    peach: {
      name: "Peach",
      price: 2.55,
    },
    pear: {
      name: "Pear",
      price: 3.75,
    },
    pineapple: {
      name: "Pineapple",
      price: 6.65,
    },
    strawberry: {
      name: "Strawberry",
      price: 3.35,
    },
    watermelon: {
      name: "Watermelon",
      price: 4.95,
    },
  },
};

const getters = {
  getFruits(state) {
    return state.fruits;
  },
};

export default {
  state,
  getters,
};
