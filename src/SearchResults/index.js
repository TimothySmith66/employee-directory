import React, { useContext } from "react";
import ArticleContext from "../../utils/ArticleContext";
import "./style.css";

function SearchResults() {
  const {name, image, phone, email, DOB} = useContext(ArticleContext);
  return (
    <row>
        <div>{name}</div>
        <a href={image}>{image}</a>
        <div>{phone}</div>
        <div>{email}</div>
        <div>{DOB}</div>
        </row>
  );
}

export default SearchResults;
