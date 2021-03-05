import React, { Suspense, lazy } from 'react'
import './App.css'
const HomePage = lazy(() => import('./pages/Home'))

function App () {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <section className='App-content'>
          <HomePage />
        </section>
      </Suspense>
    </div>
  )
}

export default App
