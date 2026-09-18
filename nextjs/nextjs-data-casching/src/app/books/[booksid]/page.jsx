import { notFound } from "next/navigation";
const generateStaticParams = async () => {
    const res = await fetch("http://localhost:500/books");
    const books = await res.json();
    return books.map(book=>({booksid:book.id}))
}
const BookDetailPage = async ({ params }) => {
    const { booksid } = await params;
    const res = await fetch(`http://localhost:500/books/${booksid}`);

    if (!res.ok) {
        notFound();
    }

    const book = await res.json();

    return (
        <article className="max-w-2xl space-y-4">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="text-lg">By {book.author}</p>
            <p>{book.description}</p>
            <div className="flex gap-4">
                <span>Genre: {book.genre}</span>
                <span>Price: ${book.price.toFixed(2)}</span>
            </div>
            <p>{book.inStock ? "In stock" : "Out of stock"}</p>
        </article>
    );
};
export default BookDetailPage;