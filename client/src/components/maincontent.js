import React from 'react'
import AnimeCard from './AnimeCard'

function MainContent(props){
    return(
        <div>
        <form onSubmit={props.HandleSearch} >
                    <input type="search" class="search"
                    placeholder = "search for an anime..." 
                    required
                    onChange={e=>props.SetSearch(e.target.value)}>
                    </input>
        </form>
        
        <div class="anime-cards">
        {props.animeList.map(anime => (
            <button class ="anime-card" type="submit" onClick = {e=>props.SetTop5(anime)} key = {anime.mal_id}>
            
            <AnimeCard
                anime={anime}
            />
            </button>
        ))}
        </div>
        </div>
    )
}

export default MainContent;