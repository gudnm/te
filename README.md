# te
Text editor for Javascript written in Javascript

Ever had to write a multiline function in node REPL just to find out you had a
typo in one of the lines? That would mean you have to rewrite it or reconstruct
it from the REPL history. te to the rescue! It runs your piece of code after
every edit and allows to replace, delete, insert and append lines of code.

All you need to run it is node.js installed on your machine. Simply clone this
repo and run `npm link` and te will be available to run in your terminal.

```
Usage: te [options] [command]

Commands:

  list|l                          output code listing and its execution result
  append|a <line>                 append a line to the end
  insert|i <line_number> <line>   insert a line at specified position
  replace|r <line_number> <line>  replace a line
  delete|d <line_number>          delete a line
  clear|c                         clear the code listing
  undo|u                          undo the last change
  help [cmd]                      display help for [cmd]

Options:

  -h, --help     output usage information
  -V, --version  output the version number
```
