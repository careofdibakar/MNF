import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import Home from "./common/Home";
import Login from "./common/Login";
import Signup from "./common/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Header} />
        <Route path="/login" Component={Login} />
        <Route path="/home" Component={Home} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
