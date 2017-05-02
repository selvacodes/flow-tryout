const fileSys = require("fs")

const splitByNewLine = filedata => filedata.split("\n")

const mergeEleInArray = arrayData => arrayData.join("\n")

const changeCase = arrayData =>
  arrayData.map(
    (ele, index) => (index % 2 === 0 ? ele.toUpperCase() : ele.toLowerCase())
  )

function writeDataToFile(data) {
  return writeFile("readme1.txt", data)
}

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fileSys.readFile(filename, "utf-8", function(err, data) {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function writeFile(filename, data) {
  return new Promise((resolve, reject) => {
    fileSys.writeFile(filename, data, function(err, data) {
      if (err) reject(err)
      resolve("File written")
    })
  })
}

readFile("./readme.txt")
  .then(splitByNewLine)
  .then(changeCase)
  .then(mergeEleInArray)
  .then(writeDataToFile)
  .then(console.log)
  .catch(r => console.log("error - " + r))
