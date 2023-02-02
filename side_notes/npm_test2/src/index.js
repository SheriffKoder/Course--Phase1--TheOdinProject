
//import lodash
import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

import printMe from './print.js'; //output-management



//import from myName.js
import User, {myName as importedName, myName2 as importedName2} from './myName';
import {myName, myName2} from './myName'; //non default in curly brackets
//import imports the default
//can change the name of default and use in code with this new name
//but for non default, name as newName


function component() {
  
  const element = document.createElement('div');

  // - Lodash, currently included via a script, is required for this line to work
  // + Lodash, now imported by this script

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add("hello");     //add external style

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  //output-management
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);



    return element;
}
  
  document.body.appendChild(component());


  function component2() {
    const element2 = document.createElement('div');    
    //imported function from myName.js
    element2.textContent = importedName('myNameJS');

    return element2;
  }

  document.body.appendChild(component2());