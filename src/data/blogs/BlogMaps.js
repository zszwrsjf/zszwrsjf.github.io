import raw from 'raw.macro';

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

export default blogsData;
