/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
// Import the generated hook from our RTK Query API slice
import { useFetchBooksQuery } from "../API/index";

// React Router imports (useNavigate)
import { useNavigate } from "react-router-dom";

export default function AllBooks(){
    const navigate = useNavigate();
    const { data = {}, error, isLoading } = useFetchBooksQuery();

    // Show a loading message while data is being fetched
  if (isLoading) {
    return <div>Loading</div>;
  }
  // Show an error message if the fetch failed
  if (error) {
    console.log(error.data);
    return <div>Error</div>;
  }
  console.log(data);

  return (
    <>

      {/* ALL BOOKS MAP */}
      <div className="books">
        {/* Map through the data array and generate a div for each book */}
        {data?.books.map((book) => (
          <button
            key={book.id}
            onClick={() => navigate(`/books/${book.id}`)}
          >
            {/* Use the book's ID as the key for this div */}
            <div className="book-card">
              {/* Display the book's image, with the book's title as alt text */}
              <div className="book-image-container">
                <img className="book-image" src={book.coverimage} />
              </div>

              <div className="book-details">
                <h2> Title: {book.title} </h2>
                <p> Author: {book.author} </p>
                <p> Description: {book.description} </p>
                <p> Availability: {book.available ? "Yes" :"No"} </p>
              </div>
            </div>
          </button>
        ))}
        ;
      </div>
    </>
  );
}