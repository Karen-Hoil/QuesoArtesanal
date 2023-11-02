import './App.css';
import './css/login.css';
import './img/quesito.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './page/home';
import Dashboard from './components/dashboard';
import Recetas from './page/recetas'
import RecetaInfo from './page/RecetaInfo';
import Login from './page/login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CheckList from './page/checkList/checkList';
import { Layout } from './layout/layout';


function App() {
  const router = createBrowserRouter([
    {
      path:'/home',
      element: <Home/>
    },
    {
      path:'/dashboard',
      element: <Dashboard/>
    },
    {
      path: '/recetas',
      element: <Recetas />
    },
    {
      path: '/RecetaInfo',
      element: <RecetaInfo />
    },
    {
      path:'/',
      element: <Login/>
    },
    {
      path:"/checkList",
      element:<CheckList/>
    }
  ])
  return (
  
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
