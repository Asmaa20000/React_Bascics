
import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact'
import Parent from './Component/Parent/Parent';
import Portfolio from './Component/Portfolio/Portfolio';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MasterLayout from './Component/MasterPage/MasterLayout';
import NotFound from './Component/NotFound/NotFound';
import Category from './Component/Category/Category';
import Mobile from './Component/Mobile/Mobile';
import Laptop from './Component/Laptop/Laptop';
function App() {
 const router= createBrowserRouter([
    {path:'', element:<MasterLayout/>, errorElement:<NotFound/> ,children:[
      {path:'', element:<Parent/>},
      {path:'home', element:<Home/>},
      {path:'blog', element:<Blog/>},
      {path:'about', element:<About/>},
      {path:'category', element:<Category/> , children:[
        {path:'', element:<Mobile/>},
        {path:'mobile', element:<Mobile/>},
        {path:'laptop', element:<Laptop/>},
      ]}
      // {path:'*', element:<NotFound/>}
    ]}
  ])
  return (
    <>
    <div >
      
  <RouterProvider router={router}></RouterProvider>
  
  </div>
  </>
  );
}


export default App;
