import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((cnt) => cnt + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </ThemeProvider>
  )
}

export default App
