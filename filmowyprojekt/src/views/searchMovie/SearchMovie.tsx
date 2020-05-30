import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {DebounceInput} from 'react-debounce-input'

const styleee = makeStyles({
  table: {
    minWidth: '650px',
  }
});


const SearchMovie = () => {
  const classes = styleee();
  const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
  const [movieToSearch, setMovieToSearch] = React.useState('');

  React.useEffect(() => {
    movieService.searchByName(movieToSearch).then(resp => {
      if (resp) {
        setMovies(resp);
      }
    });

    movieService.searchById('tt0848228');
  }, [movieToSearch]);


  return (
    <div >
      <NavPanel />
      <DebounceInput
      debounceTimeout={700}
        placeholder="Enter movie name"
        onChange={event => setMovieToSearch(event.target.value)}
        style={{ all:"initial",color: "green",fontFamily:"Arial",width: "200px",margin:"0 auto",display:"block",backgroundColor:"transparent",border:"1px solid black",borderBottom: "3px solid red",textAlign:"center",height:"35px",marginBottom:"23px",marginTop:"30px"}}
      />
      {!!movies?.movies.length &&
            movies?.movies.map(movie => (
              <Card style={{margin:"auto",marginBottom:"30px",width:"300px",color:"yellow"}}>
        <CardActionArea>
          <CardMedia>
            <img src={movie.poster}></img>
            </CardMedia>
          <CardContent>
          <Typography gutterBottom variant="h3" component="h1">
            {movie.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {movie.year}
          </Typography>
        </CardContent>
         
        </CardActionArea>
      </Card>
            ))
            }
    </div>
  );
};

export default SearchMovie;