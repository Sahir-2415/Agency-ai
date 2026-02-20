import React, { useEffect } from 'react'
import assets from '../assets/assets'
const ThemeToggleBtn = ({theme,setTheme}) => {

    useEffect(()=>{
        const prefersDarkMode=window.matchMedia('(prefers-color-scheme:dark)').matches;
        setTheme(theme || (prefersDarkMode?'dark':'light'))
    })
    // according to the theme of the windows , the theme of the page will be defined

    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme',theme);
    },[theme])
    // when theme is toggled , change the html property of the navbar

  return (
    <button>{theme==='dark'?(<img src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={()=>setTheme('light')}/>):(<img src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={()=>setTheme('dark')}/>)}</button>
  )
}

export default ThemeToggleBtn;
