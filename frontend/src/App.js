import './App.css';
/**
 *! importamos componentes del curd */
import CompShowBlogs from './blog/ShowBlog.js'; 
import CompCreateBlog from './blog/CreateBlog.js';
import CompEditBlog from './blog/EditBlog.js';
import SearchComponent from './blog/login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 *! importamos componentes de la pagina */
import Principal from './principal/principal.js';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
           <Route path='/usuario' element={< CompShowBlogs /> }/>
          <Route path='/create' element={<CompCreateBlog /> }/>
          <Route path='/edit/:id' element={< CompEditBlog /> }/>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
