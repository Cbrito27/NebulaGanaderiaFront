import "./Header.css";
import nebulaIcon2 from "../../assets/icons/nebulaicon2.svg";
import { PerfilCard } from "../PerfilCard";

const Header = ({ isOpen }) => {
  return (
    <>
      <header className="header" style={{ display: isOpen ? "flex" : "none" }}>
        <figure>
          <img src={nebulaIcon2} alt="" />
        </figure>
        <PerfilCard />
      </header>
    </>
  );
};

export { Header };
