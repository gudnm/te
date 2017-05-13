#!/usr/bin/env node

const program = require('commander');
const addLineNumbers = require('add-line-numbers');
const fs = require('fs');
const path = '/tmp/te';

program.parse(process.argv);

const line_number = parseInt(program.args);
const file = fs.readFileSync(path, 'utf8');
var lines = file.split('\n');

if (0 < line_number <= lines.length) {
    lines.splice(line_number-1, 1);
}

if (lines.length === 0) {
    fs.writeFileSync(path, "");
} else {
    fs.writeFileSync(path, lines.join('\n'));
}

const updated_file = fs.readFileSync(path, 'utf8');

if (updated_file.length) {
    console.log(addLineNumbers(updated_file));
}
