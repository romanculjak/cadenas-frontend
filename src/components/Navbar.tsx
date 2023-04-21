import { Link, NavLink } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="w-full flex justify-between items-center">
            <div className="flex-shrink-0">
              {/* Replace with your logo */}
              <Link to="/products">
                <span className="text-gray-800 text-xl">mock<span className="font-bold">store</span></span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Replace with your links */}
                <NavLink
                  to="/products"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;