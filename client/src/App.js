import React, {useState} from 'react'
import Header from './components/header.js'
import MainContent from './components/maincontent.js';
import './assets/css/main.css';
import image from './components/formatweb.png'

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState("");
  const [top5, SetTop5]= useState([]);
  
  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search)
  }

  const FetchAnime = async (query) =>{
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=5`).then(res => res.json());


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
        top5 = {top5}
        SetTop5 = {SetTop5}
      />
      
   
      <img class= "main-image"src ={image} alt="poop"/>

        
    </div>
  );
}

export default App;
