import React from 'react';

function BlogDetail({ blog }) {
  const style = {
    textDecoration: 'none',
    color: '#000',
  };
  return (
    <div className='ui center aligned segment'>
      <a style={style} href={blog.url} target='_blank' rel='noreferrer'>
        {blog.title}
      </a>
    </div>
  );
}

export default BlogDetail;
