import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import Post from './Post.js';
import Main from './Main.js';

function App() {
  return (
    <div>
          <Route path="/" exact={true} component={Main}/>
          <Route path="/Post" component={Post}/>
    </div>
  );
}

export default App;
