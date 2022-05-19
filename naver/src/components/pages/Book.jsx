//import styled from "styled-components";
import { useEffect, useState } from "react";
import { getBooks } from "../../apis";
import BookList from "../templates/Book/List";
import SearchForm from "../templates/Movie/SearchForm";

const Book = () => {
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

    const { items } = await getBooks(params);
    setList(items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };
  return (
    <>
      <h1>책</h1>
      <SearchForm onChange={handleChange} />

      <BookList data={list} />
    </>
  );
};

export default Book;
