function Modal2({ setOpenModal2, title }) {
    return (
      <div style={{
        marginBottom: "25px",
        borderBottom: "2px solid red"
    }}>
        {title.map((a, id) =>
          a.movies.includes("https://swapi.dev/api/films/3/") ? (
            <p key={id}>{a.name}</p>
          ) : (
            <p key={id}></p>
          )
        )}
  
        <button style={{
      marginBottom: "25px",
      
  }}
          onClick={() => {
            setOpenModal2(false);
          }}
        >
          Close
        </button>
      </div>
    );
  }
  
  export default Modal2;