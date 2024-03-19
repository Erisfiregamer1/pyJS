# pyJS
A small python to JS abstraction layer. Intended for use on JSR.


## How to use
Initialize with `new PythonInterpreter` (import PythonInterpreter from the JSR package, @erisws/pyJS). From there, you can either use `PythonInterpreter.run()` (to keep one consistent environment) or `PythonInterpreter.runOneOff()` to run the code in it's own env, seperate from the main interpreter.
