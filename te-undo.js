#!/usr/bin/env node
'use strict';
const program = require('commander');
const listAndRun = require('./list-and-run').listAndRun;
const fs = require('fs');
const path = '/tmp/te';

program.parse(process.argv);

const file = fs.readFileSync(path+'0', 'utf8');
fs.writeFileSync(path, file);

listAndRun();
