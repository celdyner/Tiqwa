
import './App.css';
import Navbar from './common/Navbar/Navbar';
import Home from './components/pages/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import {BrowserRouter as Router,Switch,Route}  from "react-router-dom";

function App() {
  return (
    <div className="container">
      <>
      <Router>

      <Navbar />

    <Switch>

  <Route path='/' exact component={Home}></Route>
  <Route path='/about' exact component={About}></Route>

  <Route path='/contact' exact component={Contact}></Route>
    
    </Switch>
      
      </Router>
    

      </>
      
    
    </div>
  );
}

export default App;
