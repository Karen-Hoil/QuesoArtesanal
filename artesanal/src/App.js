import './App.css';
import './css/login.css';
import './img/quesito.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './page/home';
import Dashboard from './components/dashboard';
import RecetaInfo from './page/RecetaInfo';
import Login from './page/login';

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
      path: '/RecetaInfo',
      element: <RecetaInfo />
    },
    {
      path:'/',
      element: <Login/>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
