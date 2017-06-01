#!/usr/bin/env node
'use strict';
const program = require('commander');
const listAndRun = require('./list-and-run');
const path = '/tmp/te';

program.parse(process.argv);

listAndRun();
