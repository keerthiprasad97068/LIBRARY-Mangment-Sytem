
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Componets/LandingPage';
import AdminLogin from './Componets/AdminLogin';
import UserLogin from './Componets/UserLogin';
import AdminHome from './Componets/AdminHome';
import UserPortal from './Componets/UserPort';
import ErrorPage from './Componets/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/admin-login' element={<AdminLogin/>} />
          <Route path='/User-login' element={<UserLogin/>} />
          <Route path='/admin/*' element={<AdminHome/>}  />
          <Route path='/User/*' element={<UserPortal/>}/>
          <Route path='/*' element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
