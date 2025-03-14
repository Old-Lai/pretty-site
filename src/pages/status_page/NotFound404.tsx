import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function NotFound404() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="mt-4 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link to="/">
        <Button className="mt-4">Go To Home</Button>
      </Link>
      {/* Additional content or a link back to the home page can go here */}
    </div>
  );
}
