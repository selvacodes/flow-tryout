"use strict"
exports.__esModule = true
var fileSys = require("fs")
var splitByNewLine = function(filedata) {
  return filedata.split("\n")
}
var mergeEleInArray = function(arrayData) {
  return arrayData.join("\n")
}
readFile("./readme.txt")
  .then(splitByNewLine)
  .then(changeCase)
  .then(mergeEleInArray)
  .then(writeDataToFile)
  .then(console.log)["catch"](function(r) {
    return console.log("error - " + r)
  })
function changeCase(arrayData) {
  // console.log(arrayData)
  var changedArray = arrayData.map(function(x, y) {
    return y % 2 === 0 ? x.toUpperCase() : x.toLowerCase()
  })
  return changedArray
}
function writeDataToFile(data) {
  return writeFile("readme1.txt", data).then(function(x) {
    return x + "test"
  })
}
function readFile(filename) {
  return new Promise(function(resolve, reject) {
    fileSys.readFile(filename, "utf-8", function(err, data) {
      if (err) reject(err)
      // console.log('data - ' + data)
      resolve(data)
    })
  })
}
function writeFile(filename, data) {
  return new Promise(function(resolve, reject) {
    fileSys.writeFile(filename, data, function(err, data) {
      if (err) reject(err)
      resolve("resolved")
    })
  })
}
