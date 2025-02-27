
import { Link } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-200/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">ChartlyAI</Link>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors">Features</button>
            <button onClick={() => scrollToSection('comparison')} className="text-gray-300 hover:text-white transition-colors">Compare</button>
            <button onClick={() => scrollToSection('news')} className="text-gray-300 hover:text-white transition-colors">News</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
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
