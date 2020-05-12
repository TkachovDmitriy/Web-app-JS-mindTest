import React from "react";
const style = {
  paddingTop: "100px",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16pt'
}
function MainContainer() {
  return (
    <div style={style}>
      <h1>Hello, bro </h1>
      <div class="container">
        <div class="row">
          <div class="col-12 col-offset-6">
            Are you want to try your skills, look at your intellection and just check yourself? We're prapare special for you quizies, questions, games.
            Logic, beauty, music and a lot of different topics, where you can check your thinking and get special PRIZES (but just not a big &#128521;)
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
