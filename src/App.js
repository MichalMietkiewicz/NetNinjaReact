import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return(
    <Router>
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create></Create>
          </Route>
          <Route path='/blogs/:id'>
              <BlogDetails/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

// function App() {
//   const title = 'Welcome to the new blog'
//   const like = 50;
//   // const person = { name: 'yoshi', age: 30};
//   const link = "http://www.google.com";
//   return (
//     <div className="App">
//       <div className='content'>
//         <h1>{title}</h1>
//         <p>Liked { like } times</p>

//         <p>{ 10 }</p>
//         <p> { "hello, ninjas"} </p>
//         <p>{[1,2,3,4,5]}</p>
//         <p>{ Math.random() * 10}</p>
//         <a href={link}>google</a>
//       </div>
//     </div>
//   );
// }

export default App;
