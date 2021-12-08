import React from 'react'
import  './body_style.css';
import Body_form from './body_form';
import Title_desc from './title_desc';
import Navbar from '../header/navbar/navbar';

function Body () {
  return (
    <div className="body">
      <div className="container">
        <div className="align">
          <Title_desc />
          <Body_form />
        </div>
      </div>
    </div>

  );
}

export default Body;
