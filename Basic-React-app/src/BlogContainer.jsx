import Blog from "./blog";


function BlogContainer() {
let styles = {
  display: "flex",
  flexwrap : "wrap",
  justifyContent: "space-around",
  alignItems: "center",
};

  return (
    <div style={styles}> 
       <Blog Title="victus 12th gen" Product="Hp" idx={0}/>
       <Blog  Title="gell G50" Product="dell" idx={1}/>
       <Blog  Title="assus Vivobook 13th gen" Product="VivoBook" idx={2}/>
       <Blog  Title="map-book pro" Product="Apple" idx={3}/>
     </div>
  );
}

export default BlogContainer;