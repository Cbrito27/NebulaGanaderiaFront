import { dataDecrypt } from "../../util/encrypt";
import "./PerfilCard.css";
import profilePhoto from "../../assets/img/defaultPhoto.png";
const PerfilCard = () => {
  const user = dataDecrypt(sessionStorage.getItem("user"));
  console.log(user);
  
  return (
    <>
      <div className="perfilCard">
        <figure>
          <img src={profilePhoto} alt="" />
        </figure>
        <div className="perfilDetails">
          <h3>
            {user.nombre.split(" ")[0]}
          </h3>
          <p>{user.rol.nombre}</p>
          <span></span>
        </div>
      </div>
    </>
  );
};

export { PerfilCard };
