
import {Switch ,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Project from './components/Project';
import Navbar from './components/Navbar';
import Git from './components/Git';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/project' component={Project}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/git'   component={Git}/>
      </Switch>
    </div>
  );
}

export default App;
