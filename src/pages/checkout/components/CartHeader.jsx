import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from './CartHeader.module.css'

const CartHeader = () => {

    return (
        <div className={styles.cartHeaderContainer}>
            <nav className={styles.cartHeader}>
              <div className={styles.navbar_div}>
                <ul>
                  <li>
                    <Link to={"/app"}>
                      <FontAwesomeIcon icon={faArrowLeft}/>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
      );
    };

export default CartHeader