import React from "react";
import './index.less';
import muxi from '/src/images/muxi-logo.png'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='muxi'>
          <img src={muxi} alt="muxi" className='logo' ></img>
          <div className='text'>木 犀</div>
        </div>
        <div className='avatar'>

        </div>
      </div>
    </div>
  )
};

export default Header;