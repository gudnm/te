#!/usr/bin/env node
'use strict';
const program = require('commander');
const fs = require('fs');
const listAndRun = require('./list-and-run').listAndRun;
const path = '/tmp/te';

program.parse(process.argv);

const line_number = parseInt(program.args[0]);
const line = program.args[1];
const file = fs.readFileSync(path, 'utf8');
var lines = file.split('\n');

if (0 < line_number <= lines.length) {
    lines[line_number-1] = line;
}

fs.writeFileSync(path, lines.join('\n'));

listAndRun();
