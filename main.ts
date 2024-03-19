import { loadPyodide } from "npm:pyodide@0.25.0"

/**
  * The main (and only) file of pyJS. What do you want me to say?
  * @module
 */
  
/** The main class for this module. */
export class PythonEnvironment {
    pyodide: ReturnType<Awaited<typeof loadPyodide>>
    constructor() {
        this.pyodide = loadPyodide()
    }

    /** Run Python code in the current context. */
    async run(code: string): Promise<string> {
        return await (await this.pyodide).runPythonAsync(code) as string
    }

    /** Run Python code in a new, clean context. */
    async runOneOff(code: string): Promise<string> {
        return await (await loadPyodide()).runPythonAsync(code) as string
    }
}
