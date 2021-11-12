import React, {useState, useEffect} from 'react';
import {useNavigate, useParams,Link} from 'react-router-dom';
import { moviesList } from '../../assets/mookData';

const Trailer = () => {
       const [movie, setMovie] = useState([])
       const {id} = useParams()

       const fetchMovie = () => {
           const data =(moviesList)[id-1]
           setMovie(data)
           }

       useEffect(() =>{
           fetchMovie()
           },[])
       let navigate=useNavigate();

return (
   <div>
       <h1>{console.log(movie.title)}</h1>
       <iframe width="560" height="315" src={movie.annonce} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <br/>
       <Link to='/'>
            <button type="button"> Go  To Home </button>
       </Link>

   </div>
   
  );
}
export default Trailer;