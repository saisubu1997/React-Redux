import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import singleallreducers from './reducers/allreducersindex';
import App1 from './components/app1';

class App extends Component {  
  render() {
     const store = createStore(singleallreducers); 
    return (      
      <div >                  
      <Provider store={store}>
      <App1 />
      </Provider>              
      </div> 
     
    );
  }
}

export default App;
