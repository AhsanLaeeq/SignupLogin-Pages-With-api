import {HashRouter,Route,Routes} from 'react-router-dom';
import Layout from './Components/Layout/Layout';

import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Dashboard from './Dashborad/Dashboard';
import Contact from './Components/Contact/Contact';
import Privacy from './Components/Privacy/Privacy';



function App () {
 return (


 <>

 <HashRouter>

  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='signup'element={<Signup/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path='privacy' element={<Privacy/>}/>


    </Route>
  </Routes>
 </HashRouter>
     
    </>
  



 )



   
}

export default App
