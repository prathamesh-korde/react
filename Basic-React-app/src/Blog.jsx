import './Blog.css';
import Prices from "./Prices";

function Blog({Title="XYZ company",Product="dell",idx=0}) {
   let oldPrice = ["78,000","80,000","60,000","65,000"];
  let NewPrice = ["70,000","72,000","55,000","60,000"];
  let description = [
    ["16/512", "Rxt3050"] 
    ,["16/1Tb", "Rxt3060" ]
    , ["8/512" ,"Rxt5060" ]
    , ["8/512" ,"PowerBook"]
  ]
  return (
    <div className='blog-container'>
      <p>{Product}</p>
      <p>{Title}</p>
      <p>{description[idx][0]}</p>
       <p>{description[idx][1]}</p>
      <Prices oldPrice={oldPrice[idx]} NewPrice = {NewPrice[idx]}/>
    </div>
  );
}

export default Blog;