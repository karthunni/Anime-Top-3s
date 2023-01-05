import React from 'react'

function AnimeCard({anime}){
    
    return(
        <figure>
            <img src={anime.images.jpg.image_url} alt={anime.mal_id}/>
            <figcaption>{anime.title}</figcaption>
        </figure>
        
    )
}
export default AnimeCard