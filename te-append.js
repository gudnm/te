#!/usr/bin/env node

const program = require('commander');
const addLineNumbers = require('add-line-numbers');
const fs = require('fs');
const path = '/tmp/te';

program.parse(process.argv);

const line = '\n' + program.args;

fs.appendFileSync(path, line);

const updated_file = fs.readFileSync(path, 'utf8');

console.log(addLineNumbers(updated_file));
