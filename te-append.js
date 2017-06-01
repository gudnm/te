#!/usr/bin/env node
'use strict';
const program = require('commander');
const fs = require('fs');
const listAndRun = require('./list-and-run');
const path = '/tmp/te';

program.parse(process.argv);

const line = program.args;
const file = fs.readFileSync(path, 'utf8');
fs.writeFileSync(path+'0', file);

var lines = [];
if (file.length) {
    var lines = file.split('\n');
}
lines.push(line);

fs.writeFileSync(path, lines.join('\n'));

listAndRun();
