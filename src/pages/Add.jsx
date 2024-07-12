import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(book);

  return (
    <div className="form">
      <h1>
        <Link to="/">‹</Link> Add New Book
      </h1>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="text"
        name="desc"
        onChange={handleChange}
        placeholder="desc"
      />
      <input
        type="number"
        name="price"
        onChange={handleChange}
        placeholder="price"
      />
      <input
        type="text"
        name="cover"
        onChange={handleChange}
        placeholder="imageURL"
      />
      <button className="formButton" type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Add;
