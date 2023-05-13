import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import Post from './Post.js';
import Main from './Main.js';

function App() {
  return (
    <div>
          <Route path="/" component={Main}/>
          <Route path="/Post" component={Post}/>
    </div>
    // <div id="container">
    //   <div id="nav">
    //     <div></div>
    //     <p id="owner-text">000의 익명 메시지</p>
    //     <img src="./img/circle.png" id="circle"/>
    //   </div>
    //   <div id="post-add-container">
    //     <div id="post-container">
    //         <img class="post" src="./img/post1.png"/>
    //         <img class="post" src="./img/post2.png"/>
    //         <img class="post" src="./img/post3.png"/>
    //         <img class="post" src="./img/post4.png"/>
    //         <img class="post" src="./img/post5.png"/>
    //         <img class="post" src="./img/post6.png"/>
    //         <img class="post" src="./img/post1.png"/>
    //         <img class="post" src="./img/post2.png"/>
    //         <img class="post" src="./img/post3.png"/>
    //         <img class="post" src="./img/post4.png"/>
    //         <img class="post" src="./img/post5.png"/>
    //         <img class="post" src="./img/post6.png"/>
    //         <img class="post" src="./img/post1.png"/>
    //         <img class="post" src="./img/post2.png"/>
    //         <img class="post" src="./img/post3.png"/>
    //         <img class="post" src="./img/post4.png"/>
    //         <img class="post" src="./img/post5.png"/>
    //         <img class="post" src="./img/post6.png"/>
    //         <img class="post" src="./img/post5.png"/>
    //         <img class="post" src="./img/post6.png"/>
    //       </div>
    //       <img src="./img/add.png" id="add-button"/>
    //   </div>
    // </div>
  );
}

export default App;
