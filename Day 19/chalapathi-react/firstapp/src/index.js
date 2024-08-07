import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fruits from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <Fruits />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
/*const myElement=(
  <ul>
    <li>Appples</li>
    <li>Bananas</li>
    <li>Appples</li>
  </ul>
);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/

/*const myElement=<h1 class="myclass">Hi I am Zaheer</h1>
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/
/*
const x=150;
const myElement=<h1 className="color">{(x)<100 ? "Google":"Yahoo"}</h1>;
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/
/*
const x=50;
let text="Google engine";
if(x<100){
  text="Yahoo engine";
}

const myElement=<h1 className='myclass'>{text}</h1>;
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/
/*function Mango(){
  return <h1>Welcome to mango city</h1>;
}
const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render(<Mango/>);
*/
/*
const myElement=(
  <div className='top'>
    <table className='mytable' >
    <tr className='header'>
      <th>id</th>
      <th>name</th>
      <th>age</th>
    </tr>
    <tr>
      <th>1</th>
      <th>Zaheer</th>
      <th>20</th>
    </tr>
    <tr className='alter'>
      <th>2</th>
      <th>MANGO</th>
      <th>20</th>
    </tr>
    <tr>
      <th>3</th>
      <th>Pineapple</th>
      <th>20</th>
    </tr>
  </table>
  </div>
)
const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render(myElement);
*/
