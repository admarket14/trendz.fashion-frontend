import styles from "./styles.module.scss";
export default function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48">
      <path className={styles.top} d="m7.014 13a1.0001 1.0001 0 1 0 0 2h33.972a1.0001 1.0001 0 1 0 0-2z"/>
      <path className={styles.middle} d="m7.014 23a1.0001 1.0001 0 1 0 0 2h33.972a1.0001 1.0001 0 1 0 0-2z"/>
      <path className={styles.bottom} d="m7.014 33a1.0001 1.0001 0 1 0 0 2h33.972a1.0001 1.0001 0 1 0 0-2z"/>
    </svg>
  );
}
