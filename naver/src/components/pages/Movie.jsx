import { useEffect, useState } from "react";
import { getMovies } from "../../apis";
import MovieList from "../templates/Movie/List";
import SearchForm from "../templates/Movie/SearchForm";

const Movie = () => {
  const [params, setParams] = useState({
    query: "",
    country: "ALL",
  });
  const { query, country } = params;
  const [list, setList] = useState([]);

  useEffect(() => {
    refreshList();
  }, [country, query]);

  const refreshList = async () => {
    if (!query) return;
    const params = { query };
    if (country !== "ALL") params.country = country;

    const { items } = await getMovies(params);
    setList(items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };
  return (
    <>
      <h1>영화</h1>
      <SearchForm onChange={handleChange} />

      <MovieList data={list} />
    </>
  );
};

export default Movie;
