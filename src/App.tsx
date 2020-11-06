import React from 'react'; 
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'; 

import Home from './pages/home';

import Footer from './components/footer';

import './App.css'; 
import './main.css';

const App = (): React.ReactElement => {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
