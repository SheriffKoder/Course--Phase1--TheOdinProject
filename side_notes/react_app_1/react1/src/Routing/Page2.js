

import { Link } from "react-router-dom";
import React, { Component, useState, setState, useEffect } from 'react';


//match: 
//the id that is passed from page2 to itemdetail
//can be accessed from match internal properties
const Page2 = () => {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
    
    const items = await data.json();
    //console.log(items);
    //setItems(items.items);
  }


  return (
      <div>
        <h1>Hello from Profile 2 Page</h1>
        {//items.map(item =>(
          //<h1 key={item.itemid}>
          //</Link to{`Page2/${{item.itemid}`}>{item.name}</Link>
          //</h1>
        //))}
        }
      </div>
  );
};

export default Page2;


//link here takes me back to the "/" path