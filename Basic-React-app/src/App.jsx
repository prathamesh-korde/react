
import './App.css'
import MyBtton from './MyBtton';
import BlogContainer from './BlogContainer';
import MsgBox from './MsgBox';

// function MyBttonSec(){
//   return(
//     <div>
//       <button>Click Me 2nd time!</button>
//     </div>
//   )
// }


function App() {

  return (
  <>
  <MsgBox userName="shradha" textColor="red" />
  <MsgBox userName="prathamesh" textColor="blue" />
  <MyBtton />
  <h1>Blockbuster Deals | Shop Now</h1>
  <BlogContainer />
  </> 
  );

  
}

export default App
