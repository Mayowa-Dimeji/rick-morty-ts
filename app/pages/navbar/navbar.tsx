import { NavLink } from "react-router";
const MyNavbar = () => {
  return (
    <section className="navbar shadow-lg flex justify-between p-6 font-orbitron">
      <a href="/" className="flex">
        <img src="/assets/pageLogo.png" alt="Logo" className="size-16" />
      </a>
      <NavLink
        to="/play"
        className="flex font-orbitron text-2xl border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 p-6"
      >
        Play
      </NavLink>
    </section>
  );
};
export default MyNavbar;
