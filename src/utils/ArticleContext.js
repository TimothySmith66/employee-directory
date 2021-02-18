import React from "react";

const ArticleContext = React.createContext({
  image: "",
  name: "",
  phone: "",
  email: "",
  DOB: ""
});

export default ArticleContext;
