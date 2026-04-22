// 404 Page - shown for invalid routes. No Navbar as per requirements.
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-3">404</h1>
        <p className="text-xl text-foreground mb-2">Page Not Found</p>
        <p className="text-sm text-muted-foreground mb-6">
          Invalid path: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
