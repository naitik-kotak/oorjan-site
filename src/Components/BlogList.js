import React from 'react';
import BlogDetail from './BlogDetail';

function BlogList({ blogs }) {
  if (blogs !== []) {
    const renderedList = blogs.map((blog) => {
      return <BlogDetail key={blog.id} blog={blog} />;
    });

    return <div className='ui segment'>{renderedList}</div>;
  }
}

export default BlogList;
