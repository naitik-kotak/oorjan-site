import React, { useState } from 'react';
import NavBar from './Components/Layout/NavBar';
import Searchbar from './Components/Layout/Searchbar';
import BlogList from './Components/BlogList';
import Loading from './Components/Layout/Loading';
import TryAgain from './Components/Layout/TryAgain';
import axios from 'axios';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tryAgain, setTryAgain] = useState(false);

  const fetchBlogs = async (termToSearch = 'solar') => {
    const response = await axios.get(
      `https://www.oorjan.com/blog/wp-json/wp/v2/search?search=%27${termToSearch}%27&per_page=5`
    );

    setLoading(false);
    if (response.data.length === 0) {
      setTryAgain(true);
    } else {
      setBlogs(response.data);
    }
  };

  const onTermSearch = (term) => {
    setTryAgain(false);
    setLoading(true);
    setSearchTerm(term);
    fetchBlogs(term);
  };

  return (
    <div className='ui container'>
      <div>
        <NavBar />
        <br />
        <Searchbar onTermSearch={onTermSearch} />
      </div>

      {tryAgain === true ? (
        <TryAgain searchTerm={searchTerm} />
      ) : (
        <div>{loading === true ? <Loading /> : <BlogList blogs={blogs} />}</div>
      )}
    </div>
  );
}

export default App;
