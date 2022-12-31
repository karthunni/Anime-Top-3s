import React from 'react'


function AnimeCard({anime}){
    console.log(anime.images.jpg.image_url);
    return(
        <div>
            <h3>{anime.title}</h3>
            <button class="anime-card" type="submit">
            <img src={anime.images.jpg.image_url} alt={anime.mal_id}/>
            </button>
        </div>
        
    )
}
export default AnimeCard