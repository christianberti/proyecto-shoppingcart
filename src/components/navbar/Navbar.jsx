import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext)
  
  const navigate = useNavigate()

  const handleClick = () => {

      logout()

      navigate('/login', {
      replace: false
    })
  }

  return (
    <nav className={styles.navbar}>
      <div>
        <ul>
          <li>
            <span>Bienvenido {user}</span>
          </li>
        </ul>
      </div>

      <div className={styles.navbar_div}>
        <ul>
          <li>
            <Link to={"/checkout"}>
              <FontAwesomeIcon icon={faCartShopping}/>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            {/* logout */}
            <Link onClick={handleClick}>Salir</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
