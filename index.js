var fileSys = require("fs")

const splitByNewLine = filedata => filedata.split("\n")

const mergeEleInArray = arrayData => arrayData.join("\n")

readFile("./readme.txt")
  .then(splitByNewLine)
  .then(changeCase)
  .then(mergeEleInArray)
  .then(writeDataToFile)
  .then(console.log)
  .catch(r => console.log("error - " + r))

function changeCase(arrayData) {
  // console.log(arrayData)
  var changedArray = arrayData.map(
    (x, y) => (y % 2 === 0 ? x.toUpperCase() : x.toLowerCase())
  )
  return changedArray
}

function writeDataToFile(data) {
  // console.log("data - " + data)
  return writeFile("readme1.txt", data).then(x => x + "test")
}

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fileSys.readFile(filename, "utf-8", function(err, data) {
      if (err) reject(err)
      console.log("data - " + data)
      resolve(data)
    })
  })
}

function writeFile(filename, data) {
  return new Promise((resolve, reject) => {
    fileSys.writeFile(filename, data, function(err, data) {
      if (err) reject(err)
      console.log("filename - " + filename)
      resolve("resolved")
    })
  })
}
// var test = callbackfn()
// test.then(console.log("callback"))
// var req = require('request')
// var fs = require('fs')
// req('http://www.pluralsight.com/').pipe//
// (fs.createWriteStream('ps.html'))
// ----------------
// process.stdin.resume()
// process.stdin.setEncoding('utf8')
// process.stdin.on('data', function(data_chunk){
// process.stdout.emit('date entered - ' + data_chunk)
// })
// -----------------
// var buffer = new Buffer('Hey')
// console.log(buffer.toString('base64'))
// console.log(buffer.toString())
