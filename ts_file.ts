import * as fileSys from 'fs'

const splitByNewLine: (fileData: string) => string[] = filedata => filedata.split('\n')

const mergeEleInArray: (arrayData: string[]) => string = arrayData => arrayData.join('\n')

readFile('./readme.txt')
    .then(splitByNewLine)
    .then(changeCase)
    .then(mergeEleInArray)
    .then(writeDataToFile)
    .then(console.log)
    .catch(r => console.log('error - ' + r))

function changeCase(arrayData) {
    // console.log(arrayData)
    var changedArray = arrayData.map(
        (x, y) => y % 2 === 0 ? x.toUpperCase() : x.toLowerCase()
    )
    return changedArray
}

function writeDataToFile(data) {
    return writeFile('readme1.txt', data).then(x => x + 'test')
}

function readFile(filename) {
    return new Promise((resolve, reject) => {
        fileSys.readFile(filename, 'utf-8', function (err, data) {
            if (err) reject(err)
            // console.log('data - ' + data)
            resolve(data)
        })
    })
}

function writeFile(filename, data) {
    return new Promise<string>((resolve, reject) => {
        fileSys.writeFile(filename, data, function (err, data) {
            if (err) reject(err)
            resolve('resolved')
        })
    })
}
