//import PropTypes from 'prop-types'; wyrzuca błąd, chyba bym musiał użyć react-create-app żeby import działał ?

const movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src:"https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-w-iext43238206.jpg"
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src:"https://i.ytimg.com/vi/QWrYQMwzWTs/maxresdefault.jpg"
  },
  {
  	id: 3,
    title: 'Gra o Tron',
    desc: 'Serial o walce o władzę',
    src:"https://ecsmedia.pl/c/gra-o-tron-piesn-lodu-i-ognia-tom-1-w-iext38002957.jpg"
  },
  {
  	id: 4,
    title: 'Nietykalni',
    desc: 'Sparaliżowany milioner zatrudnia do opieki młodego chłopaka z przedmieścia, który właśnie wyszedł z więzienia.',
    src:"https://ssl-gfx.filmweb.pl/po/33/90/583390/7441162.3.jpg"
  },
  {
  	id: 5,
    title: 'Skazani na Shawshank',
    desc: 'Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.',
    src:"https://podobnefilmy.com/img_pl/movie/thumb/68/11070.jpg"
  }
];


function MovieTitle(props) {
  return <h2>{props.title}</h2>;
}
/* 
MovieTitle.propTypes = {
  name: PropTypes.string
};
*/

function MovieDesc(props) {
  return <p>{props.desc}</p>;
}


function MovieSrc(props) {
  return <img src={props.src}/>;
}


class Movie extends React.Component {
  render() {
    return (
    	<div>
  			<h1>Lista filmów</h1>
  			<ul>{moviesElements}</ul>
  		</div>
  	);
  }
}


let moviesElements = movies.map(function(movie) {
  return (
  		<li key={movie.id}>
  			<MovieTitle title= {movie.title} />
  			<MovieDesc desc= {movie.desc} />
  			<MovieSrc src= {movie.src} />
  		</li>
    );
});



const element = <Movie />;


ReactDOM.render(
  element,
  document.getElementById('root')
);
