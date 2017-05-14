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

## Example
```
machine:~ user$ te a 'var a = 1;'
1: var a = 1;
stdout: stderr: 
machine:~ user$ te a 'var b = 2;'
1: var a = 1;
2: var b = 2;
stdout: stderr: 
machine:~ user$ te a 'console.log(a+b);'
1: var a = 1;
2: var b = 2;
3: console.log(a+b);
stdout: 3
stderr: 
machine:~ user$ te r 2 'varb = 3;'
1: var a = 1;
2: varb = 3;
3: console.log(a+b);
stdout: stderr: /private/tmp/te:3
console.log(a+b);
              ^
ReferenceError: b is not defined
    at Object.<anonymous> (/private/tmp/te:3:15)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:390:7)
    at startup (bootstrap_node.js:150:9)
    at bootstrap_node.js:505:3
machine:~ user$ te u
1: var a = 1;
2: var b = 2;
3: console.log(a+b);
stdout: 3
stderr: 
machine:~ user$ te c
Code listing is empty
machine:~ user$ te u
1: var a = 1;
2: var b = 2;
3: console.log(a+b);
stdout: 3
stderr: 
```
