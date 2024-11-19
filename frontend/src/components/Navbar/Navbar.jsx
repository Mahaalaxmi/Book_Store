import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
            alt="logo"
            className="h-10 me-4"
          />
          <h1 className="text-2xl font-semibold">BookHeaven</h1>
        </Link>
        <div className="nav-links-bookheaven block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((items, i) => (
              <Link
                to={items.link}
                key={i}
                className="hover:text-blue-500 transition-all duration-300"
              >
                {items.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4 ">
            <Link
              to="/Login"
              className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="Signup"
              className="px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              SignUp
            </Link>
          </div>
          <button className="text-white text-2xl hover:text-zinc-400">
            <TiThMenu />
          </button>
        </div>
      </nav>
      <div className="bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center">
        {links.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            className="text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300"
          >
            {items.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
