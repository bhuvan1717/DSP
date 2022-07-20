import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Approval from './pages/Approval/Approval';
import Mainbody from './layouts/body/Mainbody';
import Groups from "./pages/Groups/Groups";
import Projects from "./pages/Projects/Projects";
function App() {
  return (
    <>

      <Routes>


        <Route path='' element={< Login />} />



        <Route path='main' element={< Mainbody />} >
          <Route index element={<Approval />} />
          <Route path='approval' element={<Approval />} />
          <Route path='projects' element={< Projects />} />
          <Route path='groups' element={< Groups />} />
        </Route>


      </Routes>








    </>
  );
}

export default App;
