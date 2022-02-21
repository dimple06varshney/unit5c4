import { Link, useParams } from "react-router-dom"
import { Navbar } from "./Navbar";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Search.css";
export const Search = () =>{
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([])
let a = searchParams.get("q") 

useEffect(()=>{
  fetch(`https://fast-reef-22226.herokuapp.com/data?q=${a}`).then((res) => res.json())
  .then((json) => setData(json));
},[])
console.log("data: ",data);
  const sortDataA = () => {
     var sortData= data.sort((a,b)=> (a.title > b.title? 1: -1))
      setData(sortData)
  }

  const sortDataB = () => {
    var sortD= data.sort((a,b)=> (a.title < b.title? 1: -1))
     setData(sortD)
 }
    return (
        <div>
            <Navbar/>
            <h1>Wlcome to Search</h1>
            <button id="sort-alphabetically" onClick={sortDataA}>Sort A-Z</button>
            <button id="sort-alphabetically-desc" onClick={sortDataB}>Sort Z-A</button>

            <div id="search-result">
            {data.map((e,i)=>{
                return (
                   <div className="result" key ={i} >
                       <p>{e.url}</p>
                       <Link to={`//page/${e.id}`}>{e.title}</Link>
                       <p>{e.author}</p>
                       <p>{e.description}</p>
                       <p>Creation Date: {e.creation_date}</p>
                       <p>Explicit: {e.explicit ? "Yes": "No"}</p>
                       <p>Quality % {e.quality}</p>
                   </div>
                )
            })}
            </div>
        </div>
    )
}