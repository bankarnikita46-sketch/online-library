// Add Book page - form to add a new book to redux state
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";
import Navbar from "../components/Navbar";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local form state
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "Fiction",
    description: "",
    rating: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - all fields required
    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      setError("All fields are required.");
      return;
    }
    // Dispatch addBook action
    dispatch(addBook({ ...form, rating: parseFloat(form.rating) }));
    // Redirect to Browse Books page
    navigate("/books/All");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-foreground mb-6">Add a New Book</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4"
        >
          {error && (
            <p className="bg-destructive/10 text-destructive px-3 py-2 rounded-md text-sm">
              {error}
            </p>
          )}

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Author</label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            >
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Sci-Fi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Rating (0-5)</label>
            <input
              name="rating"
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={form.rating}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            Add Book
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddBook;
