import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../Components/Card';
import './AnimesPage.css';
import { LoadingContext } from '../../Context/LoadingContext';
import { useContext } from 'react';
import Search from '../../Components/Search/Search';
import Pagination from '../../Components/Pagination/Pagination';

export default function AnimesPage() {
  const [animes, setAnimes] = useState([]);
  const {setIsLoading} = useContext(LoadingContext);

  
   

      const getAnimes = async (offset = 12, animeSlugFiter = "") =>{
        setIsLoading(true);
        const res = await axios.get(
          `https://kitsu.io/api/edge/anime?page%5Blimit%5D=12&page%5Boffset%5D=${offset}${animeSlugFiter}`
        );
        setAnimes(res.data.data)
        setIsLoading(false);
      };
      useEffect(()=>{
        getAnimes();
    
  }, [])
  
  return (<section>
    <div className='busqueda'>
      <Search
       onSubmit={(data)=>
      getAnimes(data.title.length !== 0? "&filter%5Bslug%5D=" + data.title : "")}/>

    </div>
    <div className="Galeria">
      {animes.map((anime) => (
        <Card anime={anime} />
      ))}
    </div>
    <div>
  <Pagination onClickAnimes ={getAnimes}/>
  </div></section>
  )
}

