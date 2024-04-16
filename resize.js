const sharp = require("sharp");
const fs = require("fs");

const images = fs.readdirSync("./public/images/house/medium");

images.forEach((image) => {
  const name = image.replace(".jpg", "");
  sharp(`./public/images/house/medium/${image}`)
    .resize(600)
    .toFile(`./public/images/house/medium/${name}s`, (err) => {
      if (err) {
        console.log(err);
      }
    });
});
