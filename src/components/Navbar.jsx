// Top navigation bar shown on most pages
import { Link, NavLink } from "react-router-dom";
import { BookOpen, Plus, Compass, Home } from "lucide-react";

const Navbar = () => {
  // Active link styling helper
  const linkClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground shadow-sm"
        : "text-foreground hover:bg-secondary"
    }`;

  return (
    <nav className="bg-card/80 backdrop-blur border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-lg">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="hidden sm:inline">Online Library</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" end className={linkClass}>
            <Home className="w-4 h-4" /> <span className="hidden sm:inline">Home</span>
          </NavLink>
          <NavLink to="/books/All" className={linkClass}>
            <Compass className="w-4 h-4" /> <span className="hidden sm:inline">Browse Books</span>
          </NavLink>
          <NavLink to="/add" className={linkClass}>
            <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Add Book</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
