

import React from 'react';
import log from '../logo.png';

 function Header(){
  return(
  <div className='my-header'>
    <img className='my-image'  src= {log} alt='logo'/>
    <h1>Learning React</h1>
  </div>);
}

export default Header;