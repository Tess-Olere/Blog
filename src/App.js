import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import WelcomePage from './pages/WelcomePage';
import CreateStory from './pages/CreateStory';
import Stories from './pages/Stories';

import MyStories from './pages/MyStories';
import EditStory from './pages/EditStory';
import Useauth from './hooks/Useauth';
import ReadMore from './pages/ReadMore';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<DashBoard />}/>
    <Route path='signup' element={<SignUp />}/>
    <Route path='login' element={<Login />}/>
     <Route element={<Useauth />}>  
    <Route path='welcome' element={<WelcomePage />}/>
    <Route path='create' element={<CreateStory />}/>
    <Route path='stories' element={<Stories />}/>      
    <Route path='mystories' element={<MyStories />}/>    
    <Route path='read/:blogId' element={<ReadMore />}/>    
    <Route path='edit/:blogId' element={<EditStory />}/> 
   </Route> 
   </Routes>
     
   

   </>
  );
}

export default App;
