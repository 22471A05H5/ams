import { useState } from "react";
import logoShot from "@/assets/Screenshot_2025-09-26_125625-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services", 
      hasDropdown: true,
      items: [
        { name: "Social Media Content & Handling", href: "/services/social-media" },
        { name: "Leads Generation & Management", href: "/services/leads" },
        { name: "Performance Marketing", href: "/services/performance" },
        { name: "Branding & Creative Designs", href: "/services/branding" },
        { name: "Web Development", href: "/services/web-design" },
      ]
    },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  // Use a light navbar to ensure the dark screenshot logo has strong contrast
  const useDarkNavbar = false;
  const logo = logoShot;
  const headerClass = useDarkNavbar
    ? "navbar-gradient sticky top-0 z-50"
    : "sticky top-0 z-50 bg-white border-b border-gray-200";
  const linkColor = (active: boolean) => {
    if (useDarkNavbar) return active ? "text-white" : "text-white/80 hover:text-white";
    return active ? "text-[#373643]" : "text-[#373643]/80 hover:text-[#373643]";
  };
  const iconColor = useDarkNavbar ? "text-white" : "text-[#373643]";

  return (
    <header className={headerClass}>
      <div className="w-full pl-5 pr-4 sm:pl-8 sm:pr-6 lg:pl-10 lg:pr-10 xl:pr-14">
        <div className="flex items-center h-16 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="AMS ElevateX" className="h-10 md:h-12 lg:h-14 w-auto shrink-0" />
          </Link>

          {/* Desktop Navigation (centered) */}
          <nav className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${linkColor(
                    isActive(item.href)
                  )}`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4 ml-1" />}
                </Link>
                {item.hasDropdown && item.items && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white text-[#373643] rounded-lg shadow-xl border border-gray-200 min-w-[240px] py-2 z-50">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button (right aligned) */}
          <div className="hidden md:flex items-center ml-auto">
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary-light to-primary text-white hover:opacity-90 rounded-full px-6"
              >
                Let's talk →
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button (right aligned on mobile) */}
          <button
            className={`md:hidden mobile-menu-btn ${iconColor} ml-auto`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 hamburger-icon open" />
            ) : (
              <Menu className="h-6 w-6 hamburger-icon" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="mobile-nav-item">
                    <Link
                      to={item.href}
                      className="block w-full text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                  {item.hasDropdown && item.items && (
                    <div className="mobile-submenu">
                      {item.items.map((sub) => (
                        <div key={sub.name} className="mobile-submenu-item">
                          <Link
                            to={sub.href}
                            className="block w-full text-left"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mobile-cta">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <button>
                  Let's talk →
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;