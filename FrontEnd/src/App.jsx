import Header from "./Components/header/Header"
import './App.css'
import Home from "./Components/home/Home"
import { Box } from "@mui/material"
import Dataprovider from "../context/Dataprovider"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DetailView from "./Components/details/DetailView"
import Cart from "./cart/Cart"

function App() {
 

  return (
    <Dataprovider>
      <Router>
          <Header></Header>
          <Box style={{marginTop:54}}>
            <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/product/:id" element={<DetailView></DetailView>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>
          </Box>
      </Router>
    </Dataprovider>
  )
}

export default App
