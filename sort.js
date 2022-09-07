const bubble = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      let item1 = array[j];
      let item2 = array[j + 1];
      if (item1 > item2) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  console.log(array);
};

bubble([6, 4, 2, 10, 3, 1, 0]);
