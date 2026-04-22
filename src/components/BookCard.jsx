// Reusable book card component used on Home and Browse pages
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const BookCard = ({ book }) => {
  // Generate a deterministic gradient based on category for visual variety
  const gradients = {
    Fiction: "from-pink-400 to-rose-500",
    "Non-Fiction": "from-blue-400 to-cyan-500",
    "Sci-Fi": "from-purple-400 to-indigo-500",
  };
  const grad = gradients[book.category] || "from-slate-400 to-slate-600";

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
      {/* Book cover placeholder with gradient */}
      <div className={`bg-gradient-to-br ${grad} h-32 flex items-center justify-center`}>
        <span className="text-5xl">📚</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="inline-block self-start text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded-full mb-2">
          {book.category}
        </span>
        <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">by {book.author}</p>
        <div className="flex items-center gap-1 text-accent mb-4">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold text-foreground">{book.rating}</span>
        </div>
        <Link
          to={`/book/${book.id}`}
          className="mt-auto inline-flex items-center justify-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
