const path = require("path")
const fs = require("fs");
const { ENGINE_METHOD_CIPHERS } = require("constants");
// console.log("hello")

  setTimeout(()=>{
      console.log("Hello")
  }, 2000);
console.log(__filename);
fs.mkdir(path.resolve(__dirname))