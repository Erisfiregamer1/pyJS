import { loadPyodide } from "npm:pyodide"

export class PythonEnvironment {
    pyodide
    constructor() {
        this.pyodide = loadPyodide()
    }

    async run(code: string) {
        return await (await this.pyodide).runPythonAsync(code)
    }

    async runOneOff(code: string) {
        return await (await loadPyodide()).runPythonAsync(code)
    }
}
