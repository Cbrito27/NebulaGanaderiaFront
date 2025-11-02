import "./Header.css";
import logoGanaderia from "../../assets/icons/nebulaIcon2.png";
import { PerfilCard } from "../PerfilCard";

const Header = ({ isOpen }) => {
  return (
    <>
      <header className="header" style={{ display: isOpen ? "flex" : "none" }}>
        <figure>
          <img src={logoGanaderia} alt="" />
        </figure>
        <PerfilCard />
      </header>
    </>
  );
};

export { Header };
