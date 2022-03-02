import React, {Component} from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


function Home() { 
  return <h2>ini halaman home</h2>
}
function listView() { 
  return <h2>ini halaman Users</h2>
}



class App extends Component { 
  render() { 
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/users'>User</Link> </li>
          </nav>

          <main>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={listView} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
