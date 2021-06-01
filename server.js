const app = require("express")();
const dotenv = require("dotenv");
const compression = require("compression");
dotenv.config();

const buildType = process.env.NODE_ENV;

if (buildType === "production") {
  app.use(compression());
}

app.use("/", require("express").static("dist"));
app.use("/crate/pkg", require("express").static("crate/pkg"));
app.use("/crate/assets", require("express").static("crate/assets"));

app.listen(process.env.SERVER_ADDRESS || 1234, () => {
  console.log(
    `Yew app start in address: ${
      process.env.SERVER_ADDRESS || "http://localhost:1234"
    }`
  );
});
