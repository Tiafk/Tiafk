import styles from "./_worcks.module.scss";

import Warplay from "../../img/Warplay.png";
import Wealthfront from "../../img/Wealthfront.png";
import ojjo from "../../img/Ojjo.png";
import Skilla from "../../img/Skilla.png";

function Worcks() {
  return (
    <div className={styles.worcks} id="worck">
      <div className={styles.worcks__top}>
        <div className={styles.title}>Мои проекты</div>
        <div className={styles.sub_title}>Перейти к просмотру работы можно нажав на изображение*</div>
      </div>
      <div className={styles.worcks__container}>
        <div className={styles.worck}>
          <a className={styles.picture} href="https://tiafk.github.io/Warplaycloud/">
            <img src={Warplay} alt="#" />
          </a>
          <div className={styles.text_container}>
            <p>Веб-сайт “Warplay.cloud”, полностью адаптивен под все устройства,работа до ужаса простая, функционала не много.</p>
            <div className={styles.stack_wrapper}>
              <p>Стек:</p>
              <p className={styles.stack}>HTML SCSS JS </p>
            </div>
          </div>
          <div className={styles.text_mobile}>
            <p>Веб-сайт “Warplay.cloud”, полностью адаптивен под все устройства,работа до ужаса простая, функционала не много.</p>
            <div className={styles.stack_wrapper}>
              <p>Стек:</p>
              <p className={styles.stack}>HTML SCSS JS </p>
            </div>
          </div>
        </div>
        <div className={styles.worck}>
          <div className={styles.text_container}>
            <p>Веб-сайт “Wealthfront”, задачей было настроить адаптивность сайта.</p>
            <div className={styles.stack_wrapper}>
              <p>Стек:</p>
              <p className={styles.stack}>HTML SCSS</p>
            </div>
          </div>
          <a className={styles.picture} href="https://tiafk.github.io/Wealthffront/">
            <img src={Wealthfront} alt="#" />
          </a>
          <div className={styles.text_mobile}>
            <p>Веб-сайт “Wealthfront”, задачей было настроить адаптивность сайта.</p>
            <div className={styles.stack_wrapper}>
              <p>Стек:</p>
              <p className={styles.stack}>HTML SCSS</p>
            </div>
          </div>
        </div>
        <div className={styles.worck}>
          <a className={styles.picture} href="https://tiafk.github.io/OJJO/">
            <img src={ojjo} alt="#" />
          </a>
          <div className={styles.text_container}>
            <p>Магазин ювелирных украшений “OJJO”, верстка выполнена на React, адаптивен под все устройства, задачей было так же реализовать фильтрацию.</p>
            <div className={styles.stack_wrapper}>
              <p>Стек:</p>
              <p className={styles.stack}>HTML SCSS JS React</p>
            </div>
          </div>
          <div className={styles.text_mobile}>
            <p>Магазин ювелирных украшений “OJJO”, верстка выполнена на React, адаптивен под все устройства, задачей было так же реализовать фильтрацию.</p>
            <div className={styles.stack_wrapper}>
              <p>Стек:</p>
              <p className={styles.stack}>HTML SCSS JS React</p>
            </div>
          </div>
        </div>
        <div className={styles.worck}>
          <div className={styles.text_container}>
            <p>Веб-сайт по обработке звонков “Skilla IS”, выполнен БЕЗ адаптива, задачей было перенести верстку на React и реализовать фильтрацию по номеру телефона.</p>
            <div className={styles.stack_wrapper}>
              <p>Стек:</p>
              <p className={styles.stack}>HTML SCSS JS React</p>
            </div>
          </div>
          <a className={styles.picture} href="https://tiafk.github.io/GitTest15/">
            <img src={Skilla} alt="#" />
          </a>
          <div className={styles.text_mobile}>
            <p>Веб-сайт по обработке звонков “Skilla IS”, выполнен БЕЗ адаптива, задачей было перенести верстку на React и реализовать фильтрацию по номеру телефона.</p>
            <div className={styles.stack_wrapper}>
              <p>Стек:</p>
              <p className={styles.stack}>HTML SCSS JS React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worcks;