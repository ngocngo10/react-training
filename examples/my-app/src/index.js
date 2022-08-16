import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const x = 11;
let text = 'Goodbye';
if (x < 10) {
  text = "Hello";
}

const formatName = (user) => user.firstName + ' ' + user.lastName;
const user = {
  firstName: 'hhhh',
  lastName: 'dddd'
};

const myElement = (
  <div>
    <h1 className='heading'>{text}</h1>
    <h3>{(x) < 10 ? "Hello" : "Goodbye"}</h3>
    <h1>
      Hello, {formatName(user)} !
    </h1>
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
    </ul>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
