const MovieList = (props) => {
  const [a, b, c] = props.ShowMovie;

  return (
    <>
      <p>
        Episode {b}. {a}. Release date: {c}.
      </p>
    </>
  );
};

export default MovieList;
