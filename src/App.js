import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { HomeView } from './components/homeView';
import { ChartsView } from './components/chartsView';
import { DataView } from './components/dataView';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <div className="view-type">
              <Link className="view-type-item" to="/"> Home</Link>
              <Link className="view-type-item" to="/chart"> Charts View</Link>
              <Link className="view-type-item" to="/data"> Table View</Link>
            </div>
          </div>
          <div>
            <Route path="/" exact component={HomeView} />
            <Route path="/data" exact component={DataView} />
            <Route path="/chart" exact component={ChartsView} />
            
          </div>
        </BrowserRouter>

        
      </div>
    );
  }
}

export default App;
