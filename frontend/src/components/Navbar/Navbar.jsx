const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
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
      <div className="flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
            alt="logo"
            className="h-10 me-4"
          />
          <h1 className="text-2xl font-semibold">BookHeaven</h1>
        </div>
        <div className="nav-links-bookheaven ">
          <div className="flex gap-4">
            {links.map((items, i) => (
              <div
                key={i}
                className="hover:text-blue-500 transition-all duration-300"
              >
                {items.title}
              </div>
            ))}
          </div>
          <div className="flex gap-4 ">
            <button>SignIn</button>
            <button>SignUp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
