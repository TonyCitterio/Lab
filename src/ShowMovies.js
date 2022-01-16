import MovieList from "./MovieList";
import { useState } from "react";
import Modal from "./Modal";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";


const ShowMovies = (props) => {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);
  
  // Setting the movies
  const test =
    props.movie.results &&
    props.movie.results.map((a) => [a.title, a.episode_id, a.release_date]);
  
  const copyTest = [...test];

  // Setting the actors
  let actor = [
    {
      id: 1,
      name : props.actors.results[0].name,
      movies: props.actors.results[0].films,
    }, 
    {
      id: 2,
      name : props.actors.results[1].name,
      movies: props.actors.results[1].films,
    },
    {
      id: 3,
      name : props.actors.results[2].name,
      movies: props.actors.results[2].films,
    },
    {
      id: 4,
      name : props.actors.results[3].name,
      movies: props.actors.results[3].films,
    },
    {
      id: 5,
      name : props.actors.results[4].name,
      movies: props.actors.results[4].films,
    },
    {
      id: 6,
      name : props.actors.results[5].name,
      movies: props.actors.results[5].films,
    },
    {
      id: 7,
      name : props.actors.results[6].name,
      movies: props.actors.results[6].films,
    },
    {
      id: 8,
      name : props.actors.results[7].name,
      movies: props.actors.results[7].films,
    },
    {
      id: 9,
      name : props.actors.results[8].name,
      movies: props.actors.results[8].films,
    },
    {
      id: 10,
      name : props.actors.results[9].name,
      movies: props.actors.results[9].films,
    },
    {
      id: 11,
      name : props.actors2.results[0].name,
      movies: props.actors2.results[0].films,
    }, 
    {
      id: 12,
      name : props.actors2.results[1].name,
      movies: props.actors2.results[1].films,
    },
    {
      id: 13,
      name : props.actors2.results[2].name,
      movies: props.actors2.results[2].films,
    },
    {
      id: 14,
      name : props.actors2.results[3].name,
      movies: props.actors2.results[3].films,
    },
    {
      id: 15,
      name : props.actors2.results[4].name,
      movies: props.actors2.results[4].films,
    },
    {
      id: 16,
      name : props.actors2.results[5].name,
      movies: props.actors2.results[5].films,
    },
    {
      id: 17,
      name : props.actors2.results[6].name,
      movies: props.actors2.results[6].films,
    },
    {
      id: 18,
      name : props.actors2.results[7].name,
      movies: props.actors2.results[7].films,
    },
    {
      id: 19,
      name : props.actors2.results[8].name,
      movies: props.actors2.results[8].films,
    },
    {
      id: 20,
      name : props.actors2.results[9].name,
      movies: props.actors2.results[9].films,
    },
    {
      id: 21,
      name : props.actors3.results[0].name,
      movies: props.actors3.results[0].films,
    }, 
    {
      id: 22,
      name : props.actors3.results[1].name,
      movies: props.actors3.results[1].films,
    },
    {
      id: 23,
      name : props.actors3.results[2].name,
      movies: props.actors3.results[2].films,
    },
    {
      id: 24,
      name : props.actors3.results[3].name,
      movies: props.actors3.results[3].films,
    },
    {
      id: 25,
      name : props.actors3.results[4].name,
      movies: props.actors3.results[4].films,
    },
    {
      id: 26,
      name : props.actors3.results[5].name,
      movies: props.actors3.results[5].films,
    },
    {
      id: 27,
      name : props.actors3.results[6].name,
      movies: props.actors3.results[6].films,
    },
    {
      id: 28,
      name : props.actors3.results[7].name,
      movies: props.actors3.results[7].films,
    },
    {
      id: 29,
      name : props.actors3.results[8].name,
      movies: props.actors3.results[8].films,
    },
    {
      id: 30,
      name : props.actors3.results[9].name,
      movies: props.actors3.results[9].films,
    },
    {
      id: 31,
      name : props.actors4.results[0].name,
      movies: props.actors4.results[0].films,
    }, 
    {
      id: 32,
      name : props.actors4.results[1].name,
      movies: props.actors4.results[1].films,
    },
    {
      id: 33,
      name : props.actors4.results[2].name,
      movies: props.actors4.results[2].films,
    },
    {
      id: 34,
      name : props.actors4.results[3].name,
      movies: props.actors4.results[3].films,
    },
    {
      id: 35,
      name : props.actors4.results[4].name,
      movies: props.actors4.results[4].films,
    },
    {
      id: 36,
      name : props.actors4.results[5].name,
      movies: props.actors4.results[5].films,
    },
    {
      id: 37,
      name : props.actors4.results[6].name,
      movies: props.actors4.results[6].films,
    },
    {
      id: 38,
      name : props.actors4.results[7].name,
      movies: props.actors4.results[7].films,
    },
    {
      id: 39,
      name : props.actors4.results[8].name,
      movies: props.actors4.results[8].films,
    },
    {
      id: 40,
      name : props.actors4.results[9].name,
      movies: props.actors4.results[9].films,
    },
    {
      id: 41,
      name : props.actors5.results[0].name,
      movies: props.actors5.results[0].films,
    }, 
    {
      id: 42,
      name : props.actors5.results[1].name,
      movies: props.actors5.results[1].films,
    },
    {
      id: 43,
      name : props.actors5.results[2].name,
      movies: props.actors5.results[2].films,
    },
    {
      id: 44,
      name : props.actors5.results[3].name,
      movies: props.actors5.results[3].films,
    },
    {
      id: 45,
      name : props.actors5.results[4].name,
      movies: props.actors5.results[4].films,
    },
    {
      id: 46,
      name : props.actors5.results[5].name,
      movies: props.actors5.results[5].films,
    },
    {
      id: 47,
      name : props.actors5.results[6].name,
      movies: props.actors5.results[6].films,
    },
    {
      id: 48,
      name : props.actors5.results[7].name,
      movies: props.actors5.results[7].films,
    },
    {
      id: 49,
      name : props.actors5.results[8].name,
      movies: props.actors5.results[8].films,
    },
    {
      id: 50,
      name : props.actors5.results[9].name,
      movies: props.actors5.results[9].films,
    },
    {
      id: 51,
      name : props.actors6.results[0].name,
      movies: props.actors6.results[0].films,
    }, 
    {
      id: 52,
      name : props.actors6.results[1].name,
      movies: props.actors6.results[1].films,
    },
    {
      id: 53,
      name : props.actors6.results[2].name,
      movies: props.actors6.results[2].films,
    },
    {
      id: 54,
      name : props.actors6.results[3].name,
      movies: props.actors6.results[3].films,
    },
    {
      id: 55,
      name : props.actors6.results[4].name,
      movies: props.actors6.results[4].films,
    },
    {
      id: 56,
      name : props.actors6.results[5].name,
      movies: props.actors6.results[5].films,
    },
    {
      id: 57,
      name : props.actors6.results[6].name,
      movies: props.actors6.results[6].films,
    },
    {
      id: 58,
      name : props.actors6.results[7].name,
      movies: props.actors6.results[7].films,
    },
    {
      id: 59,
      name : props.actors6.results[8].name,
      movies: props.actors6.results[8].films,
    },
    {
      id: 60,
      name : props.actors6.results[9].name,
      movies: props.actors6.results[9].films,
    },
    {
      id: 61,
      name : props.actors7.results[0].name,
      movies: props.actors7.results[0].films,
    }, 
    {
      id: 62,
      name : props.actors7.results[1].name,
      movies: props.actors7.results[1].films,
    },
    {
      id: 63,
      name : props.actors7.results[2].name,
      movies: props.actors7.results[2].films,
    },
    {
      id: 64,
      name : props.actors7.results[3].name,
      movies: props.actors7.results[3].films,
    },
    {
      id: 65,
      name : props.actors7.results[4].name,
      movies: props.actors7.results[4].films,
    },
    {
      id: 66,
      name : props.actors7.results[5].name,
      movies: props.actors7.results[5].films,
    },
    {
      id: 67,
      name : props.actors7.results[6].name,
      movies: props.actors7.results[6].films,
    },
    {
      id: 68,
      name : props.actors7.results[7].name,
      movies: props.actors7.results[7].films,
    },
    {
      id: 69,
      name : props.actors7.results[8].name,
      movies: props.actors7.results[8].films,
    },
    {
      id: 70,
      name : props.actors7.results[9].name,
      movies: props.actors7.results[9].films,
    },
    {
      id: 71,
      name : props.actors8.results[0].name,
      movies: props.actors8.results[0].films,
    }, 
    {
      id: 72,
      name : props.actors8.results[1].name,
      movies: props.actors8.results[1].films,
    },
    {
      id: 73,
      name : props.actors8.results[2].name,
      movies: props.actors8.results[2].films,
    },
    {
      id: 74,
      name : props.actors8.results[3].name,
      movies: props.actors8.results[3].films,
    },
    {
      id: 75,
      name : props.actors8.results[4].name,
      movies: props.actors8.results[4].films,
    },
    {
      id: 76,
      name : props.actors8.results[5].name,
      movies: props.actors8.results[5].films,
    },
    {
      id: 77,
      name : props.actors8.results[6].name,
      movies: props.actors8.results[6].films,
    },
    {
      id: 78,
      name : props.actors8.results[7].name,
      movies: props.actors8.results[7].films,
    },
    {
      id: 79,
      name : props.actors8.results[8].name,
      movies: props.actors8.results[8].films,
    },
    {
      id: 80,
      name : props.actors8.results[9].name,
      movies: props.actors8.results[9].films,
    },
    {
      id: 81,
      name : props.actors9.results[0].name,
      movies: props.actors9.results[0].films,
    }, 
    {
      id: 82,
      name : props.actors9.results[1].name,
      movies: props.actors9.results[1].films,
    }
  ]
 
  // Sorting the actors alphabetical
  actor.sort((a, b) => a.name.localeCompare(b.name, 'es', {sensitivity: 'base'}))

  return (
    <>
      <h3 style={{marginBottom: "25px"}}>Click on a movie to see the actors</h3>
      <button style={{
      marginBottom: "25px",
      marginRight: "25px"
      
  }}

        onClick={() => {
          setModalOpen(true);
        }}
      >
        
      <MovieList ShowMovie={copyTest[0]} />

      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} title={actor} />}
     
      <button style={{
      marginBottom: "25px",
      marginRight: "25px"
      
  }}
        onClick={() => {
          setModalOpen1(true);
        }}
      >
      
      <MovieList ShowMovie={copyTest[1]} />

      </button>

      {modalOpen1 && <Modal1 setOpenModal1={setModalOpen1} title={actor} />}

      <button style={{
      marginBottom: "25px",
      marginRight: "25px"
      
  }}
        onClick={() => {
          setModalOpen2(true);
        }}
      >
      
      <MovieList ShowMovie={copyTest[2]} />

      </button>

      {modalOpen2 && <Modal2 setOpenModal2={setModalOpen2} title={actor} />}

      <button style={{
      marginBottom: "25px",
      marginRight: "25px"
      
  }}
        onClick={() => {
          setModalOpen3(true);
        }}
      >
      
      <MovieList ShowMovie={copyTest[3]} />

      </button>

      {modalOpen3 && <Modal3 setOpenModal3={setModalOpen3} title={actor} />}

      <button style={{
      marginBottom: "25px",
      marginRight: "25px"
      
  }}
        onClick={() => {
          setModalOpen4(true);
        }}
      >
        
      <MovieList ShowMovie={copyTest[4]} />

      </button>

      {modalOpen4 && <Modal4 setOpenModal4={setModalOpen4} title={actor} />}

      <button style={{
      marginBottom: "25px",
      marginRight: "25px"
      
  }}
        onClick={() => {
          setModalOpen5(true);
        }}
      >
        
      <MovieList ShowMovie={copyTest[5]} />

      </button>

      {modalOpen5 && <Modal5 setOpenModal5={setModalOpen5} title={actor} />}
    </>
  );
};

export default ShowMovies;
