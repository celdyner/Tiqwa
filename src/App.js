import logo from './logo.svg';
import './App.css';
import Navbar from './common/Navbar/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router,Switch,Route}  from "react-router-dom";

function App() {
  return (
    <div className="container">
      <>
      <Router>

      <Navbar />

    <Switch>

  <Route path='/' exact component={Home}></Route>
    
    </Switch>
      
      </Router>
    

      </>
      
    
    </div>
  );
}

export default App;
