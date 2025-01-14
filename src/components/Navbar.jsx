import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="">
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div>
            <img src="../logo.png" alt="" className="h-14" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-5">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="cart">
            <div>
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full ">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>

        <div>
          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
