import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { CartContext } from "../../Layouts/MainLayout";
import Swal from "sweetalert2";

const Header = () => {
  const { user, userLogout, userDelete } = useAuth()
  const { cartProducts, totalPrice } = useContext(CartContext)
  
 
  
  const navs =
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/products'>Products</NavLink>
      </li>
      {
         <li>
          <NavLink to='/addproduct'>Add Car</NavLink>
        </li>
      }
    </>
  
  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast("You logged out successfully")
      })
  }
  const handleUserDelete = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          userDelete()
            .then(() => {
              fetch(`http://localhost:5000/user/${user?.email}`, {
                method: "delete",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                     Swal.fire({
                       title: "Deleted!",
                       text: "Your file has been deleted.",
                       icon: "success",
                     });
                  }
                });
            })
            .catch((err) => console.log(err));
         
        }
      });
    
  }
 

  return (
    <div className="navbar bg-base-100">
      <Toaster></Toaster>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navs}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <span className="italic font-bold bg-logo-gradient bg-clip-text text-transparent rounded-lg">
            RNS
          </span>{" "}
          Auto
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navs}</ul>
      </div>
      <div className="navbar-end">
        {/* cart area */}
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item"> {cartProducts.length} </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg"> {cartProducts.length} Items</span>
                <span className="text-info">Subtotal: {totalPrice} lacs </span>
                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* user profile area */}
        {user ? (
          <div className="flex items-center gap-2">
            <p> {user.email} </p>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <button onClick={handleUserDelete}>Unregister</button>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login"> Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;