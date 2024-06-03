// Blogs.js
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import ReactMarkdown from 'react-markdown';
import SubBlog from '../layouts/SubBlog';
import blogsData from '../data/blogs/BlogMaps';

const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const location = useLocation();
  const LinkRenderer = ({ ...children }) => <Link {...children} />;

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    if (queryParams.tag) {
      const filtered = blogsData.filter((blog) => (blog.tag === queryParams.tag || blog.tag === 'all'));
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogsData);
    }
  }, [location.search]);

  return (
    <SubBlog title="Blogs">
      <div className="blog-container">
        <h1 className="blog-heading">Blogs</h1>
        <Pagination count={10} variant="outlined" shape="rounded" />
        {filteredBlogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <div className="mask">
              <a href={`/blogs/${blog.id}`}>
                <span>查看全文</span>
              </a>
            </div>
            <div>
              <h2><a href={`/blogs/${blog.id}`}>{blog.title}</a></h2>
            </div>
            <ReactMarkdown
              renderers={{
                Link: LinkRenderer,
              }}
            >
              {blog.markdown}
            </ReactMarkdown>

          </div>
        ))}
      </div>
    </SubBlog>
  );
};

export default Blogs;
