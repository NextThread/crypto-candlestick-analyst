
import { Link } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-md border-b border-gray-200/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            ChartlyAI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors hover:scale-105">Features</button>
            <button onClick={() => scrollToSection('comparison')} className="text-gray-300 hover:text-white transition-colors hover:scale-105">Compare</button>
            <button onClick={() => scrollToSection('news')} className="text-gray-300 hover:text-white transition-colors hover:scale-105">News</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors hover:scale-105">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors hover:scale-105">Contact</button>
            {isSignedIn && (
              <button
                onClick={handleSignOut}
                className="text-gray-300 hover:text-white transition-colors hover:scale-105"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-md border-b border-gray-200/10 py-4">
            <div className="flex flex-col items-center gap-4">
              <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors w-full text-center py-2">Features</button>
              <button onClick={() => scrollToSection('comparison')} className="text-gray-300 hover:text-white transition-colors w-full text-center py-2">Compare</button>
              <button onClick={() => scrollToSection('news')} className="text-gray-300 hover:text-white transition-colors w-full text-center py-2">News</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors w-full text-center py-2">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors w-full text-center py-2">Contact</button>
              {isSignedIn && (
                <button
                  onClick={handleSignOut}
                  className="text-gray-300 hover:text-white transition-colors w-full text-center py-2"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

