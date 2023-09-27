import styles from "./_worck.module.scss";

function WorckImgLeft({worckOne}) {
  return (
    <div className={styles.worck}>
      <a className={styles.pichers}>
        <img src={worckOne.pichers} alt="#" />
      </a>
      <div className={styles.text_container}>
        <p>{worckOne.main_text}</p>
        <div className={styles.stack_wrapper}>
          <p>Стек:</p>
          <p>{worckOne.languages}</p>
        </div>
      </div>
    </div>
  );
}

export default WorckImgLeft;