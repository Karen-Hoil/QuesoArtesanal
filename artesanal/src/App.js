import './App.css';
import './css/login.css';
import './img/quesito.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//paginas y componentes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './page/home';
import Recetas from './page/recetas';
import RecetaInfo from './page/RecetaInfo';
import Login from './page/login';
import CheckList from './page/checkList/checkList';
import Comparacion from './components/comparacion';
import Registro from './page/registro';
import Produccion from './page/Produccion'; 


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
    {
      path: '/checkList/:id_receta',
      element: <CheckList />
    }
  ]);

        
  
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
