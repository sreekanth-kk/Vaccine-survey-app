import './App.css';
import Forms from './components/Forms';
import Show from './components/Show';
import Header from './components/Header';
import Blogs from "./components/Blogs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <br />
    <br />
    <Switch>
    <Route path="/admin">
      <Show />
      {/* <Login /> */}
      </Route>
    <Route path="/"><br /><br />
    <Forms />
    <Blogs />
    </Route>
      
    </Switch>
    
    </div>
    </Router>
  );
}

export default App;
