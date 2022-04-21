import"./CardInfo.css";

export default function Cardinfo({anime}){
    return(
 
 <div>
     {anime.attributes &&
<figure key={anime.id}>
            <h2> {anime.attributes.slug}</h2>
            <p>{anime.attributes.description}</p>
            <img src={anime.attributes.posterImage.original}/>
           
            
            </figure>} </div>
       
    )

}