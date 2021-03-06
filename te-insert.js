#!/usr/bin/env node
'use strict';
const program = require('commander');
const fs = require('fs');
const listAndRun = require('./list-and-run');
const path = '/tmp/te';

program.parse(process.argv);

const line_number = parseInt(program.args[0]);
const line = program.args[1];
const file = fs.readFileSync(path, 'utf8');
fs.writeFileSync(path+'0', file);
var lines = file.split('\n');

if (0 < line_number <= lines.length) {
    lines.splice(line_number-1, 0, line);
}

fs.writeFileSync(path, lines.join('\n'));

listAndRun();
