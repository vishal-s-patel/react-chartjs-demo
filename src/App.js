import React from 'react';
import VehicleForm from './components/VehicleForm';
import ChartComponent from './components/ChartComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={VehicleForm} />
        <Route path="/chart" component={ChartComponent} />
      </Router>
    </div>
  );
}

export default App;
