import React, { useEffect, useState } from 'react';
import NavBar from './Components/Layout/NavBar';
import Searchbar from './Components/Layout/Searchbar';
import BlogList from './Components/BlogList';
import axios from 'axios';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBlogs = async (termToSearch = 'solar') => {
      const response = await axios.get(
        `https://www.oorjan.com/blog/wp-json/wp/v2/search?search=%27${termToSearch}%27&per_page=5`
      );

      setBlogs(response.data);
    };

    fetchBlogs();
  }, [searchTerm]);

  const onTermSearch = (term) => {
    setSearchTerm(term);
    
  };

  return (
    <div className='ui container'>
      <NavBar />
      <br />
      <Searchbar onTermSearch={onTermSearch} />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
