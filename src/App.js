// import logo from './logo.svg';
import "./App.css";
import "./Component/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Component/HomePage";
import LoginPage from "./Component/LoginPage";
import RegisterPage from "./Component/RegisterPage";
import AddTask from "./Component/AddTask";
import HeaderPage from "./Component/HeaderPage";
import FooterPage from "./Component/FooterPage";
import TestPage from "./Component/TestPage";
import Dashboard from "./Component/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Component/ProtectedRoute ";
import NotFound from "./Component/NotFound";
import Tst from "./Component/Tst";


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          {/* <Route element={<ProtectedRoute/>}> */}
          {/* <Route path="/dashboard" element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>} /> */}
            <Route path="/addTask" element={<AddTask />}></Route>
            <Route path="/header" element={<HeaderPage />}></Route>
            <Route path="/footer" element={<FooterPage />}></Route>
            <Route path="/test" element={<Tst />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* </Route> */}
          <Route path="/tst" element={<Tst/>}></Route>
          <Route path="*" element={NotFound}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
