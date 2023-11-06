import './App.css';
import './css/login.css';
import './img/quesito.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//paginas y componentes
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
>>>>>>> fc3b0446e759fdf8f9b49f9bfa343875a5bb7eb9
import Home from './page/home';
import Recetas from './page/recetas';
import RecetaInfo from './page/RecetaInfo';
import Login from './page/login';
import CheckList from './page/checkList/checkList';
import Comparacion from './components/comparacion';
<<<<<<< HEAD
import Registro from './page/registro';


=======
import Produccion from './page/Produccion'; 
>>>>>>> fc3b0446e759fdf8f9b49f9bfa343875a5bb7eb9

function App() {
  const router = createBrowserRouter([
    {
      path:'/home',
      element: <Home/>
    },
    {
      path: '/recetas',
      element: <Recetas />
    },
    {
      path: '/recetaInfo/:id_receta',
      element: <RecetaInfo />
    },    
    {
      path:'/',
      element: <Login/>
    },
    {
      path:'/registro',
      element: <Registro/>
    },
    {
      path:"/checkList",
      element:<CheckList/>
    },
    {
      path:'/comparacion',
      element: <Comparacion/>
    },
    {
      path:'/produccion',
      element: <Produccion/>
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
