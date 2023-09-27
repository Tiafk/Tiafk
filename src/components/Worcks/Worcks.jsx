import styles from "./_worcks.module.scss";

import Warplay from "../../img/Warplay.PNG";
import Wealthfront from "../../img/Wealthfront.PNG";
import ojjo from "../../img/ojjo.PNG";
import Skilla from "../../img/Skilla.PNG";

function Worcks() {

  return (
    <div className={styles.worcks}>
      <div className={styles.worcks__top}>
        <div className={styles.title}>Мои проекты</div>
        <div className={styles.sub_title}>Перейти к просмотру работы можно нажав на изображение*</div>
      </div>
      <div className={styles.worcks__container}>
      </div>
    </div>
  );
}

export default Worcks;
