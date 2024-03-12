import './App.css'
import ContextProvider from './context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <ContextProvider>
      <h1>React Context Api</h1>
      <Login />
      <Profile />
    </ContextProvider>
  )
}

export default App
