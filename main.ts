import { loadPyodide } from "npm:pyodide"

export class PythonEnvironment {
    pyodide: ReturnType<Awaited<typeof loadPyodide>>
    constructor() {
        this.pyodide = loadPyodide()
    }

    async run(code: string): Promise<string> {
        return await (await this.pyodide).runPythonAsync(code) as string
    }

    async runOneOff(code: string): Promise<string> {
        return await (await loadPyodide()).runPythonAsync(code) as string
    }
}
