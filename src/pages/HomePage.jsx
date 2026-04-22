// Landing page with welcome, categories and popular books
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";

const categories = [
  { name: "Fiction", icon: "📖", color: "from-pink-500 to-rose-500" },
  { name: "Non-Fiction", icon: "🧠", color: "from-blue-500 to-cyan-500" },
  { name: "Sci-Fi", icon: "🚀", color: "from-purple-500 to-indigo-500" },
];

const HomePage = () => {
  // Get books from redux store
  const books = useSelector((state) => state.books.list);
  const popularBooks = books.slice(0, 6);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> Your digital reading companion
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Welcome to the <br />
            <span className="text-accent-foreground bg-accent px-3 rounded-lg">Online Library</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover, browse and add your favourite books from across genres — all in one elegant place.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/books/All"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              Browse Books <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/add"
              className="bg-white/10 backdrop-blur border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Add a Book
            </Link>
          </div>
        </div>
        {/* Decorative blurred circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
      </section>

      <main className="max-w-6xl mx-auto px-4 py-14 flex-1 w-full">
        {/* Categories */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-foreground mb-2">Explore Categories</h2>
          <p className="text-muted-foreground mb-6">Pick a genre to start your journey</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/books/${cat.name}`}
                className={`bg-gradient-to-br ${cat.color} text-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group`}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
                <p className="text-white/80 text-sm flex items-center gap-1">
                  Browse <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Books */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-1">Popular Books</h2>
              <p className="text-muted-foreground">Hand-picked reads loved by our community</p>
            </div>
            <Link
              to="/books/All"
              className="hidden sm:inline-flex items-center gap-1 text-primary font-semibold hover:underline"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
