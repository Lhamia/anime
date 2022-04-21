import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../Components/Card'
import Cardinfo from '../../Components/CardInfo'

export default function AnimeDetails() {
  const urlAnime = 'https://kitsu.io/api/edge/anime/'
  const [anime, setAnime] = useState('')
  let { id } = useParams('id')

  useEffect(() => {
    const getAnimes = async () => {
      const res = await axios.get(`${urlAnime}/${id}`)
      console.log(res.data.data)
      setAnime(res.data.data)
    }
    getAnimes()
    console.log(AnimeDetails)
  }, [])
  return <Cardinfo anime={anime} />
}



