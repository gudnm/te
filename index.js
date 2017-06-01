#!/usr/bin/env node
'use strict';
const program = require('commander');

program
.version('0.0.1')
.command('list', 'output code listing and its execution result')
.alias('l')
.command('append <line>', 'append a line to the end')
.alias('a')
.command('insert <line_number> <line>', 'insert a line at specified position')
.alias('i')
.command('replace <line_number> <line>', 'replace a line')
.alias('r')
.command('delete <line_number>', 'delete a line')
.alias('d')
.command('clear', 'clear the code listing')
.alias('c')
.command('undo', 'undo the last change')
.alias('u')
.command('save <file_name>', 'save listing to a file')
.alias('s')
.parse(process.argv);

if (program.args.length === 0) program.help();
