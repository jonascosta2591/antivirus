import { useState, useRef, useEffect } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  const [email, setEmail ] = useState(0)
  
  const renders = useRef(0)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  return (
    <>
      <Header/>
      {email}
      <h1>Login</h1>
      <div className="container-login">
        <form>
          <input type="text" name="email" placeholder="email"/>
          <input type="password" onChange={(e) => setEmail(e.target.value)} name="password" placeholder="password"/>
          Renders: {renders.current}
        </form>
        <button type="submit">submit</button>
      </div>
      
      <Footer />
      
    </>
  )
}

export default App
