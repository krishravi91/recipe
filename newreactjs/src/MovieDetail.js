import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useParams, useHistory } from "react-router-dom";
import {useEffect,useState} from 'react';
// import App from './App';

// export function MovieDetail({movies}){
//   const {id} = useParams();
//  console.log(movies[id]);
//   return <h1>hi how r u {id}</h1>
// }
export function MovieDetail(){
    const {id} = useParams();
    const history = useHistory();
    //console.log(movies[id]);
    // const movie =movies[id]; 
    const [movie, setMovie] = useState({});
    useEffect(() => {
      fetch(`https://619a4b2f9022ea0017a7b0d9.mockapi.io/movies/${id}`,{
        method: "GET",
      })
      .then(data => data.json())
      .then((mvs) => setMovie(mvs))
    },[])
      
     return (
    <div>
      <iframe width="853" 
      height="480" 
      src={movie.trailer}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>
    <div className ="mov-cont">
    <div className ="mov-spec">
            <h3 className ="mov-Name"> {movie.movieName} </h3>
            <p> {movie.rating} </p> 
            <p className ="mov-sum" > {movie.summary} </p>
            
    </div>  
  </div>
  <Button 
  onClick={()=> history.goBack()}
  variant="contained" 
  startIcon ={<KeyboardBackspaceIcon />}>Back</Button>
  </div>
     );
  }