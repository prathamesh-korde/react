
import './App.css'
import MyBtton from './MyBtton';
import BlogContainer from './BlogContainer';

function MyBttonSec(){
  return(
    <div>
      <button>Click Me 2nd time!</button>
    </div>
  )
}


function App() {

  return (
  <>
  <button>helow it's Prathamesh!</button>
  <MyBtton />
  <MyBttonSec/>
  <BlogContainer/>
  </> 
  );

  
}

export default App
