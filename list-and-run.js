'use strict';
const addLineNumbers = require('add-line-numbers');
const spawnSync = require('child_process').spawnSync;
const fs = require('fs');
const path = '/tmp/te';

exports.listAndRun = () => {
    var text = [];

    const listing = fs.readFileSync(path, 'utf8');

    if (listing.length > 0) {
        text.push(addLineNumbers(listing) + '\n');

        const child = spawnSync('node', [path], {timeout: 100, maxBuffer: 100});
        text.push(`stdout: ${child.output[1]}`);
        text.push(`stderr: ${child.output[2]}`);

    } else {
        text.push("Code listing is empty\n");
    }

    console.log(text.join(''));
};
