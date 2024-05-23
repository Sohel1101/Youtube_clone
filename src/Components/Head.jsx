import React, { useEffect } from 'react';
import { useState } from 'react';
import './Head.css'; // Import the CSS file
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../util/appSlice';

function Head() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const[showSuggestion, setShowSuggestion]=useState(false)
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(toggleSidebar())
  }

  const getSearchSuggestions = async (event) => {
    const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchTerm);
    const json = await data.json();
    console.log(json[1])
    setSearchSuggestion(json[1])

  }

  useEffect(() => {
    // Make an api call after evert key press
    // but if difference bet two api calls is <200ms
    // decline api call
    //  # debounsing
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    }

  }, [searchTerm])

  return (
    <header className="header">
      <div className="w-10 hover:cursor-pointer">
        {/* Your logo image or text goes here */}
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png"
          alt="Sidebar logo"
          onClick={handleSidebar}
        />
      </div>
      <div className="logo">
        {/* Your logo image or text goes here */}
        <a href="">
          <img
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube Clone"
          />
        </a>
      </div>
      <div className="searchBar flex-col">
        {/* Search bar component */}
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Search"
            className="input"
            onChange={(event) => setSearchTerm(event.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
          />
          <button className="button">Search</button>
        </form>

        <div className='bg-white fixed mt-10 w-[400px] -ml-20 z-10'>
          <ul>
            {showSuggestion &&
             searchSuggestion. map((data)=>
            {
              return(
                <li className='py-2 ml-2 py-2 hover:bg-gray-300 hover:' key={data}><i className="fa-solid fa-magnifying-glass"></i><span> {data} </span> </li>
              )
            })
            }
           

          </ul>
        </div>
      </div>
      <div className="top-buttons">
        <button className="top-button">Sign in</button>
        <button className="top-button">Sign up</button>
        <button className="top-button">More options</button>
      </div>
    </header>
  );
}

export default Head;
