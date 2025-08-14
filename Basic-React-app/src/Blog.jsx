import './Blog.css';
function Blog({title,price=2000, features, features2={a:"responsive", b:"cost effective", c:"easy-to-use"}}) {
  let styles ={backgroundColor: price>10000? "pink": ""};
  return (
    <div className='blog-container' style={styles}>
      <h1>{title}</h1>
      <p>Price:{price}</p>
      <p>features : {features}</p>
      <p>features2 :{features2.a}</p>
      {price>10000 && <p>"Discount of 5%</p>}
    </div>
  );
}

export default Blog;