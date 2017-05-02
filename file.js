// @flow

const fileSys = require("fs");

const splitByNewLine: (string) => string[] = filedata => filedata.split("\n");

const mergeEleInArray: (string[]) => string = arrayData => arrayData.join("\n");

const changeCase = (arrayData: string[]): string[] =>
  arrayData.map(
    (ele: string, index: number) =>
      index % 2 === 0 ? ele.toUpperCase() : ele.toLowerCase()
  );

function writeDataToFile(data) {
  return writeFile("readme1.txt", data).then(x => x + "test");
}

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fileSys.readFile(filename, "utf-8", function(err, data) {
      if (err) reject(err);
      // console.log('data - ' + data)
      resolve(data);
    });
  });
}

function writeFile(filename, data): Promise<string> {
  return new Promise((resolve, reject) => {
    fileSys.writeFile(filename, data, function(err, data) {
      if (err) reject(err);
      resolve("resolved");
    });
  });
}

readFile("./readme.txt")
  .then(splitByNewLine)
  .then(changeCase)
  .then(mergeEleInArray)
  .then(writeDataToFile)
  .then(console.log)
  .catch(r => console.log("error - " + r));
