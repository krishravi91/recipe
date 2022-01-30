import {useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from 'yup';


const formValidationSchema = yup.object({
  movieName: yup.string()
  .required("Please fill the name"),
  summary: yup.string()
  .min(20, "please enter a long summary")
  .required("please fill the summary"),
  moviePost: yup.string()
  .min(4, "minimum 4 characters")
  .required(" please enter the link"),
  rating:yup.number()
  .min(1,"between 0 to 10")
  .max(10,"maximum value 10")
  .required("please enter the value"),
  trailer: yup.string()
  .min(4,"minimum 4 characters")
  .required("please enter the link"),
});


export function AddMovies({movies, setMovies}){
  
  const {handleSubmit,values, handleChange, handleBlur,errors, touched,newMovie} =useFormik({
    initialValues: {
      movieName:"", 
      summary:"", 
      moviePost:"", 
      rating:"", 
      trailer:""
    }, 
    // validate: formValidation,
    validationSchema : formValidationSchema,
    onSubmit:(newMovie) =>{
        console.log("onSubmit",newMovie);
        addMovie(newMovie);  
    },
});

    // const [movieName,setName] =useState("");
    // const [moviePost,setPoster] =useState("");
    // const [summary,setSummary] =useState("");
    // const [rating,setRating] =useState("");
    // const [trailer,setTrailer] =useState("");
    const history = useHistory();
  
    // const resetMoviesForm = ()=>{
    //   setName("");
    //   setPoster("");
    //   setSummary("");
    //   setRating("");
    //   setTrailer("");
    // };
  
    const addMovie = (newMovie) => {
      // const newMovie = {
      //   movieName,
      //   moviePost,
      //   summary,
      //   rating,
      //   trailer,
      // };


      // console.log(newMovie);
      // setMovies([...movies, newMovie]);
      // resetMoviesForm();
      // history.push("/Mov")

      fetch("https://619a4b2f9022ea0017a7b0d9.mockapi.io/movies",{
        method: "POST",
        body: JSON.stringify(newMovie),
        
        headers:{"Content-type": "application/json"},   
      })
      .then(() => history.push("/Mov"));
      //console.log(newMovie);
    };
    return (
    <form onSubmit={handleSubmit}>
    <TextField
      id="movieName"   
      name="movieName"
      value={values.movieName} 
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie Name"
      variant = "outlined" 
      error = {errors.movieName && touched.movieName}
      helperText={errors.movieName && touched.movieName ? errors.movieName : ""}
    />
    
    <TextField
      id="summary"  
      name="summary"
      value={values.summary} 
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie Summary"
      variant = "outlined" 
      error = {errors.summary && touched.summary}
      helperText={errors.summary && touched.summary ? errors.summary : ""}
    />
    
    <TextField
      id="moviePost"  
      name="moviePost"
      value={values.moviePost} 
      onChange={handleChange}
      onBlur={handleBlur}
      label="Poster URL"
      variant = "outlined" 
      error = {errors.moviePost && touched.moviePost}
      helperText={errors.moviePost && touched.moviePost ? errors.moviePost : ""}
    />
    
    <TextField
      id="rating"  
      name="rating"
      value={values.rating} 
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie Rating"
      variant = "outlined"
      error = {errors.rating && touched.rating}
      helperText={errors.rating && touched.rating ? errors.rating : ""}
    />
    
    <TextField
      id="trailer"  
      name="trailer"
      value={values.trailer} 
      onChange={handleChange}
      onBlur={handleBlur}
      label="Movie trailer"
      variant = "outlined" 
      error = {errors.trailer && touched.trailer}
      helperText={errors.trailer && touched.trailer ? errors.trailer : ""}
    /> 
    
    <Button variant="contained" type="submit">Add Movie</Button> 
  </form> 
    ) 
  }