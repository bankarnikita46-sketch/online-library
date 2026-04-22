// Browse Books page with category filter and search
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";

const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi"];

const BrowseBooks = () => {
  const { category = "All" } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.list);
  const [search, setSearch] = useState("");

  // Filter by category and search query
  const filtered = books.filter((b) => {
    const matchCat = category === "All" || b.category === category;
    const q = search.toLowerCase();
    const matchSearch =
      b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">Browse Books</h1>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => navigate(`/books/${cat}`)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                category === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or author..."
          className="w-full md:w-96 px-4 py-2 border border-input rounded-md mb-6 bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />

        {/* Books grid */}
        {filtered.length === 0 ? (
          <p className="text-muted-foreground">No books found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default BrowseBooks;
