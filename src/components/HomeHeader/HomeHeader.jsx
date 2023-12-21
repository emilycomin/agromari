import Logo from "../../img/logos/AGROm.jpg";
import styles from "./HomeHeader.module.css";
import { Phone } from "@phosphor-icons/react";

export default function HomeHeader() {
  return (
    <div className={styles.homeContainer}>
      <img src={Logo} />
      <h3 className="telInfo">
        <Phone size={38} color="#e98719" />
        (51) 33248-0377
      </h3>
    </div>
  );
}
