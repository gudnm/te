#!/usr/bin/env node
'use strict';
const program = require('commander');

program
.version('0.0.1')
.command('append <line>', 'append a line to the end')
.alias('a')
.command('insert <line_number> <line>', 'insert a line at specified position')
.alias('i')
.command('replace <line_number> <line>', 'replace a line')
.alias('r')
.command('delete <line_number>', 'delete a line')
.alias('d')
.parse(process.argv);

if (program.args.length === 0) program.help();