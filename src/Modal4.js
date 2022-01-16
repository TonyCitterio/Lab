function Modal4({ setOpenModal4, title }) {
    return (
      <div style={{
        marginBottom: "25px",
        borderBottom: "2px solid red"
    }}>
        {title.map((a, id) =>
          a.movies.includes("https://swapi.dev/api/films/5/") ? (
            <p key={id}>{a.name}</p>
          ) : (
            <p key={id}></p>
          )
        )}
  
        <button style={{
      marginBottom: "25px",
      
  }}
          onClick={() => {
            setOpenModal4(false);
          }}
        >
          Close
        </button>
      </div>
    );
  }
  
  export default Modal4;