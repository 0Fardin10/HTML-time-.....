import Link from "next/link";
import react from "react";
const BookCard = ({ book }) => {
    const { id, title, description, price } = book;
    return (
       <div className="card bg-base-100  shadow-sm" > 
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">${price.toFixed(2)}</button>
      <Link href={`/books/${id}`}>
        <button className="btn btn-secondary">View Details</button>
      </Link>
    </div>
  </div>
</div>
    );  
};

export default BookCard;