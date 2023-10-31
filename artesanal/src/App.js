import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './page/home';
import Dashboard from './components/dashboard';
import RecetaInfo from './page/RecetaInfo';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
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
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
