import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Categoryes from './components/Categoryes'
import Nav from './components/nav/Nav'
import Products from './components/Products'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categoryes/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
