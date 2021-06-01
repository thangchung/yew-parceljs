const { execSync } = require("child_process");
const Path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const Parcel = require("@parcel/core").default;

const entryFiles = Path.join(__dirname, "index.html");

const buildType = process.env.NODE_ENV;

let prevtBuildFile = Path.join(__dirname, "./wasm_pack_cmd");
if (process.platform === "win32") {
  prevtBuildFile = Path.join(__dirname, "./wasm_pack_cmd.bat");
}

execSync(`${prevtBuildFile} ${buildType === "production" ? "" : "--dev"}`, {
  stdio: "inherit",
});

(async () => {
  var parcel = new Parcel({
    entries: entryFiles,
    defaultConfig: require.resolve("@parcel/config-default"),
    distDir: Path.join(__dirname, "dist"),
    logLevel: "verbose",
  });

  await parcel.run();
})();
