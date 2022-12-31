import React, {useEffect, useState} from 'react'
import Header from './components/header.js'
import MainContent from './components/maincontent.js';
import './assets/css/main.css';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState("");
  
  const HandleSearch = e => {
    e.preventDefault();
    console.log(search)
    FetchAnime(search)
  }

  const FetchAnime = async (query) =>{
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=5`).then(res => res.json());

    console.log(temp.data);

    SetAnimeList(temp.data);
  }
  return (
    <div>
      <Header />

      <MainContent 
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        animeList={animeList}
      />
        
    </div>
  );
}

export default App;
