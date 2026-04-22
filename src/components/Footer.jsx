// Footer component shown at the bottom of pages
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-primary font-bold">
          <BookOpen className="w-5 h-5" />
          Online Library
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Online Library System. Built with React + Vite + Redux Toolkit.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
