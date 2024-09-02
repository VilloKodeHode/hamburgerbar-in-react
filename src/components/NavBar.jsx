import { MENU_LIST } from "../data/menu_data";

export const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-start">
      <div className="hidden md:flex flex-row jusify-end gap-8 items-center text-white">
{MENU_LIST.map((item, index)=> (
   <button key={item.text+index}>
    <a href={item.href}>{item.text}</a>
   </button> 
))}
      </div>
    </nav>
  );
};
