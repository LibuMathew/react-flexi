import React, { Component } from 'react';
import Flexi from './flexi'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  onFlexiSubmit = (config) => {
    alert(JSON.stringify(config));
  }

  render() {
    const flexiConfig = {
      items: [
        {
          "name": "personname",
          "label": "Person's Name",
          "type": "TextField"
        },
        {
          "name": "states",
          "label": "Person's state",
          "type": "DropDown",
          "selected": "Maharashtra",
          "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
          ]
        }
      ]
    };
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand">DyForm</a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <Flexi onSubmit={(config) => this.onFlexiSubmit(config)} config={flexiConfig} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
