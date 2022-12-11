import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
    return(
        <div id='App'>
            <h1>리액트 다음 주소 API테스트</h1>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Routes>
            </BrowserRouter>	
        </div>
    )
}
 
export default App;