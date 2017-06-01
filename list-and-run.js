'use strict';
const addLineNumbers = require('add-line-numbers');
const spawnSync = require('child_process').spawnSync;
const fs = require('fs');
const path = '/tmp/te';

module.exports = function listAndRun() {

    let readFileAsync = function(filename, encoding) {
        return new Promise(function(resolve, reject) {
            fs.readFile(filename, encoding, (data, err) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    };
    
    readFileAsync(path, 'utf8')
    .then(listing => {
        var text = [];

        if (listing.length > 0) {
            text.push(addLineNumbers(listing) + '\n');
            const child = spawnSync('node', [path], {timeout: 100, maxBuffer: 100});
            text.push(`stdout: ${child.output[1]}`);
            text.push(`stderr: ${child.output[2]}`);
        } else {
            text.push("Code listing is empty\n");
        }

        console.log(text.join(''));
    })
    .catch(err => {
        throw err;
    })
};
