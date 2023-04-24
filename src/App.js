import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./views/home/home";
import Userpage from "./views/userpage/userpage";
import Unknown from "./views/404/unknown";
import Navbar from './views/header/header';
import Sidebar from './views/sidebar/sidebar';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Sidebar/> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Userpage />} />
          <Route path="*" element={<Unknown />} />     
      </Routes>
      
    </div>
  );
}

export default App;
