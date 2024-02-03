/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
// Import the generated hook from our RTK Query API slice
import { useFetchBookQuery, usePatchBookMutation } from "../API/index";

// React Router imports (useParams)
import { useParams, useNavigate } from "react-router-dom";

export default function SingleBook({token}) {
  // get the item id from the url parameters
  const { bookId } = useParams();

  const { data = {}, error, isLoading } = useFetchBookQuery(bookId);

  const [patchBook] = usePatchBookMutation();
  const navigate = useNavigate();

  function AvailabilityUpdate(e) {
    // patchBook({bookId:e.id, availablity: false, token}); ENDPOINT NOT CURRENTLY WORKING
    navigate(`/users/me`);
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  // Show an error message if the fetch failed
  if (error) {
    console.log(error.data);
    return <div>Error</div>;
  }

  const book = data?.book;

  return (
    <section className="book-wrapper">
       <div className="book-header">
          <div className="book-wrapper">
            <img className="singleBook" src={book.coverimage} alt={book.title} />
          </div>
          <div className="book-title-wrapper">
            <h2> Title: {book.title} </h2>
            <p> Author: {book.author} </p>
            <p> Description: {book.description} </p>
            <p> Availability: {book.available ? "Yes" : "No"} </p>
          </div>

        </div>
        <button onClick={() => AvailabilityUpdate(book)}>Check Out</button>
    </section>
  );
}

//demo for items, workshop 28
