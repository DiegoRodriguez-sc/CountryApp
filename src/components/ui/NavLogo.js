import React, { useEffect, useState } from 'react'; 

const NavLogo = () => {

 const [mode, setMode] = useState(false);
 const handleChangeMode = ()=>{
      setMode(!mode);
 }
 useEffect(() => {
    
    const theme = localStorage.getItem("theme");
     if(theme){
        if(theme==="light"){
           setMode(true)
        }else{
           setMode(false)
        }
      }else{
         localStorage.setItem("theme",mode?"light":"dark");   
      }
    
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 useEffect(() => {
      if(mode){
         localStorage.setItem("theme","light");
       document.body.classList.add('light');
     }else{
        localStorage.setItem("theme","dark");
      document.body.classList.remove('light');
     }
  }, [mode]);

 return (
  <div className="navlogo__header">
     <h1>Where in the World ?</h1>
     <div className="navlogo__btn" onClick={handleChangeMode}>{mode? <div><i className="fas fa-moon"></i> Dark Mode</div>: <div><i className="far fa-sun"></i> Light Mode</div>}</div>
  </div>
 )
}

export default NavLogo
