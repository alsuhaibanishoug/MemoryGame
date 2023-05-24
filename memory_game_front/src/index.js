import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import LandingPage from './pages/landing page/LandingPage';
import SignUp from './pages/sign up/SignUp';
import SignIn from './pages/sign in/SignIn';
import StartGame from './pages/home/StartGame';
import Profile from './pages/profile page/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <LandingPage/>, loader: () => {
        const rem = localStorage.getItem('remember');
        if(rem){
          return redirect('/startgame')
        }
        return null;
      }},
      {path:'signup', element: <SignUp/> },
      {path:'signin', element: <SignIn/>},
      {path:'startgame', element: <StartGame/>, loader: () => {
        const rem = localStorage.getItem('remember');
        if(rem === 'false' || rem === ''){
          return redirect('/signin');
        }
        return null;
      }},
      {path: 'profile', element: <Profile/>, loader: () => {
        const rem = localStorage.getItem('remember');
        if(rem === 'false' || rem === ''){
          return redirect('/signin');
        }
        return null;
      }}
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
