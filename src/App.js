import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./views/home/home";
import Unknown from "./views/404/notfound";
import Navbar from './views/header/header';
import Sidebar from './views/sidebar/sidebar';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Sidebar/> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Unknown />} />     
      </Routes>
      
    </div>
  );
}

export default App;
