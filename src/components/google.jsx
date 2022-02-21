import { useState } from "react"
import { Link } from "react-router-dom"
import "./Google.css"
export const Google = () =>{
   const[query, setQuery] = useState("")

   const handlePress = (e) =>{   
      if(e.key==="Enter")
       {
          window.location = `/search?q=${e.target.value}`
         console.log("query:", query);
       }
   }
   const handleSet = (e) =>{
    setQuery(...query, e.target.value) 
   }
    return (
        <div>
            <img  className="googleLogo" src="https://www.exchange4media.com/news-photo/94145-googlelogomain.jpg"/>
            <input type="text" name="search" id="search"  className="search-box" onInput={handleSet} onKeyPress={
                handlePress
            }/>
            <Link to={`/search?q=${query}`}><button>Search</button></Link>
        </div>
    )
}