import React from "react";
import BookCard from "../components/BookCard";
const BooksPage = async () => {
    const res = await fetch("http://localhost:500/books", { cache: "no-store" });
{next:{revalidate: 20}} 
    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    const books = await res.json();

    return (
        <div>
            <h2>Books page: {books.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{ 
            books.map(book => <BookCard key={book.id} book={book} />)
                }</div>
        </div>
    );
};
export default BooksPage;