// Book Details page - shows complete info about a single book
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft, Star } from "lucide-react";
import Navbar from "../components/Navbar";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.list);
  // Find book by id (params are strings, ids may be number or timestamp)
  const book = books.find((b) => String(b.id) === String(id));

  if (!book) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-3xl mx-auto p-8 text-center">
          <p className="text-lg text-muted-foreground mb-4">Book not found.</p>
          <button
            onClick={() => navigate("/books/All")}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <button
          onClick={() => navigate("/books/All")}
          className="flex items-center gap-2 text-primary font-semibold mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Browse
        </button>

        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <span className="inline-block text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded-full mb-3">
            {book.category}
          </span>
          <h1 className="text-3xl font-bold text-foreground mb-2">{book.title}</h1>
          <p className="text-muted-foreground mb-4">by {book.author}</p>
          <div className="flex items-center gap-1 text-accent mb-6">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-base font-semibold text-foreground">{book.rating}</span>
          </div>
          <h2 className="text-lg font-semibold text-foreground mb-2">Description</h2>
          <p className="text-foreground/80 leading-relaxed">{book.description}</p>
        </div>
      </main>
    </div>
  );
};

export default BookDetails;
