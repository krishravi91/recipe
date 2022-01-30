  //import "./styles.css";
import './App.css';
import {useEffect,useState} from 'react';
//import Button from '@mui/material/Button';
import {defaultMovies} from "./defaultMovies";
import {Notfound} from "./Notfound";
import {MovieDetail} from "./MovieDetail";
import {Mov} from "./Mov";
import {App1} from "./colors";
import {BasicForm} from "./BasicForm";
import { useHistory } from "react-router-dom";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Switch, Route, Link} from "react-router-dom"; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import {AddMovies} from "./AddMovies";
import {EditMovie} from "./EditMovie";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
 
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [mode, setMode] = useState("dark"); 
  const getMovies = () =>{
    fetch("https://619a4b2f9022ea0017a7b0d9.mockapi.io/movies",{
      method: "GET",
    })
    .then(data => data.json())
    .then((mvs) => setMovies(mvs))
   }
  
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(getMovies,[]);


    return (
    <ThemeProvider theme={theme}>
    <Paper>
    <div className ="App">
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Mov">Movies</Link> 
        </li>
        <li>
          <Link to="/colors">Color</Link>
        </li>
        <li>
          <Link to="/add">Add Movies</Link>
        </li>
      </ul> */}

      <AppBar position="static">
        <Toolbar>
          <Button
          onClick={()=>history.push(`/`)}
            size="large"
            color="inherit"
            aria-label="home"
          >
            Home
          </Button>
          <Button
          onClick={()=>history.push(`/Mov`)}
            size="large"
            color="inherit"
            aria-label="home"
          >
            Movie
          </Button>
          <Button
          onClick={()=>history.push(`/colors`)}
            size="large"
            color="inherit"
            aria-label="home"
          >
            Color
          </Button>
          <Button
          onClick={()=>history.push(`/add`)}
            size="large"
            color="inherit"
            aria-label="home"
          >
            Add Movies
          </Button>
          <Button
          onClick={()=>history.push(`/BasicForm`)}
            size="large"
            color="inherit"
            aria-label="home"
          >
            Basic Form
          </Button>
          <Button
          onClick={()=>setMode(mode=="light"?"dark": "light")}
            size="large"
            color="inherit"
            aria-label="home"
          >
            {mode=="light"?"dark": "light"} Mode
          </Button>
                   
        </Toolbar>
      </AppBar>

      <Switch>

      <Route exact path="/add">
          {/* <h1>movies {id} </h1> */}
          <AddMovies />
      </Route>

      <Route exact path="/edit/:id">
          {/* <h1>movies {id} </h1> */}
          <EditMovie />
      </Route>

       <Route exact path="/Mov/:id">
          {/* <h1>movies {id} </h1> */}
          <MovieDetail />
       </Route>

        <Route path="/Mov">
      <section className="mov-align">
      {movies.map(({moviePost,movieName,summary,rating,id}) => {
        return (
          <Mov post={moviePost}
            name={movieName}
            sum={summary}
            rat={rating} 
            id = {id}
            deleteButton={
            <IconButton
              onClick={() => {
                //const removeMovieIndex = (id) =>{
                // const removeMovieIndex = id;  
                // const remainingMovies = movies.filter(
                //   (mv,idx) => idx != removeMovieIndex
                // );
                // setMovies(remainingMovies);
                fetch(`https://619a4b2f9022ea0017a7b0d9.mockapi.io/movies/${id}`,{
                method: "Delete",
               }).then(()=> getMovies());
              }
              
            } 
              color = "error"
              aria-label="delete" 
            >
              <DeleteIcon />
            </IconButton>
            }     
        
        editButton={
          <IconButton
          style={{marginleft: "auto"}}
            onClick={() => history.push("/edit/"+id)}              
            color = "secondary"
            aria-label="delete" 
          >
            <EditIcon />
          </IconButton>
          }
        />  
      );
      })}
      </section>
          </Route>
        <Route path="/colors">
          <App1 />
        </Route>
        <Route path="/BasicForm">
          <BasicForm />
        </Route>
        <Route exact path="/">
          <h1>Welcome to the movie app</h1>
        </Route>
        <Route path="**">
          <Notfound />
        </Route>
        
      
    </Switch>
    </div>
    </Paper>
    </ThemeProvider>    
  )
}

export default App;

