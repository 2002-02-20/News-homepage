import burgerMenu from "../assets/images/icon-menu.svg";

export const NavBar = () => {
  return (
    <>
      <ul className="absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categorias</a>
        </li>
      </ul>
      <img
        className="w-10 h-4 cursor-pointer sm:hidden items-center"
        src={burgerMenu}
        alt="Menu Hamburgesa"
      />
    </>
  );
}
