

import { Link } from "react-router-dom";
import React, { Component, useState, setState, useEffect } from 'react';


//when clicking on the item in page2, will get here

//match: 
//the id that is passed from page2 to itemdetail
//can be accessed from match internal properties
const ItemDetail = ({match}) => {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`link=${match.params.id}`);

    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  }



  return (
      <div>
          <h1> {item.name} </h1>
          <img src={item.images.transparent}></img>

      </div>
  );
};

export default ItemDetail;


//link here takes me back to the "/" path