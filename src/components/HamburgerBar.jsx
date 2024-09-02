import { GiHamburgerMenu } from "react-icons/gi";
import { MENU_LIST } from "../data/menu_data";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";

export const HamburgerBar = ({ isOpen, handleMenuToggle, setIsOpen }) => {
  const menuRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false)
//       }

//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     };
//   }, []);

  return (
    <>
      <div>
        <button onClick={handleMenuToggle}>
          <GiHamburgerMenu className="h-10 w-10 text-white md:hidden flex" />
        </button>
      </div>
      <div
        className={`absolute bg-orange-500 top-0 left-0 w-screen h-screen ${
          isOpen ? "" : "hidden"
        }`}
        ref={menuRef}
      >
        <button onClick={handleMenuToggle}>
          <IoCloseSharp className="h-10 w-10 absolute right-4 top-6 text-white" />
        </button>
        <nav className="flex flex-col gap-8 justify-center items-center h-full">
          {MENU_LIST.map((item, index) => (
            <button onClick={handleMenuToggle} key={item.text + index + "hamburgerbar"}>
              <a className="text-white text-3xl" href={item.href}>
                {item.text}
              </a>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
