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
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CheckList from './page/checkList/checkList';
import { Layout } from './layout/layout';


function App() {
  return (
  
    <BrowserRouter>
    <Layout>
        <Routes> 
          <Route path='/'>
            <Route path='/RecetaInfo' element={<RecetaInfo/>}></Route>
            <Route path='/CheckList' element={<CheckList/>}></Route>
            
          </Route>    
        </Routes>
      </Layout>  
    </BrowserRouter>
    
  );
}

export default App;
