import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="banner">
        <h1>🚀 DevOps CI/CD Demo App</h1>
        <p>Deployed via AWS CodePipeline</p>
      </header>

      <div className="logos">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2 className="main-heading">Vite + React + DevOps</h2>

      <div className="card">
        <button className="click-button" onClick={() => setCount((count) => count + 1)}>
          👆 Clicked {count} {count === 1 ? 'time' : 'times'}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR & deployment</p>
      </div>

      <p className="read-the-docs">
        Click on the logos to learn more about the tools behind this app.
      </p>
    </>
  )
}

export default App
