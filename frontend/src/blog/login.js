import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const SearchComponent = ({ history }) => {
  const [blogs, setBlogs] = useState([]);
  const [searchValue1, setSearchValue1] = useState('');
  const [searchValue2, setSearchValue2] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlogs(res.data);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Evitar la recarga de la página
    const blog1 = blogs.find((blog) => blog.title === searchValue1);
    const blog2 = blogs.find((blog) => blog.content === searchValue2);

    if (blog1 && blog2) {
        navigate('/usuario');      
    } else {
      if (!blog1) {
        Swal.fire({
            icon: 'error',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
      }
      if (!blog2) {
        Swal.fire({
            icon: 'error',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: false
          
          })
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSearch}>
            <h2>Buscar en la Base de Datos</h2>
            <input
              type="text"
              placeholder="Valor 1"
              value={searchValue1}
              required
              onChange={(e) => setSearchValue1(e.target.value)}
            />
            <input
              type="text"
              placeholder="Valor 2"
              value={searchValue2}
              required
              onChange={(e) => setSearchValue2(e.target.value)}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
