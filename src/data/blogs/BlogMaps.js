import raw from 'raw.macro';

const blogsData = [
  {
    id: 1,
    title: '简介',
    markdown: raw('./start_blog.md'),
    tag: 'all',
  },
  {
    id: 2,
    title: '第一次日本之行',
    markdown: raw('./first_japan_trip.md'),
    tag: 'travel',
  },
];

export default blogsData;
