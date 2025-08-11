import './Blog.css';
function Blog({title,price=2000, features, features2={a:"responsive", b:"cost effective", c:"easy-to-use"}}) {
  return (
    <div className='blog-container'>
      <h1>{title}</h1>
      <p>Price:{price/2}</p>
      <p>features : {features}</p>
      <p>features2 :{features2.a}</p>
    </div>
  );
}

export default Blog;