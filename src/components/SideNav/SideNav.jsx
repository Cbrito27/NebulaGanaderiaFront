import "./SideNav.css";
import { NavLink } from "react-router-dom";
import { Grid } from "../../assets/icons/Grid";
import { LightBall } from "../../assets/icons/LightBall";
import { Pointer } from "../../assets/icons/Pointer";
import { Group } from "../../assets/icons/Group";
import ganado from "../../assets/icons/ganado.png"
import { Bell } from "../../assets/icons/Bell";
import { Admin } from "../../assets/icons/Admin";

const SideNav = ({ isOpen }) => {
  return (
    <ul className="sideNav" style={{ display: isOpen ? "block" : "none" }}>
      <li>
    {/*     <NavLink to="tablero" className="mainMenu">
          <figure>
            <Grid />
          </figure>
          <p>Tablero</p>
        </NavLink> */}
      </li>

      <li>
        <NavLink to="ganado" className="mainMenu">
          <figure>

            <LightBall />
          </figure>
          <p>Ganado</p>
        </NavLink>
      </li>

      <li>
        <NavLink to="alimentacion" className="mainMenu">
          <figure>
            <Pointer />
          </figure>
          <p>Alimentación</p>
        </NavLink>
      </li>

      <li>
        <NavLink to="reproduccion" className="mainMenu">
          <figure>
            <Group />
          </figure>
          <p>Reproducción</p>
        </NavLink>
      </li>

      <li>
        <NavLink to="produccion" className="mainMenu">
          <figure>
            <Bell />
          </figure>
          <p>Producción</p>
        </NavLink>
      </li>
{/* 
      <li>
        <NavLink to="administracion" className="mainMenu">
          <figure>
            <Admin />
          </figure>
          <p>Administración</p>
        </NavLink>
      </li> */}
    </ul>
  );
};

export { SideNav };
