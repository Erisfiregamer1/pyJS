# pyJS
A small python to JS abstraction layer. Intended for use on JSR.

### Example

```javascript
import { PythonEnvironment } from "@erisws/pyjs";

const python = new PythonEnvironment

const output = python.run("1+1") // 2
```
