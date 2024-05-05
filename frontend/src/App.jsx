import NavBar from "./components/navbar/NavBar";
import CardBox from "./components/card/Card";
import axios from "axios";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [bookList, setBookList] = useState([]);
  const [search, setSearch] = useState();
  const getBooks = async () => {
    await axios.get("http://18.230.74.202:8080/book").then((data) => {
      setBookList(data.data);
    });
  };
  useEffect(() => {
    getBooks();
  }, []);
  useEffect(() => {
    if (search) {
      let newBookList = bookList.filter((item) => item.title.includes(search));
      setBookList(newBookList);
    } else {
      getBooks();
    }
  }, [search]);

  return (
    <>
      <NavBar setSearch={setSearch} />
      <section className="book-box">
        {bookList.length !== 0 &&
          bookList.map((book) => (
            <CardBox
              cover={book.cover}
              src={book.src}
              description={book.description}
              size={book.size}
              title={book.title}
              key={book._id}
            />
          ))}
      </section>
    </>
  );
}

export default App;
