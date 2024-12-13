// import logo from './logo.svg';
import './App.css';
import './Component/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Component/HomePage';
import LoginPage from './Component/LoginPage';
import RegisterPage from './Component/RegisterPage';
import AddTask from './Component/AddTask';
import HeaderPage from './Component/HeaderPage';
import FooterPage from './Component/FooterPage';
import TestPage from './Component/TestPage';
import Dashboard from './Component/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/addTask' element={<AddTask/>}></Route>
        <Route path='/header' element={<HeaderPage/>}></Route>
        <Route path='/footer' element={<FooterPage/>}></Route>
        <Route path='/test' element={<TestPage/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
