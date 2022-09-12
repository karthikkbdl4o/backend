const bcrypt = require("bcrypt");

const encryption = async (password) => {
  return await bcrypt.hash(password, 10).then((hash) => {
    return hash;
  });
};
const main = async () => {
  const encrypted = await encryption("Ashok+Kumar=1");

  bcrypt.compare("Ashok+Kumar=11", encrypted).then(function (result) {
    console.log(result);
  });
  console.log(encrypted);
};

main();
