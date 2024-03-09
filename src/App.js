import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes, Switch, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Profile from './pages/Profile.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Analytics from './pages/Analytics.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
    <switch>
      <Sidebar>
        <Routes>
        <Route
            exact
            path="Profile"
            element={Login == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} /> 
          <Route path="login" element={<Navigate to="/profile" />} />
        </Routes>
      </Sidebar>
      </switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
