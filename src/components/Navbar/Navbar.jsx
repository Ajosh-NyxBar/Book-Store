import React from "react";
import Logo from "../../assets/logo.png";

const Menu = [
  {
    id: 1,
    title: "Home",
    link: "/#",
  },
  {
    id: 2,
    title: "Best Seller",
    link: "/#services",
  },
];
const Navbar = () => {
  return (
    <div>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              Ajosh Books
            </a>
          </div>
          <div>
            <ul className="items-center gap-4 hidden sm:flex">
              {Menu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="inline-block py-4 px-4 hover:text-primary duration-200">{item.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
