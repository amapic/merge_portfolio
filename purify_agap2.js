// import purify from "purify-css";
const purify = require("purify-css")

// let content = ""
// let css = ""
// let options = {
//     output: "filepath/output.css"
// }
// purify(content, css, options)

var content = ["**/components_agap2/*.jsx","**/pages/index.jsx"];
var css = ["**/styles/*_agap2.css"];

var options = {
  // Will write purified CSS to this file.
  output: "./purify_agap2_.css",
  
};

purify(content, css, options);
