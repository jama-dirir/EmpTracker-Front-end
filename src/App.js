import { Button } from 'antd';
import './index.css'
import Home  from './pages/Home';
import Login from './pages/Login';
import Register  from './pages/Register';
import Profile  from './pages/Profile';
import {Routes,Route } from 'react-router-dom';
import ProtectedPage from './components/ProtectedPage';
import Spinner from './components/Spinner';
import { useSelector } from 'react-redux';
function App() {
const {loading}=useSelector((state)=>state.loaders)
  return (
    <div>
     {loading && <Spinner/>}
    <Routes>
      <Route path='/' element={
      <ProtectedPage>
        <Home/>
      </ProtectedPage>
      }></Route>
       <Route path='/profile' element={
      <ProtectedPage>
        <Profile/>
      </ProtectedPage>
      }></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
