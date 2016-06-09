import ascii from "rollup-plugin-ascii";
import node from "rollup-plugin-node-resolve";

export default {
  input: "index",
  plugins: [node(), ascii()],
  output: {
    extend: true,
    file: "dist/_d3.js",
    format: "umd",
    indent: false,
    name: "_d3"
  }
};
