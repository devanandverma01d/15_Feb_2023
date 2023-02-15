//1. Import area
// import {} from someLocation/someLibrary
// import  from someLocation/someLibrary
import React from 'react';
import ReactDOM from 'react-dom/client';
import A from './components/A';



const nm = "My name is: Devanand";
const sn = "My surname is: Verma";
const addr = "<  COMP-A  >----------> I'M PASSING FROM EACH ALPHABETS"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name={nm} surname={sn}>{addr}</A>);
