import styles from "./_header.module.scss";
import React, { useState } from "react";
import logo from "../../img/Logo.svg";
import Nav from "./NavLink/Nav";

function Home() {
  const [nav] = useState([
    { text: "Главная", link:'#home'},
    { text: "Обо мне",link:'#about'},
    { text: "Мои проекты",link:'#worck'},
    { text: "Контакты",link:'#contact'},
  ]);

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="#logo" />
      </div>
      <ul className={styles.header__navigation}>
        {nav.map((nav, ww) => (
          <Nav nav={nav} key={ww} />
        ))}
      </ul>
    </div>
  );
}

export default Home;