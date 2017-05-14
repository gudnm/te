#!/usr/bin/env node
'use strict';
const program = require('commander');
const listAndRun = require('./list-and-run').listAndRun;
const fs = require('fs');
const path = '/tmp/te';

program.parse(process.argv);

fs.writeFileSync(path, "");

listAndRun();
