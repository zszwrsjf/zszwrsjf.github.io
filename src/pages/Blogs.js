import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import ReactMarkdown from 'react-markdown';
import SubBlog from '../layouts/SubBlog';
import blogsData from '../data/blogs/BlogMaps';
import CustomPagination from '../components/Blog/Pagination';

const Blogs = () => {
  const [paginatedBlogs, setPaginatedBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const LinkRenderer = ({ ...children }) => <Link {...children} />;

  const pageCount = 10;

  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    if (queryParams.tag) {
      const filtered = blogsData.filter((blog) => (blog.tag === queryParams.tag || blog.tag === 'all'));
      setAllBlogs(filtered);
    } else {
      setAllBlogs(blogsData);
    }
  }, [location.search]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageCount;
    const endIndex = startIndex + pageCount;
    setPaginatedBlogs(allBlogs.slice(startIndex, endIndex));
  }, [currentPage, allBlogs]);

  const totalPages = Math.ceil(allBlogs.length / pageCount);

  return (
    <SubBlog title="Blogs">
      <div className="blog-container">
        <h1 className="blog-heading">Blogs</h1>
        <CustomPagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
        />
        {paginatedBlogs.map((blog) => (
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
