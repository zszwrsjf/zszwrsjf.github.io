// Blogs.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import SubBlog from '../layouts/SubBlog';

const blogsData = [
  {
    id: 1,
    title: 'Blog 1',
    content: 'Content of Blog 1',
    tag: 'travel',
  },
  {
    id: 2,
    title: 'Blog 2',
    content: 'Content of Blog 2',
    tag: 'food',
  },
  {
    id: 3,
    title: 'Blog 3',
    content: 'Content of Blog 3',
    tag: 'travel',
  },
  // Add more blog data as needed
];

const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    if (queryParams.tag) {
      const filtered = blogsData.filter((blog) => blog.tag === queryParams.tag);
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogsData);
    }
  }, [location.search]);

  return (
    <SubBlog title="Blogs">
      <div>
        <h1>Blogs</h1>
        <h2 data-testid="heading"><Link to="/blogs">Projects</Link></h2>
        {filteredBlogs.map((blog) => (
          <div className="post" key={blog.id}>
            <header>
              <div className="title">
                <h2><a href={`/blogs/${blog.id}`}>{blog.title}</a></h2>
              </div>
            </header>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </SubBlog>
  );
};

export default Blogs;
