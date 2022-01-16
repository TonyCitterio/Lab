import ShowMovies from "./ShowMovies";
import useFetch from "./useFetch.js";
import Spinner from "./Spinner";
import Navbar from "./Navbar";


// Fetching the data
const GetData = () => {
  const movies = useFetch("https://swapi.dev/api/films");
  const actors = useFetch("https://swapi.dev/api/people"); 
  const actors2 = useFetch("https://swapi.dev/api/people/?page=2");
  const actors3 = useFetch("https://swapi.dev/api/people/?page=3");
  const actors4 = useFetch("https://swapi.dev/api/people/?page=4");
  const actors5 = useFetch("https://swapi.dev/api/people/?page=5");
  const actors6 = useFetch("https://swapi.dev/api/people/?page=6");
  const actors7 = useFetch("https://swapi.dev/api/people/?page=7");
  const actors8 = useFetch("https://swapi.dev/api/people/?page=8");
  const actors9 = useFetch("https://swapi.dev/api/people/?page=9");        

  

  console.log("jag blev laddad");
  

  if (movies.count === 6) {
    return (
      <>
        <Navbar />
        <ShowMovies movie={movies} actors={actors} actors2={actors2} actors3={actors3} actors4={actors4} actors5={actors5} actors6={actors6} actors7={actors7} actors8={actors8} actors9={actors9}  />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default GetData;
