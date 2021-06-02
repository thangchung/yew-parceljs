const express = require("express");
const path = require("path");

module.exports = function (app) {
  app.use("/", express.static(path.join(__dirname, "/dist")));
  app.use("/crate/pkg", express.static(path.join(__dirname, "/crate/pkg")));
  app.use(
    "/crate/assets",
    express.static(path.join(__dirname, "/crate/assets"))
  );
};
