// Blogs.js
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import SubBlog from '../layouts/SubBlog';

const blogsData = [
  {
    id: 1,
    title: '简介',
    markdown: raw('../data/blogs/start_blog.md'),
    tag: 'all',
  },
  {
    id: 2,
    title: 'Blog 2',
    markdown: 'Content of Blog 2',
    tag: 'food',
  },
  {
    id: 3,
    title: 'Blog 3',
    markdown: 'Content of Blog 3',
    tag: 'travel',
  },
  // Add more blog data as needed
];

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
              background: 'linear-gradient(to bottom,  rgba(255, 255, 255, 0)), white',
            }}
          >
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
