#!/usr/bin/env node
'use strict';
const program = require('commander');
const fs = require('fs');
const path = '/tmp/te';

program.parse(process.argv);

const filename = program.args[0];
const file = fs.readFileSync(path, 'utf8');
fs.writeFileSync(filename, file);

console.log(filename, 'saved');
