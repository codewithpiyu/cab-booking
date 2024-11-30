import React, { useEffect } from 'react'
import {useState} from 'react'
import {BiSolidMoon,BiSolidSun} from "react-icons/bi";


const DarkMode = () => {
  const[theme,setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem('theme')
     ? localStorage.getItem('theme')
     : 'light'


  );
 
  const element = 
  typeof document !== "undefined" ? document.
  documentElement : null;

  useEffect(() =>{
   localStorage.setItem("theme", theme);
   if(theme === "dark"){
    element.classList.add("dark");
   }else{
    element.classList.add("light");
    element.classList.remove("dark");
   }

});
    
  return (
    <div>
    { theme === "dark" ? (
      <BiSolidSun onClick = {() => setTheme("light")} className = "text-2xl"/>

    ) :(
        <BiSolidMoon onClick= {() =>{
          setTheme("dark")
        }} className = "text-2xl"/>
    )}
    </div>
  )
}

export default DarkMode;

