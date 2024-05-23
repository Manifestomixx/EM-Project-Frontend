import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="container m-5">
        <h2>Oops..Error 404 !!!</h2>
        <p>Please go to main page</p>
        <Link to="/">Home</Link>
      </main>
    </>
  );
};

export default Error;