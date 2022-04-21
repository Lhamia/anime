import { Link, generatePath } from 'react-router-dom'

export default function Card({ anime }) {
  return (
    <Link to={generatePath('/animes/:id', { id: anime.id })}>
      <div>
        {anime.attributes &&
        <figure key={anime.id}>

          <h2>{anime.attributes.slug}</h2>
          <h4>{anime.attributes.ageRatingGuide}</h4>
          <img src={anime.attributes.posterImage.medium}/>

        </figure>}
      </div>
    </Link>
  )
}
