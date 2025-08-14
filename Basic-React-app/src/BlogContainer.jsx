import Blog from "./blog";

function BlogContainer() {
  //let options = [<li>"highh-quality"</li>, <li>"affordable"</li>, <li>"durable"</li>];
  let options = ["high-quality", "affordable", "durable"];
   //let list = options.map((feature)=><li>{feature}</li>);
  let option2 = {a:"fast", b:"responsive", c:"easy-to-use"};
 

  return (
    <div>
        <Blog title="phone" price={15000} features={options.map((feature)=>
          <li>{feature}</li>)}
          features2={option2}
          />
        <Blog title="laptop" price={50000}/>
        <Blog title="tab" />     
     </div>
  );
}

export default BlogContainer;