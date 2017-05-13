#!/usr/bin/env node
'use strict';
const program = require('commander');
const addLineNumbers = require('add-line-numbers');
const fs = require('fs');
const listAndRun = require('./list-and-run').listAndRun;
const path = '/tmp/te';

program.parse(process.argv);

const line = '\n' + program.args;
fs.appendFileSync(path, line);

listAndRun();
