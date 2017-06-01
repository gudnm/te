#!/usr/bin/env node
'use strict';
const program = require('commander');
const listAndRun = require('./list-and-run');
const fs = require('fs');
const path = '/tmp/te';

program.parse(process.argv);

const file = fs.readFileSync(path, 'utf8');
fs.writeFileSync(path+'0', file);
fs.writeFileSync(path, "");

listAndRun();
