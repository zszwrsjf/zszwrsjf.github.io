// Blogs.js
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import ReactMarkdown from 'react-markdown';
import SubBlog from '../layouts/SubBlog';
import blogsData from '../data/blogs/BlogMaps';

const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const location = useLocation();
  const headingStyle = {
    fontSize: '32px',
  };
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
      <div>
        <h1 style={headingStyle}>Blogs</h1>
        {filteredBlogs.map((blog) => (
          <div
            className="post"
            key={blog.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '300px',
              overflow: 'hidden',
            }}
          >
            <div
              className="mask"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), white)',
              }}
            >
              <a href={`/blogs/${blog.id}`} style={{ display: 'block', height: '100%', width: '100%' }}>
                <span style={{
                  position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%)',
                }}
                >查看全文
                </span>
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
