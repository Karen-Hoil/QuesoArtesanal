import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './page/home';
import Dashboard from './components/dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/dashboard',
      element: <Dashboard/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
