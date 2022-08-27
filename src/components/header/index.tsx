import React,{useState} from "react";
import './index.less';
import muxi from  '/src/images/muxi-logo.png' 

const Header:React.FC = () => {
  const [dropdown,setDropdown]=useState(false);

  function forMore(){
    if(dropdown==false){
      setDropdown(true);
    }else{
      setDropdown(false);
    }
  }

  return (
  <div>
   <div className='header'>
      <div className='muxi'>
        <img src={muxi} alt="muxi" className='logo' ></img>
        <div className='text'>木 犀</div>
      </div>
      <div className='avatar' onClick={forMore}>
          
      </div>
   </div>
   {dropdown && <div className="select">
      <div className="option mine">个人主页</div>
      <div className="division"></div>
      <div className="option">退出登录</div>
    </div>}
    {!dropdown && <div></div>}
  </div>
  )
};

export default Header;
