import styles from "./_about.module.scss";
import God from "../../img/God.png";

function About() {
  return (
    <div className={styles.about} id="about">
      <p className={styles.about__title}>Обо мне</p>
      <div className={styles.about__container}>
        <div className={styles.text}>
          <p>Меня зовут Руслан, мне 22 года, я начинающий фронтенд-разработчик, который строит новую карьеру на том деле, которое мне действительно нравится. </p>
          <p>Я оттачивал свои навыки веб-разработчика, изучая создание веб-приложений/сайтов с использованием HTML (flex, Grid), BEM, CSS (Sass/Scss), JavaScript, React, Git.</p>
          <p>Мне нравится создавать сайты, и в последнее время я работаю с JavaScript, React, WP.</p>
        </div>
        <div className={styles.avatar}>
          <img src={God} alt="God" />
        </div>
      </div>
    </div>
  );
}

export default About;
