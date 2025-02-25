
import { Link } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-200/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">CryptoAI</Link>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            {/* <Link to="/subscribe" className="text-gray-300 hover:text-white transition-colors">Subscribe</Link> */}
            {isSignedIn && (
              <button
                onClick={handleSignOut}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
