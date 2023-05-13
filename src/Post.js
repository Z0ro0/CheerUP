import './Post.css';


function App() {
  return (
    <div id="container1">

      <div id="post-container">
        <div id="post-color">
          <img class="post-color-circle" src="./img/circle1.png"/>
          <img class="post-color-circle" src="./img/circle2.png"/>
          <img class="post-color-circle" src="./img/circle3.png"/>
          <img class="post-color-circle" src="./img/circle4.png"/>
          <img class="post-color-circle" src="./img/circle5.png"/>
          <img class="post-color-circle" src="./img/circle6.png"/>
        </div>

        <div id="Message-board">
          <p id="Post-Message">김치볶음밥 먹구 싶당 ㅎㅎ</p>
          <img class="post-Message-board" src="./img/board.png"/>
        </div>

        <div id="Post-Button">
          <p id="Post-Button_text">올리기</p>
          <img class="post-button-img"src="./img/PostButton.png"/>
        </div>
      </div>
      

    </div>
  );
}

export default App;
