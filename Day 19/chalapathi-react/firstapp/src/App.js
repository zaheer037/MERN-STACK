//import image from './front-left-side-47.webp';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <p>Hi I am goli</p>
    </div>
  );
}*/


/*class App extends React.Component{
  render(){
    return(
      <div>
        <First />
        <Second />
      </div>
    );
  }
}
class First extends React.Component{
  render(){
    return(
      <div>
        <h1>MongoDB</h1>
      </div>
    ); 
  }
}
class Second extends React.Component{
  render(){
    return (
      <div>
        <h2>MERN STACK</h2>
        <p>This websire contains great css</p>
      </div>
    )
  }
}
export default App;*/

import React from 'react';
import image from './img.jfif';
import video from './video.mp4';
import audio from './audio.mp3';
class Fruits extends React.Component{
  render(){
    return(
      <div className='top-container'>
        <Apple />
        <Banana />
        <Pineapple/>
        <Grapes/>
      </div>
    )
  }
}

class Apple extends React.Component{
  render(){
    return(
      <div>
        <img className='image' src={image}/>
      </div>
    )
  }
}
class Banana extends React.Component{
  render(){
    return(
      <div>
        <video className='video' src={video} controls />
      </div>
    )
  }
}
class Pineapple extends React.Component{
  render(){
    return(
      <div>
        <audio className='audio' src={audio} controls/>
      </div>
    )
  }
}
class Grapes extends React.Component{
  render(){
    return(
      <div>
        <form>
          <h1>Login form</h1>
          <input placeholder='username'/><br/>
          <input placeholder='Password'/><br/>
          <input type='submit'/>

        </form>
      </div>
    )
  }
}

export default Fruits