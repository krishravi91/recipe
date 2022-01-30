import {useEffect,useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EditMovie({movies, setMovies}){
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
      fetch(`https://619a4b2f9022ea0017a7b0d9.mockapi.io/movies/${id}`,{
        method: "GET",
      })
      .then(data => data.json())
      .then((mvs) => setMovie(mvs))
    },[])

    return movie ? <UpdateMovie movie={movie}/> : "";


   function UpdateMovie({movie}){ 
    //const movie =movies[id];
    const [movieName,setName] =useState(movie.movieName);
    const [moviePost,setPoster] =useState(movie.moviePost);
    const [summary,setSummary] =useState(movie.summary);
    const [rating,setRating] =useState(movie.rating);
    const [trailer,setTrailer] =useState(movie.trailer);

    const history = useHistory();

    const editMovie = () => {
      const updateMovie = {
        movieName,
        moviePost,
        summary,
        rating,
        trailer,
      };
      // // console.log(newMovie);
      // const copyMovies = [...movies];
      // copyMovies[id] = updateMovie;
      
      // setMovies(copyMovies);

      fetch(`https://619a4b2f9022ea0017a7b0d9.mockapi.io/movies/${movie.id}`,{
        method: "PUT",
        body: JSON.stringify(updateMovie),
        headers:{"Content-type": "application/json"},   
      })
      .then(() => history.push("/Mov"));
    };

    
    return (
    <div>
    <TextField
    value ={movieName}
    onChange ={(event) => setName(event.target.value)}
    label="Movie Name"
    variant = "outlined" />
    <TextField
    value ={summary}
    onChange ={(event) => setSummary(event.target.value)}
    label="Movie Summary"
    variant = "outlined" />
    <TextField
    value ={moviePost}
    onChange ={(event) => setPoster(event.target.value)}
    label="Poster URL"
    variant = "outlined" />
    <TextField
    value ={rating}
    onChange ={(event) => setRating(event.target.value)}
    label="Movie Rating"
    variant = "outlined" />
    <TextField
    value ={trailer}
    onChange ={(event) => setTrailer(event.target.value)}
    label="Movie trailer"
    variant = "outlined" />
    <Button variant="contained" onClick={editMovie}>Save</Button> 
  </div> 
    ) 
  }
}